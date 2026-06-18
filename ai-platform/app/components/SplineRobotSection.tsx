"use client";

import { createElement, useEffect, useRef, useState } from "react";

type ChatPhase = "idle" | "thinking" | "sending" | "replyTyping" | "complete";

type ChatMessage = {
  id: string;
  role: "customer" | "rave";
  text: string;
  highlight?: boolean;
};

function renderChatText(text: string) {
  const urlPattern = /(https:\/\/[^\s]+)/g;
  return text.split(urlPattern).map((part) => {
    if (!part.match(urlPattern)) return part;

    return (
      <a href={part} key={part} rel="noreferrer" target="_blank">
        {part}
      </a>
    );
  });
}

const introReply =
  "Hello! I'm Rave, your AI teammate.\n\nI help businesses automate customer conversations, answer questions instantly, recommend products and services, qualify leads, and even assist with bookings and payments.\n\nThink of me as a team member that's available 24/7 and never misses a customer inquiry.\n\nHow can I help you today? Whether it's answering questions, finding the right package, or completing a booking, I'm ready to assist.";

const recommendationReply =
  "Absolutely! I'd be happy to help.\n\nTo recommend the best package, may I check a few quick details?\n\n- Preferred travel date?\n- Number of adults and children?\n- Trip purpose: relaxation, family holiday, romantic getaway, or golf?\n- Preferred budget: value, mid-range, or premium?";

const packageDetailsReply =
  "Perfect, thank you.\n\nFor a relaxing beachfront getaway, I'll shortlist packages that include:\n\n- Ferry tickets\n- Hotel accommodation\n- Daily breakfast\n- Return transfers\n\nA few more details:\n\n- King bed or twin beds?\n- Free-and-easy or include tours?\n- Any special occasion?";

const optionsReply =
  "Great! Based on your preferences, here are the best options:\n\nOption 1 - Value Resort Package\nFrom SGD 238 per person\nBest for a simple and affordable short getaway.\n\nOption 2 - Beachfront Resort Package\nFrom SGD 288 per person\nBest for a relaxing beach holiday with better resort facilities.\n\nOption 3 - Premium Beachfront Package\nFrom SGD 358 per person\nBest for a more comfortable stay with upgraded room options.\n\nFor your requirements, I recommend Option 2. It offers the best balance of comfort, beachfront access, and value.\n\nWould you like me to check live availability for 25 July?";

const availabilityReply =
  "Good news!\n\nOption 2 is currently available for 2 adults on 25 July 2025.\n\nPackage Summary:\n- 3D2N Beachfront Resort\n- 2 Adults\n- King Bed Request\n- Return Ferry Included\n\nEstimated Total: SGD 576\nDeposit Required: SGD 100\nBalance: Payable before departure.\n\nWould you like me to proceed with the booking?";

const bookingHoldReply =
  "Thank you, Jorim.\n\nI've successfully prepared a booking hold for your 3D2N Bintan Beachfront Resort Package.\n\nBooking Summary:\n\n- Travel Date: 25 July 2025\n- Guests: 2 Adults\n- Room Preference: King Bed\n- Package: Beachfront Resort Package\n- Estimated Total: SGD 576\n- Deposit Required: SGD 100\n\nTo secure your reservation, please complete the deposit payment here:\n\nhttps://pay.rave.travel/booking/BT250725576\n\nOnce payment is completed, you will automatically receive:\n\n- Booking Confirmation\n- Official Invoice\n- Balance Payment Details\n- Ferry Information\n- Travel Instructions Before Departure\n\nI've also included our latest Bintan promotions in case you'd like to explore room upgrades or alternative resorts:\n\nhttps://rave.travel/offers/bintan\n\nMy recommendation is to secure Option 2 first so your preferred travel date remains reserved. We can always review upgrade options afterward if you'd like a better room category or premium beachfront experience.";

const seamlessReply =
  "Thank you, Jorim.\n\nMy goal is to make the booking experience as simple and seamless as possible.\n\nInstead of waiting for business hours or manual replies, I can instantly answer questions, recommend suitable packages, check availability, collect booking information, and guide customers through the reservation process-all in a single conversation.\n\nWhether it's travel bookings, customer support, lead qualification, appointment scheduling, or product recommendations, I'm always available to help.\n\nIs there anything else you'd like assistance with today?";

const finalReply =
  "I appreciate that, Jorim.\n\nBeing fast is nice-but helping businesses create better customer experiences is what I was built for.\n\nWhile teams focus on growing their business, I can handle customer inquiries 24/7, qualify leads, answer questions instantly, and help convert conversations into real bookings and sales.\n\nThat's the advantage of having an AI teammate that never sleeps.\n\nLooking forward to helping more customers just like you.";

