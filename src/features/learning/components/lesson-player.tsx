"use client";

import { useEffect, useMemo, useState } from "react";

import { completeLessonAction, startLessonAction } from "@/app/actions/progress.actions";

type LessonPlayerProps = {
  contentHtml: string;
  lessonId: string;
  minSeconds: number;
  pathToRevalidate: string;
};

export function LessonPlayer({ contentHtml, lessonId, minSeconds, pathToRevalidate }: LessonPlayerProps) {
  const [remainingSeconds, setRemainingSeconds] = useState(minSeconds);
  const [reachedScrollThreshold, setReachedScrollThreshold] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const horizontalPosition = useMemo(() => 8 + (crypto.getRandomValues(new Uint32Array(1))[0] % 85), []);
  const canAdvance = remainingSeconds === 0 && reachedScrollThreshold && !isCompleting;

  useEffect(() => {
    void startLessonAction(lessonId);
  }, [lessonId]);

  useEffect(() => {
    if (remainingSeconds === 0) return;
    const timer = window.setInterval(() => setRemainingSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [remainingSeconds]);

  function handleScroll() {
    const maximum = document.documentElement.scrollHeight - window.innerHeight;
    setReachedScrollThreshold(maximum <= 0 || window.scrollY / maximum >= 0.9);
  }

  async function handleComplete(event: React.MouseEvent<HTMLButtonElement>) {
    if (!event.isTrusted || !canAdvance) return;
    setIsCompleting(true);
    try { await completeLessonAction(lessonId, pathToRevalidate); } finally { setIsCompleting(false); }
  }

  return <><article onScroll={handleScroll} dangerouslySetInnerHTML={{ __html: contentHtml }} /><section aria-label="Avance de lección" className="min-h-32 relative"><button disabled={!canAdvance} onClick={handleComplete} style={{ left: `${horizontalPosition}%` }} className="absolute bottom-4 -translate-x-1/2">Siguiente</button></section></>;
}
