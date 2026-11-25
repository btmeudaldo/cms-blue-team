<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Optional shared secret token if configured on Hostalia
$expectedToken = getenv('CMS_MEDIA_UPLOAD_TOKEN');
if ($expectedToken !== false && $expectedToken !== '') {
    $provided = $_SERVER['HTTP_X_UPLOAD_TOKEN'] ?? '';
    if (!hash_equals($expectedToken, $provided)) {
        http_response_code(401);
        echo json_encode(['error' => 'Unauthorized']);
        exit;
    }
}

if (!isset($_FILES['file']) || !is_uploaded_file($_FILES['file']['tmp_name'])) {
    http_response_code(400);
    echo json_encode(['error' => 'No file uploaded']);
    exit;
}

$file = $_FILES['file'];
$maxBytes = 5 * 1024 * 1024; // 5 MB
if ((int)$file['size'] > $maxBytes) {
    http_response_code(413);
    echo json_encode(['error' => 'File exceeds 5 MB limit']);
    exit;
}

$finfo = new finfo(FILEINFO_MIME_TYPE);
$mime = $finfo->file($file['tmp_name']);
$extMap = [
    'image/webp' => 'webp',
    'image/jpeg' => 'jpg',
    'image/png' => 'png',
    'image/gif' => 'gif',
    'image/svg+xml' => 'svg',
];

if (!isset($extMap[$mime])) {
    http_response_code(415);
    echo json_encode(['error' => 'Unsupported image format']);
    exit;
}

$ext = $extMap[$mime];

// Allow safe in-place overwrite ONLY for existing MCC PDP WebP images
$overwriteMcc = isset($_POST['overwriteMccFilename']) ? trim((string)$_POST['overwriteMccFilename']) : '';
if ($overwriteMcc !== '' && $ext === 'webp' && preg_match('/^(?:p\d{3}|fcom_a320_fcu)_[a-z0-9_]+\.webp$/', $overwriteMcc)) {
    $pdpDir = dirname(__DIR__) . '/media/mcc/pdp';
    $pdpTarget = $pdpDir . '/' . $overwriteMcc;
    if (is_dir($pdpDir) && file_exists($pdpTarget)) {
        if (!move_uploaded_file($file['tmp_name'], $pdpTarget)) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to overwrite MCC PDP image']);
            exit;
        }
        $version = time();
        echo json_encode([
            'url' => '/media/mcc/pdp/' . $overwriteMcc . '?v=' . $version,
            'canonicalUrl' => '/media/mcc/pdp/' . $overwriteMcc,
            'overwritten' => true,
        ]);
        exit;
    }
}

$subDir = date('Y-m');
$baseDir = dirname(__DIR__) . '/media/lessons/' . $subDir;

if (!is_dir($baseDir) && !mkdir($baseDir, 0755, true) && !is_dir($baseDir)) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to create media directory']);
    exit;
}

$hash = substr(sha1_file($file['tmp_name']) ?: bin2hex(random_bytes(8)), 0, 12);
$rawName = pathinfo((string)$file['name'], PATHINFO_FILENAME);
$slug = strtolower(preg_replace('/[^a-zA-Z0-9_-]+/', '-', $rawName) ?? 'image');
$slug = trim($slug, '-') ?: 'image';
$filename = $hash . '-' . substr($slug, 0, 40) . '.' . $ext;
$targetPath = $baseDir . '/' . $filename;

if (!file_exists($targetPath) && !move_uploaded_file($file['tmp_name'], $targetPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to store uploaded file']);
    exit;
}

echo json_encode([
    'url' => '/media/lessons/' . $subDir . '/' . $filename,
]);
