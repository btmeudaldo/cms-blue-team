<?php
declare(strict_types=1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$rawUrl = isset($_GET['url']) ? trim((string)$_GET['url']) : '';
if ($rawUrl === '') {
    http_response_code(400);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Missing url parameter']);
    exit;
}

$parts = parse_url($rawUrl);
$scheme = strtolower((string)($parts['scheme'] ?? ''));
$host = strtolower((string)($parts['host'] ?? ''));
$path = (string)($parts['path'] ?? '');

$allowedHosts = [
    'www.blueteam.es',
    'blueteam.es',
    'wkxylgsauhruoopclfwm.supabase.co',
];

if ($scheme !== 'https' || !in_array($host, $allowedHosts, true)) {
    http_response_code(403);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Origin not allowed']);
    exit;
}

// Fast local disk read when requesting /elearning/media/... or /elearning-preview/media/... from blueteam.es
if ($host === 'www.blueteam.es' || $host === 'blueteam.es') {
    $mediaPos = strpos($path, '/media/');
    if ($mediaPos !== false) {
        $relMedia = substr($path, $mediaPos + strlen('/media/'));
        $baseDir = realpath(dirname(__DIR__) . '/media');
        if ($baseDir !== false && $relMedia !== '' && !str_contains($relMedia, '..')) {
            $candidate = realpath($baseDir . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $relMedia));
            if ($candidate !== false && str_starts_with($candidate, $baseDir . DIRECTORY_SEPARATOR) && is_file($candidate)) {
                $finfo = new finfo(FILEINFO_MIME_TYPE);
                $mime = $finfo->file($candidate) ?: 'application/octet-stream';
                if (str_starts_with($mime, 'image/')) {
                    header('Content-Type: ' . $mime);
                    header('Content-Length: ' . filesize($candidate));
                    readfile($candidate);
                    exit;
                }
            }
        }
    }
}

$ctx = stream_context_create([
    'http' => [
        'method' => 'GET',
        'timeout' => 15,
        'follow_location' => 0,
        'header' => "User-Agent: BlueTeam-Media-Proxy/1.0\r\n",
    ],
]);

$body = @file_get_contents($rawUrl, false, $ctx);
if ($body === false || strlen($body) > 12 * 1024 * 1024) {
    http_response_code(502);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Failed to fetch upstream image']);
    exit;
}

$finfo = new finfo(FILEINFO_MIME_TYPE);
$mime = $finfo->buffer($body) ?: 'application/octet-stream';
if (!str_starts_with($mime, 'image/')) {
    http_response_code(415);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Upstream resource is not an image']);
    exit;
}

header('Content-Type: ' . $mime);
header('Content-Length: ' . strlen($body));
echo $body;
