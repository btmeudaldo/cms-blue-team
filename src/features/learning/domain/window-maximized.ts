export const MAXIMIZE_BANNER_DISMISSED_KEY = "cbt_maximize_banner_dismissed";

export type WindowMetrics = {
  availWidth: number;
  availHeight: number;
  outerWidth: number;
  outerHeight: number;
  isFullscreen?: boolean;
};

/**
 * Detects whether a desktop browser window is noticeably smaller than the
 * available screen area (i.e. not maximized).
 *
 * Mobile/tablet screens (`availWidth < 1024`) and fullscreen mode always
 * return `false` so the hint never bothers touch users or fullscreen viewers.
 */
export function isWindowUnmaximized({
  availWidth,
  availHeight,
  outerWidth,
  outerHeight,
  isFullscreen = false,
}: WindowMetrics): boolean {
  if (isFullscreen) return false;
  if (availWidth < 1024 || availHeight <= 0) return false;
  if (outerWidth <= 0 || outerHeight <= 0) return false;

  const widthTolerance = 40;
  const heightTolerance = 60;

  return (
    outerWidth < availWidth - widthTolerance ||
    outerHeight < availHeight - heightTolerance
  );
}
