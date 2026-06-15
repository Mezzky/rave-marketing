"use client";

import { createElement, useEffect, useRef } from "react";

export function SplineRobotSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://unpkg.com/@splinetool/viewer@1.12.97/build/spline-viewer.js"]',
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.12.97/build/spline-viewer.js";
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let wheelTimer = 0;

    const pauseSplineDuringScroll = (event: WheelEvent) => {
      event.preventDefault();
      window.scrollBy({
        top: event.deltaY,
        left: event.deltaX,
        behavior: "auto",
      });
      section.classList.add("robotScrollLock");
      window.clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => {
        section.classList.remove("robotScrollLock");
      }, 180);
    };

    section.addEventListener("wheel", pauseSplineDuringScroll, {
      capture: true,
      passive: false,
    });

    return () => {
      window.clearTimeout(wheelTimer);
      section.classList.remove("robotScrollLock");
      section.removeEventListener("wheel", pauseSplineDuringScroll, {
        capture: true,
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="robotSection"
      aria-label="Interactive AI operations robot"
    >
      <div className="robotIntro">
        <p className="eyebrow">AI operations companion</p>
        <h2>Your AI operator for travel work.</h2>
      </div>
      <div className="robotStage">
        {/*
          The Spline scene owns pointer interaction, including the robot tracking
          cursor movement on hover.
        */}
        {createElement("spline-viewer", {
          url: "https://prod.spline.design/Zeac4ky0F0NZmllA/scene.splinecode",
          "events-target": "global",
        })}
      </div>
      <div className="robotCopy">
        <p>
          Hover the robot. See how Rave Tech turns booking work into cleaner
          automated handoffs.
        </p>
        <div className="robotPrompts" aria-label="AI transformation focus areas">
          <span>Find admin drag</span>
          <span>Route booking work</span>
          <span>Spot finance gaps</span>
          <span>Speed up response</span>
        </div>
      </div>
    </section>
  );
}
