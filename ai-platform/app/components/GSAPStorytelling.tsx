"use client";

import { useEffect } from "react";

export function GSAPStorytelling() {
  useEffect(() => {
    let cleanup = () => {};

    const setup = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/dist/ScrollTrigger");
      const gsap = gsapModule.gsap;
      const ScrollTrigger =
        scrollTriggerModule.ScrollTrigger ?? scrollTriggerModule.default;
      const removeListeners: Array<() => void> = [];

      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        const ticker = document.querySelector<HTMLElement>(".ticker");
        const tickerTrack = document.querySelector<HTMLElement>(".tickerTrack");
        const tickerAnimations = tickerTrack?.getAnimations() ?? [];
        const setTickerRate = (rate: number) => {
          tickerAnimations.forEach((animation) => {
            animation.updatePlaybackRate(rate);
          });
        };

        const slowTicker = () => setTickerRate(0.32);
        const resumeTicker = () => setTickerRate(1);

        ticker?.addEventListener("pointerenter", slowTicker);
        ticker?.addEventListener("pointerleave", resumeTicker);
        if (ticker) {
          removeListeners.push(() => {
            ticker.removeEventListener("pointerenter", slowTicker);
            ticker.removeEventListener("pointerleave", resumeTicker);
          });
        }

        const blueSand = document.querySelector<HTMLElement>(".blueSandSection");
        const moveBlueSand = (event: PointerEvent) => {
          if (!blueSand) return;
          const rect = blueSand.getBoundingClientRect();
          const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
          const yPercent = ((event.clientY - rect.top) / rect.height) * 100;
          blueSand.style.setProperty(
            "--blue-sand-x",
            `${xPercent}%`,
          );
          blueSand.style.setProperty(
            "--blue-sand-y",
            `${yPercent}%`,
          );
        };

        blueSand?.addEventListener("pointermove", moveBlueSand);
        if (blueSand) {
          removeListeners.push(() => {
            blueSand.removeEventListener("pointermove", moveBlueSand);
          });
        }

        gsap.fromTo(
          ".heroCopy",
          { y: 0, opacity: 1 },
          {
            y: -90,
            opacity: 0.78,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>(".storyCard").forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              y: 110,
              opacity: 0.35,
              rotateZ: index % 2 === 0 ? -2 : 2,
            },
            {
              y: 0,
              opacity: 1,
              rotateZ: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                end: "top 42%",
                scrub: 0.7,
              },
            },
          );
        });

        gsap.fromTo(
          ".opsGrowthPanel",
          { y: 90, opacity: 0.45, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".immersiveOps",
              start: "top 82%",
              end: "center 52%",
              scrub: 0.7,
            },
          },
        );

        gsap.fromTo(
          ".growthLine",
          { strokeDashoffset: 620 },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".opsGrowthPanel",
              start: "top 76%",
              end: "bottom 48%",
              scrub: 0.8,
            },
          },
        );

        gsap.fromTo(
          ".opsGrowthPanel .growthBars i",
          { scaleY: 0, transformOrigin: "bottom" },
          {
            scaleY: 1,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".opsGrowthPanel",
              start: "top 76%",
              end: "bottom 48%",
              scrub: 0.8,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>(".featureCard").forEach((card) => {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0.2 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 62%",
                scrub: 0.5,
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>(".caseCard").forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 90, opacity: 0.35, rotateZ: index % 2 === 0 ? -1.5 : 1.5 },
            {
              y: 0,
              opacity: 1,
              rotateZ: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                end: "top 56%",
                scrub: 0.8,
              },
            },
          );
        });

        const programTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".programSection",
            start: "top 70%",
            end: "bottom 38%",
            scrub: 1,
          },
        });

        programTimeline.fromTo(
          ".rocketSvg",
          { y: 220, scale: 0.92, rotate: -8 },
          { y: -440, scale: 1.08, rotate: 0, ease: "none" },
          0,
        );

        gsap.utils.toArray<HTMLElement>(".programGrid article").forEach((card, index) => {
          programTimeline.fromTo(
            card,
            { y: 110, opacity: 0, scale: 0.94 },
            { y: 0, opacity: 1, scale: 1, ease: "power2.out" },
            0.16 + index * 0.2,
          );
        });

        gsap.fromTo(
          ".contactForm",
          { y: 80, opacity: 0.45 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".auditSection",
              start: "top 76%",
              end: "center 46%",
              scrub: 0.8,
            },
          },
        );
      });

      document.documentElement.classList.add("gsap-ready");
      ScrollTrigger.refresh();
      const refreshOnScroll = () => ScrollTrigger.update();
      window.addEventListener("scroll", refreshOnScroll, { passive: true });

      cleanup = () => {
        removeListeners.forEach((removeListener) => removeListener());
        window.removeEventListener("scroll", refreshOnScroll);
        document.documentElement.classList.remove("gsap-ready");
        context.revert();
      };
    };

    void setup().catch((error) => {
      document.documentElement.classList.remove("gsap-ready");
      console.error("GSAP storytelling failed to initialize", error);
    });

    return () => cleanup();
  }, []);

  return null;
}
