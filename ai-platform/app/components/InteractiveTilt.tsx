"use client";

import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";

type InteractiveTiltProps = {
  children: ReactNode;
  className?: string;
  sand?: boolean;
  strength?: number;
};

export function InteractiveTilt({
  children,
  className,
  sand = false,
  strength = 8,
}: InteractiveTiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  const reset = () => {
    const element = ref.current;
    if (!element) return;
    element.style.setProperty("--tilt-x", "0deg");
    element.style.setProperty("--tilt-y", "0deg");
  };

  const move = (event: PointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const xRatio = x / rect.width - 0.5;
    const yRatio = y / rect.height - 0.5;

    element.style.setProperty("--tilt-x", `${-yRatio * strength}deg`);
    element.style.setProperty("--tilt-y", `${xRatio * strength}deg`);
    element.style.setProperty("--sand-x", `${x}px`);
    element.style.setProperty("--sand-y", `${y}px`);
  };

  return (
    <div
      ref={ref}
      className={`${className ?? ""} interactiveTilt${sand ? " sandTilt" : ""}`}
      onPointerMove={move}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}
