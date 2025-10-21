"use client";

import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { useTranslation } from "../../hooks/useTranslation";

interface TransformationsComparatorProps {
  beforeImage: string;
  afterImage: string;
  height?: string; // e.g. "60vh"
  initialPosition?: number; // 0–100
  showLabels?: boolean;
}

export function TransformationsComparator({
  beforeImage,
  afterImage,
  height = "60vh",
  initialPosition = 50,
  showLabels = true,
}: TransformationsComparatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(initialPosition);
  const [position, setPosition] = useState(initialPosition);
  const [dragging, setDragging] = useState(false);
  const rafRef = useRef<number | null>(null);

  const { language } = useTranslation();

  const updatePosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    positionRef.current = percentage;

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        setPosition(positionRef.current);
        rafRef.current = null;
      });
    }
  };

  const handleStart = (clientX: number) => {
    setDragging(true);
    updatePosition(clientX);
  };

  const handleMove = (clientX: number) => {
    if (dragging) updatePosition(clientX);
  };

  const stopDragging = () => setDragging(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [dragging]);

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => handleStart(e.clientX)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      className={clsx(
        "relative mx-auto w-full overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl select-none",
        "transition-all duration-300"
      )}
      style={{
        height,
        perspective: "1000px",
        transform: "rotateX(6deg) translateZ(20px)",
      }}
    >
      {/* After Image */}
      <img
        src={afterImage}
        alt="After"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Before Image (Clipped view) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{
          width: `${position}%`,
          transition: dragging ? "none" : "width 0.25s ease-out",
        }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Subtle gradient overlay for polish */}
      <div
        className="absolute top-0 left-0 h-full pointer-events-none"
        style={{
          width: `${position}%`,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.25) 0%, transparent 100%)",
        }}
      />

      {/* Handle (Optional but sleek) */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/70 dark:bg-neutral-700"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 shadow-md p-1 hover:scale-110 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 text-neutral-600 dark:text-neutral-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h8m-4-4v8"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      {showLabels && (
        <>
          <span className="absolute top-4 left-4 bg-black/60 text-white text-xs md:text-sm font-medium px-3 py-1 rounded-full backdrop-blur-md">
            { language == "en" ? "Before" : "قبل" }
          </span>
          <span className="absolute top-4 right-4 bg-black/60 text-white text-xs md:text-sm font-medium px-3 py-1 rounded-full backdrop-blur-md">
            { language == "en" ? "After" : "بعد" }
          </span>
        </>
      )}
    </div>
  );
}
