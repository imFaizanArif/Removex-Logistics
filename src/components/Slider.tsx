"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type SliderProps = {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  showDots?: boolean;
};

export default function Slider({
  children,
  className = "",
  itemClassName = "",
  showDots = true,
}: SliderProps) {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const count = children.length;

  const scrollToIndex = useCallback((i: number) => {
    const el = ref.current;
    if (!el) return;
    const container = el.querySelector("[data-slider-inner]") as HTMLElement | null;
    if (!container) return;
    const next = Math.max(0, Math.min(i, count - 1));
    const slide = container.children[next] as HTMLElement | undefined;
    if (slide) {
      const left = slide.offsetLeft;
      container.scrollTo({ left, behavior: "smooth" });
    }
    setIndex(next);
  }, [count]);

  useEffect(() => {
    const el = ref.current;
    if (!el || count <= 1) return;
    const container = el.querySelector("[data-slider-inner]") as HTMLElement | null;
    if (!container) return;
    const onScroll = () => {
      const { scrollLeft, scrollWidth, offsetWidth } = container;
      const slideWidth = scrollWidth / count;
      const newIndex = Math.round(scrollLeft / slideWidth);
      setIndex(Math.min(Math.max(0, newIndex), count - 1));
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [count]);

  if (count === 0) return null;

  return (
    <div className={`relative w-full ${className}`}>
      <div ref={ref} className="overflow-hidden">
        <div
          data-slider-inner
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-visible pb-2 scroll-smooth scrollbar-hide [-webkit-overflow-scrolling:touch]"
        >
          {(Array.isArray(children) ? children : [children]).map((child, i) => (
            <div
              key={i}
              className={`min-w-[85%] shrink-0 snap-start sm:min-w-[45%] lg:min-w-[30%] ${itemClassName}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      {showDots && count > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-amber-500" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
