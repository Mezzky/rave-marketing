"use client";

import { createElement, useEffect, useRef } from "react";

export function SplineRobotSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    void import("@splinetool/viewer");
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
        <p className="eyebrow">AI-assisted sales robot</p>
        <h2>Simulate a booking conversation before your team joins.</h2>
      </div>
      <div className="robotBookingDemo">
        <div className="robotSide">
          <div className="robotStage">
            {/*
              The Spline viewer owns pointer interaction, including the robot
              tracking cursor movement on hover.
            */}
            {createElement("spline-viewer", {
              url: "https://prod.spline.design/Zeac4ky0F0NZmllA/scene.splinecode",
              "events-target": "global",
            })}
          </div>
          <div className="robotGreetingBubble">
            Hi, I&apos;m your AI sales teammate. I can answer trip questions,
            check availability, and move the booking forward.
          </div>
        </div>

        <div className="bookingPhone" aria-label="AI booking chat simulation">
          <div className="phoneHeader">
            <div className="phoneAvatar">AI</div>
            <div>
              <strong>Rave AI Teammate</strong>
              <span>online</span>
            </div>
          </div>
          <div className="chatWindow">
            <div className="chatBubble customer">
              Hi, can you recommend a Bali family tour for 4 people next week?
            </div>
            <div className="chatBubble ai">
              Yes. I found 3 family-friendly options with available slots.
            </div>
            <div className="chatBubble customer">
              Can we hold the morning option and pay online?
            </div>
            <div className="chatBubble ai highlight">
              Booking hold created. Payment link, itinerary, and pickup details
              are ready to send.
            </div>
            <div className="typingBubble" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="phoneInput">
            <span>Message</span>
            <button type="button" aria-label="Send simulated booking message">
              Send
            </button>
          </div>
        </div>

        <div className="demoControlCard">
          <p className="eyebrow">Client pitch demo</p>
          <h3>From enquiry to payment link.</h3>
          <p>
            Show how Rave Tech helps sales teams respond faster, qualify
            demand, and hand clean booking data to operations.
          </p>
          <div className="demoSteps">
            <span>01 Product enquiry</span>
            <span>02 Availability check</span>
            <span>03 Booking hold</span>
            <span>04 Payment link</span>
          </div>
        </div>
      </div>
    </section>
  );
}
