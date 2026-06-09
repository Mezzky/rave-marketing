"use client";

import Lenis from "lenis";
import { useEffect, useState } from "react";

const scrollMessages = [
  "Bookings arrive from every channel.",
  "Manual work starts compounding.",
  "Rave.tech coordinates the handoffs.",
  "Your team scales with more control.",
];

export function ScrollExperience() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.88,
      touchMultiplier: 1.15,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollable > 0 ? window.scrollY / scrollable : 0;

      setProgress(Math.min(1, Math.max(0, nextProgress)));
      setMessageIndex(
        Math.min(
          scrollMessages.length - 1,
          Math.floor(nextProgress * scrollMessages.length),
        ),
      );
      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(nextProgress),
      );
    };

    rafId = requestAnimationFrame(raf);
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <>
      <div className="scrollProgress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
      <a className="floatingAudit" href="#contact">
        <span>AI audit</span>
        <strong>Book now</strong>
      </a>
      <div className="storyHud" aria-live="polite">
        <span>Scroll story</span>
        <strong key={messageIndex}>{scrollMessages[messageIndex]}</strong>
      </div>
    </>
  );
}
