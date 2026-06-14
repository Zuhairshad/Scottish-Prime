"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Sticky-pinned horizontal marquee with eased motion + progress bar.
 */
export function ScrollMarquee({
  children,
  speed = 1.6,
  easing = 0.12,
  count,
}: {
  children: ReactNode;
  speed?: number;
  easing?: number;
  count?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [wrapperHeight, setWrapperHeight] = useState<number>(0);

  useEffect(() => {
    let raf = 0;
    let targetX = 0;
    let currentX = 0;
    let running = false;
    let cachedDistance = 0;

    const horizontalDistance = () => {
      const t = trackRef.current;
      if (!t) return 0;
      return Math.max(0, t.scrollWidth - window.innerWidth + 48);
    };

    const computeTarget = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const winH = window.innerHeight;
      const scrolled = -rect.top;
      const range = wrapper.offsetHeight - winH;
      const progress =
        range > 0 ? Math.max(0, Math.min(1, scrolled / range)) : 0;
      targetX = progress * cachedDistance;
    };

    const tick = () => {
      currentX += (targetX - currentX) * easing;
      if (Math.abs(targetX - currentX) <= 0.08) currentX = targetX;

      const t = trackRef.current;
      if (t) {
        t.style.transform = `translate3d(${(-currentX).toFixed(2)}px, 0, 0)`;
      }

      const ratio =
        cachedDistance > 0 ? Math.min(1, currentX / cachedDistance) : 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${(ratio * 100).toFixed(2)}%`;
      }
      if (counterRef.current && count) {
        const i = Math.min(count, Math.floor(ratio * count) + 1);
        counterRef.current.textContent = `${i} of ${count}`;
      }

      if (currentX !== targetX) {
        raf = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const ensureRunning = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    const measure = () => {
      cachedDistance = horizontalDistance();
      setWrapperHeight(window.innerHeight + cachedDistance * speed);
      computeTarget();
      ensureRunning();
    };

    const onScroll = () => {
      computeTarget();
      ensureRunning();
    };

    measure();
    currentX = targetX;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${(-currentX).toFixed(
        2
      )}px, 0, 0)`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [speed, easing, count]);

  return (
    <div
      ref={wrapperRef}
      style={wrapperHeight ? { height: `${wrapperHeight}px` } : undefined}
      className="relative"
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Track */}
        <div className="flex-1 flex items-center overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-stretch gap-8 w-max px-6 md:px-12 will-change-transform"
          >
            {children}
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-6 md:px-12 pb-8 pt-4">
          <div className="flex items-center justify-between mb-2 t-body-sm text-ink/55">
            <span className="t-eyebrow">Customer stories</span>
            {count ? (
              <span ref={counterRef} className="t-body-sm-med text-ink">
                1 of {count}
              </span>
            ) : null}
          </div>
          <div className="relative h-[3px] rounded-full bg-ink/10 overflow-hidden">
            <div
              ref={progressBarRef}
              className="absolute inset-y-0 left-0 bg-accent-green rounded-full"
              style={{ width: "0%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
