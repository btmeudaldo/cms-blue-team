export type LessonLayoutClasses = {
  outer: string;
  main: string;
};

export function getLessonLayoutClasses(
  isIndexOpen: boolean,
): LessonLayoutClasses {
  if (!isIndexOpen) {
    return {
      outer:
        "flex-1 w-full mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-8 py-6 pb-28",
      main: "w-full max-w-[1500px] mx-auto space-y-6",
    };
  }

  return {
    outer:
      "flex-1 w-full mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-8 py-6 pb-28 min-[1280px]:grid min-[1280px]:grid-cols-[280px_minmax(0,1fr)] min-[1280px]:items-start min-[1280px]:gap-6 min-[2000px]:max-w-[1960px] min-[2000px]:grid-cols-[320px_minmax(0,1500px)]",
    main: "w-full max-w-[1500px] mx-auto space-y-6 min-[1280px]:max-w-none min-[1280px]:mx-0",
  };
}
