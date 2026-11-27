import { describe, expect, it } from "vitest";
import {
  canCompleteLesson,
  formatLessonSeconds,
  getSlideRealMinSeconds,
  getSlideRealMinSecondsForIndex,
  getSlideTargetSecondsList,
  getSlideVideoSeconds,
  getSlideWordCount,
  remainingLessonSeconds,
  restoreSlideProgressFromActiveSeconds,
} from "./lesson-progress";
describe("server acknowledged lesson time", () => {
  it("computes real per-slide durations and formats seconds cleanly", () => {
    expect(getSlideRealMinSeconds(2700, 20)).toBe(135);
    expect(getSlideRealMinSeconds(10, 2)).toBe(5);
    expect(getSlideRealMinSeconds(0, 10)).toBe(0);
    expect(formatLessonSeconds(45)).toBe("45s");
    expect(formatLessonSeconds(135)).toBe("2:15");
    expect(formatLessonSeconds(3600)).toBe("60:00");
  });
  it("restores remaining time from the persisted active seconds", () => {
    expect(
      remainingLessonSeconds(60, { active_seconds: 45, is_completed: false }),
    ).toBe(15);
    expect(remainingLessonSeconds(60, null)).toBe(60);
  });
  it("never enables completion before acknowledgement or after an error", () => {
    expect(canCompleteLesson(null, 0, true, true, false)).toBe(false);
    expect(
      canCompleteLesson(
        { active_seconds: 60, is_completed: false },
        60,
        true,
        true,
        true,
      ),
    ).toBe(false);
  });
  it("requires persisted minimum time and reading interaction", () => {
    expect(
      canCompleteLesson(
        { active_seconds: 59, is_completed: false },
        60,
        true,
        true,
        false,
      ),
    ).toBe(false);
    expect(
      canCompleteLesson(
        { active_seconds: 60, is_completed: false },
        60,
        false,
        true,
        false,
      ),
    ).toBe(false);
    expect(
      canCompleteLesson(
        { active_seconds: 60, is_completed: false },
        60,
        true,
        true,
        false,
      ),
    ).toBe(true);
  });

  it("allocates data-video-seconds to the video slide instead of inflating text slides", () => {
    const textSlide = '<div class="lesson-slide-container"><p>Text</p></div>';
    const videoSlide =
      '<div class="lesson-slide-container"><div class="lesson-video-wrapper" data-video-seconds="452"></div></div>';
    const slidesNoVideo = Array.from({ length: 15 }, () => textSlide);
    expect(getSlideRealMinSecondsForIndex(2400, slidesNoVideo, 0)).toBe(
      getSlideRealMinSeconds(2400, 15),
    );

    const slidesOneVideo = slidesNoVideo.map((s, idx) => (idx === 4 ? videoSlide : s));
    expect(getSlideVideoSeconds(videoSlide)).toBe(452);
    expect(getSlideRealMinSecondsForIndex(2700, slidesOneVideo, 0)).toBe(150);
    expect(getSlideRealMinSecondsForIndex(2700, slidesOneVideo, 4)).toBe(602);

    const secondVideoSlide =
      '<div class="lesson-slide-container"><div class="lesson-video-wrapper" data-video-seconds="300"></div></div>';
    const slidesTwoVideos = slidesOneVideo.map((s, idx) => (idx === 10 ? secondVideoSlide : s));
    expect(getSlideRealMinSecondsForIndex(3000, slidesTwoVideos, 1)).toBe(150);
    expect(getSlideRealMinSecondsForIndex(3000, slidesTwoVideos, 4)).toBe(602);
    expect(getSlideRealMinSecondsForIndex(3000, slidesTwoVideos, 10)).toBe(450);

    expect(getSlideRealMinSecondsForIndex(300, [textSlide, videoSlide], 0)).toBe(1);
    expect(getSlideRealMinSecondsForIndex(300, [textSlide, videoSlide], 1)).toBe(452);
  });

  it("weights per-slide target times by content density while preserving lesson totals", () => {
    const makeSlide = (words: number) =>
      `<div class="lesson-slide-container"><div class="space-y-1.5 py-0.5 text-sm">${Array.from({ length: words }, (_, i) => `w${i}`).join(" ")}</div></div></div>`;
    const shortSlide = makeSlide(54);
    const mediumSlide = makeSlide(110);
    const denseSlide = makeSlide(229);

    expect(getSlideWordCount(shortSlide)).toBe(54);
    expect(getSlideWordCount(denseSlide)).toBe(229);

    const targets = getSlideTargetSecondsList(900, [shortSlide, mediumSlide, denseSlide]);
    expect(targets).toHaveLength(3);
    expect(targets[0]).toBeLessThan(targets[1]);
    expect(targets[1]).toBeLessThan(targets[2]);
    expect(targets.reduce((a, b) => a + b, 0)).toBeGreaterThanOrEqual(900);

    const withVideo = `${mediumSlide}<div class="lesson-video-wrapper" data-video-seconds="300"></div>`;
    const targetsWithVideo = getSlideTargetSecondsList(1200, [shortSlide, withVideo, denseSlide]);
    expect(targetsWithVideo[1] - targets[1]).toBe(300);
  });

  it("restores completed slides, partial elapsed time and resume index from active_seconds", () => {
    const targets = [90, 270, 200, 150];

    expect(restoreSlideProgressFromActiveSeconds(0, targets)).toEqual({
      completedPages: {},
      pageSecondsElapsed: {},
      resumePageIndex: 0,
    });

    expect(restoreSlideProgressFromActiveSeconds(360, targets)).toEqual({
      completedPages: { 0: true, 1: true },
      pageSecondsElapsed: { 0: 90, 1: 270 },
      resumePageIndex: 2,
    });

    expect(restoreSlideProgressFromActiveSeconds(150, targets)).toEqual({
      completedPages: { 0: true },
      pageSecondsElapsed: { 0: 90, 1: 60 },
      resumePageIndex: 1,
    });

    expect(restoreSlideProgressFromActiveSeconds(900, targets)).toEqual({
      completedPages: { 0: true, 1: true, 2: true, 3: true },
      pageSecondsElapsed: { 0: 90, 1: 270, 2: 200, 3: 150 },
      resumePageIndex: 3,
    });
  });
});