export function SplineRobotSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<number[]>([]);
  const [chatPhase, setChatPhase] = useState<ChatPhase>("idle");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [thinkingLabel, setThinkingLabel] = useState("");
  const [typedReply, setTypedReply] = useState("");
  const [currentInput, setCurrentInput] = useState("Hello");

  const clearTimers = () => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  };

  const queue = (callback: () => void, delay: number) => {
    const timer = window.setTimeout(callback, delay);
    timersRef.current.push(timer);
  };

  const addMessage = (message: ChatMessage) => {
    setMessages((current) => [...current, message]);
  };

  const scheduleThinking = (labels: string[], startAt: number) => {
    labels.forEach((label, index) => {
      queue(() => {
        setChatPhase("thinking");
        setThinkingLabel(label);
      }, startAt + index * 950);
    });
    return startAt + labels.length * 950;
  };

  const scheduleReply = (
    id: string,
    text: string,
    startAt: number,
    highlight = false,
  ) => {
    queue(() => {
      setChatPhase("sending");
      setThinkingLabel("Sending response...");
    }, startAt);

    const typingStart = startAt + 760;
    queue(() => {
      setChatPhase("replyTyping");
      setThinkingLabel("");
      setTypedReply("");

      let index = 0;
      const interval = window.setInterval(() => {
        index += 2;
        setTypedReply(text.slice(0, index));
        if (index >= text.length) {
          window.clearInterval(interval);
          setTypedReply("");
          addMessage({ id, role: "rave", text, highlight });
          setChatPhase("complete");
        }
      }, 18);
      timersRef.current.push(interval);
    }, typingStart);

    return typingStart + text.length * 9 + 650;
  };

  useEffect(() => {
    void import("@splinetool/viewer");
  }, []);

  useEffect(() => clearTimers, []);

  useEffect(() => {
    chatWindowRef.current?.scrollTo({
      top: chatWindowRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typedReply, thinkingLabel]);

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

  const runChatDemo = () => {
    clearTimers();
    setMessages([]);
    setTypedReply("");
    setThinkingLabel("");
    setChatPhase("idle");
    setCurrentInput("Hi, who are you?");

    let cursor = 0;

    queue(() => {
      addMessage({ id: "user-1", role: "customer", text: "Hi, who are you?" });
      setCurrentInput("Hi, I'm looking for a 3D2N Bintan getaway package.");
    }, cursor);

    cursor = scheduleThinking(
      ["Detecting new visitor...", "Preparing introduction...", "Generating response..."],
      cursor + 500,
    );
    cursor = scheduleReply("rave-1", introReply, cursor + 300);

    queue(() => {
      addMessage({
        id: "user-2",
        role: "customer",
        text: "Hi, I'm looking for a 3D2N Bintan getaway package. Can you recommend something?",
      });
      setCurrentInput("25 July 2025. 2 adults. Relaxing trip, beachfront.");
    }, cursor + 450);

    cursor = scheduleThinking(
      ["Understanding travel request...", "Analyzing preferences...", "Preparing recommendations..."],
      cursor + 950,
    );
    cursor = scheduleReply("rave-2", recommendationReply, cursor + 300);

    queue(() => {
      addMessage({
        id: "user-3",
        role: "customer",
        text: "25 July 2025. 2 adults. Relaxing trip, preferably beachfront. Mid-range is fine.",
      });
      setCurrentInput("King bed. Free-and-easy. No special occasion.");
    }, cursor + 450);

    cursor = scheduleThinking(
      ["Processing travel details...", "Matching suitable resorts...", "Building recommendations..."],
      cursor + 950,
    );
    cursor = scheduleReply("rave-3", packageDetailsReply, cursor + 300);

    queue(() => {
      addMessage({
        id: "user-4",
        role: "customer",
        text: "King bed preferred. Free-and-easy is better. No special occasion.",
      });
      setCurrentInput("Yes, please check Option 2.");
    }, cursor + 450);

    cursor = scheduleThinking(
      ["Comparing package options...", "Checking resort suitability...", "Finalizing recommendation..."],
      cursor + 950,
    );
    cursor = scheduleReply("rave-4", optionsReply, cursor + 300);

    queue(() => {
      addMessage({ id: "user-5", role: "customer", text: "Yes, please check Option 2." });
      setCurrentInput("Wow, that was fast.");
    }, cursor + 450);

    cursor = scheduleThinking(
      [
        "Connecting to booking system...",
        "Checking live availability...",
        "Verifying room inventory...",
        "Calculating package pricing...",
        "Preparing booking details...",
      ],
      cursor + 950,
    );
    cursor = scheduleReply("rave-5", availabilityReply, cursor + 300, true);

    queue(() => {
      addMessage({
        id: "user-6",
        role: "customer",
        text: "Jorim Fu, +65 9123 4567, jorim@example.com",
      });
      setCurrentInput("That's impressive. You handled everything so quickly.");
    }, cursor + 450);

    cursor = scheduleThinking(
      [
        "Collecting customer information...",
        "Creating booking hold...",
        "Generating payment link...",
        "Preparing confirmation details...",
      ],
      cursor + 950,
    );
    cursor = scheduleReply("rave-6", bookingHoldReply, cursor + 300, true);

    queue(() => {
      addMessage({
        id: "user-7",
        role: "customer",
        text: "That's impressive. You handled everything so quickly.",
      });
      setCurrentInput("No, that's all. You're pretty cool.");
    }, cursor + 450);

    cursor = scheduleThinking(
      ["Processing customer feedback...", "Generating response...", "Preparing final message..."],
      cursor + 950,
    );
    cursor = scheduleReply("rave-7", seamlessReply, cursor + 300);

    queue(() => {
      addMessage({
        id: "user-8",
        role: "customer",
        text: "No, that's all. You're pretty cool.",
      });
      setCurrentInput("Conversation complete");
    }, cursor + 450);

    cursor = scheduleThinking(
      ["Analyzing compliment...", "Generating response...", "Finalizing message..."],
      cursor + 950,
    );
    cursor = scheduleReply("rave-8", finalReply, cursor + 300, true);

    queue(() => {
      setChatPhase("complete");
      setThinkingLabel("");
    }, cursor + 200);
  };

  const isThinking = chatPhase === "thinking" || chatPhase === "sending";

  return (
    <section
      ref={sectionRef}
      className="robotSection"
      aria-label="Interactive AI operations robot"
    >
      <div className="robotIntro">
        <p className="eyebrow">Rave AI assistant demo</p>
        <h2>See Rave turn enquiries into bookings.</h2>
      </div>
      <div className="robotBookingDemo">
        <div className={`robotSide${isThinking ? " isThinking" : ""}`}>
          <div className="robotStage">
            {createElement("spline-viewer", {
              url: "https://prod.spline.design/Zeac4ky0F0NZmllA/scene.splinecode",
              "events-target": "global",
            })}
          </div>
          <div
            className={`robotGreetingBubble${
              chatPhase === "sending" ? " isSending" : ""
            }`}
          >
            {thinkingLabel ||
              "Hi, I'm Rave. your AI Teammate!"}
            {thinkingLabel ? (
              <span className="bubbleDots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            ) : null}
          </div>
          {chatPhase === "sending" ? (
            <span className="replyTrail" aria-hidden="true" />
          ) : null}
        </div>

        <div className="bookingPhone" aria-label="AI booking chat simulation">
          <div className="phoneHeader">
            <div className="phoneAvatar">R</div>
            <div>
              <strong>Rave</strong>
              <span>{isThinking ? "thinking" : "online"}</span>
            </div>
          </div>
          {chatPhase === "idle" ? (
            <p className="phoneGuide">
              <strong>Try the live Rave demo</strong>
              <span>
                Click <b>Send Message</b> below to watch Rave qualify a lead,
                recommend a package, and guide the customer toward booking.
              </span>
            </p>
          ) : null}
          <div className="chatWindow" ref={chatWindowRef}>
            {messages.map((message) => (
              <div
                className={`chatBubble ${
                  message.role === "customer" ? "customer" : "ai"
                }${message.highlight ? " highlight" : ""}`}
                key={message.id}
              >
                {renderChatText(message.text)}
              </div>
            ))}
            {chatPhase === "thinking" ? (
              <div className="thinkingStatus" aria-label={thinkingLabel}>
                <span>{thinkingLabel}</span>
                <div className="typingBubble raveTyping">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            ) : null}
            {chatPhase === "replyTyping" ? (
              <div className="chatBubble ai liveReply">
                {typedReply}
                <span className="typingCursor" aria-hidden="true" />
              </div>
            ) : null}
          </div>
          <div className="phoneInput">
            <span>{currentInput}</span>
            <button
              className={chatPhase === "idle" ? "needsAttention" : undefined}
              type="button"
              aria-label="Send simulated message to Rave"
              onClick={runChatDemo}
            >
              Send Message
            </button>
          </div>
        </div>

        <div className="demoControlCard">
          <p className="eyebrow">Client pitch demo</p>
          <h3>What this proves.</h3>
          <p>
            Rave can answer, qualify, recommend, check availability, and guide
            payment in one conversation.
          </p>
          <div className="demoSteps">
            <span>01 Capture inquiry</span>
            <span>02 Qualify preferences</span>
            <span>03 Check availability</span>
            <span>04 Drive conversion</span>
          </div>
        </div>
      </div>
    </section>
  );
}
