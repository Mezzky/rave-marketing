import type { CSSProperties } from "react";
import { GSAPStorytelling } from "./components/GSAPStorytelling";
import { InteractiveTilt } from "./components/InteractiveTilt";
import { MotionReveal } from "./components/MotionReveal";
import { ScrollExperience } from "./components/ScrollExperience";
import { SplineRobotSection } from "./components/SplineRobotSection";
import { TypingHeadline } from "./components/TypingHeadline";

const logoUrl =
  "https://cdn.sanity.io/images/iqsqxgxl/production/9be5e4a241048eb5df4a15708de64470cef42cc2-1200x424.png";

const modules = [
  "Accounting",
  "Tour Ops",
  "Tour Inventory",
  "eCommerce",
  "APIs Integration",
  "Coaches",
  "Invoicing",
  "Payment Gateways",
];

const orbitKeys = ["Revenue", "Ops", "Finance", "Growth"];

const story = [
  {
    label: "01",
    title: "Demand rises",
    text: "More bookings arrive through events, agents, online stores, B2B channels, and direct customers.",
  },
  {
    label: "02",
    title: "Manual work compounds",
    text: "Deposits, tax, exchange rates, supplier handoffs, pickup scheduling, and customer service start pulling teams into admin.",
  },
  {
    label: "03",
    title: "Rave Tech coordinates",
    text: "Your accounting, ecommerce, inventory, tour operations, payments, and APIs move through one AI-assisted operating layer.",
  },
  {
    label: "04",
    title: "Growth feels lighter",
    text: "Teams protect service quality, improve compliance, collect payments faster, and scale bookings without scaling headcount.",
  },
];

const features = [
  {
    number: "01",
    title: "Accounting for Travel",
    points: [
      "Recognize revenue on departure",
      "Track reservation deposits from customers",
      "Receive payment online",
    ],
    description:
      "Accounting built for bookings, deposits, revenue, and travel complexity.",
  },
  {
    number: "02",
    title: "Streamline Operations",
    points: [
      "Custom workflow and data collection",
      "Centralized team workspace",
      "Intelligent pickup scheduling",
    ],
    description:
      "Keep post-sale work visible, assigned, and moving.",
  },
  {
    number: "03",
    title: "eCommerce Built-in",
    points: [
      "Tours, activities, golf, and transportation",
      "B2B and B2C channel support",
      "Micro stores for sales events",
    ],
    description:
      "Sell tours, services, and payments through digital channels.",
  },
];

const transformationProgram = [
  {
    title: "Map the operational drag",
    text: "We identify where bookings create avoidable admin across finance, operations, payments, inventory, customer service, and supplier handoffs.",
  },
  {
    title: "Design the AI operating model",
    text: "Rave Tech becomes the coordination layer that connects your current revenue channels with cleaner workflows and stronger management visibility.",
  },
  {
    title: "Launch measurable improvements",
    text: "Your team gets a practical roadmap for scaling reservations, reducing repetitive work, improving compliance, and protecting customer experience.",
  },
];

const storyHeadline =
  "Every scroll moves your operation from pressure to leverage.";

function RocketIcon() {
  return (
    <svg
      aria-hidden="true"
      className="rocketIcon"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m3.7 11.287 3.623-3.624q.293-.292.671-.413t.783-.04l1.415.294Q9.073 8.873 8.366 9.98t-1.414 2.688zm4.125 1.62q.652-1.51 1.563-2.89.91-1.378 2.08-2.548 1.873-1.873 4.073-2.806t4.746-.797q.136 2.546-.795 4.746t-2.803 4.073q-1.164 1.163-2.548 2.07t-2.897 1.559zm6.17-2.768q.44.44 1.066.44t1.066-.44.44-1.057-.44-1.057-1.066-.44-1.067.44-.44 1.057.44 1.056m-1.161 10.314L11.444 17.2q1.581-.706 2.691-1.423 1.111-.717 2.48-1.836l.289 1.415q.08.404-.031.785-.111.382-.404.675zm-7.687-4.306q.587-.586 1.423-.58t1.423.594q.587.586.587 1.423t-.587 1.423q-.51.51-1.635.873t-2.605.502q.138-1.479.511-2.602t.883-1.633"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollExperience />
      <GSAPStorytelling />
      <header className="nav">
        <a className="logo" href="#top" aria-label="Rave Tech home">
          <img src={logoUrl} alt="Rave Tech" />
        </a>
        <span aria-hidden="true" />
        <a className="navCta" href="#contact">
          Demo / Contact
        </a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">AI transformation platform for travel agencies</p>
          <h1>
            Scale bookings.
            <span>Not headcount.</span>
          </h1>
          <p>
            AI-assisted ERP, ecommerce, payments, inventory, and workflows for
            modern travel teams.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#contact">
              Book an AI Operations Audit
            </a>
            <a className="button ghost" href="#story">
              Follow the transformation
            </a>
          </div>
        </div>

        <div className="heroStage" aria-label="Animated travel operations platform preview">
          <InteractiveTilt className="commandDeck" strength={10}>
            <div className="deckHeader">
              <span />
              <span />
              <span />
              <strong>Rave AI Ops Command</strong>
            </div>
            <div className="deckBody">
              <div className="bookingCard">
                <small>Booking flow</small>
                <strong>Live ASEAN agency trade</strong>
                <div className="signalBars">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="routeMap">
                <span>Inquiry</span>
                <span>Inventory</span>
                <span>Payment</span>
                <span>Tour Ops</span>
              </div>
              <div className="miniMetrics">
                <article>
                  <strong>43.3%</strong>
                  <span>average reduction in manual man-hours</span>
                </article>
                <article>
                  <strong>4x</strong>
                  <span>faster quotation turnaround</span>
                </article>
                <article>
                  <strong>Grant Eligible Transformation</strong>
                </article>
              </div>
            </div>
          </InteractiveTilt>
        </div>
      </section>

      <section className="ticker" aria-label="Rave Tech platform modules">
        <div className="tickerTrack">
          {[0, 1, 2, 3].map((group) => (
            <div className="tickerGroup" key={group} aria-hidden={group > 0}>
              {modules.map((moduleName) => (
                <span key={`${moduleName}-${group}`}>{moduleName}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <SplineRobotSection />

      <section className="storySection" id="story">
        <div className="sectionIntro">
          <p className="eyebrow">Problem to solution journey</p>
          <h2
            className="storyTypeTitle"
            data-text={storyHeadline}
          >
            <TypingHeadline text={storyHeadline} />
          </h2>
          <p>
            Turn scattered manual work into one coordinated operating system.
          </p>
        </div>
        <div className="storyRail">
          {story.map((item) => (
            <InteractiveTilt className="storyCard" key={item.label} sand strength={12}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </InteractiveTilt>
          ))}
        </div>
      </section>

      <section className="platformSection" id="platform">
        <div className="sectionIntro centered">
          <p className="eyebrow">Product ecosystem</p>
          <h2>One operating layer for travel growth.</h2>
        </div>
        <MotionReveal className="immersiveOps">
          <div>
            <p className="eyebrow">Live operations model</p>
            <h2>Connect sales, finance, and operations.</h2>
            <p>
              Rave Tech links booking work into one AI-assisted model.
            </p>
          </div>
          <div className="opsGrowthPanel" aria-label="Animated business growth graph">
            <div className="opsPanelHeader">
              <span>Rave growth model</span>
              <strong>Operational capacity</strong>
            </div>
            <div className="growthBars">
              <i style={{ "--h": "34%" } as CSSProperties} />
              <i style={{ "--h": "52%" } as CSSProperties} />
              <i style={{ "--h": "66%" } as CSSProperties} />
              <i style={{ "--h": "82%" } as CSSProperties} />
              <i style={{ "--h": "96%" } as CSSProperties} />
            </div>
            <svg className="opsGraph" viewBox="0 0 560 260" role="presentation">
              <defs>
                <linearGradient id="opsGrowthFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#3366ff" stopOpacity="0.42" />
                  <stop offset="100%" stopColor="#3366ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                className="growthArea"
                d="M0 216 C78 206 96 172 158 172 C224 172 232 126 294 126 C360 126 376 72 446 72 C496 72 516 34 560 24 L560 260 L0 260 Z"
              />
              <path
                className="growthLine"
                d="M0 216 C78 206 96 172 158 172 C224 172 232 126 294 126 C360 126 376 72 446 72 C496 72 516 34 560 24"
              />
            </svg>
          </div>
        </MotionReveal>
        <div className="platformTheatre">
          <div className="axis" aria-hidden="true" />
          <div className="coreProduct">
            <div className="keyOrbit" aria-hidden="true">
              {orbitKeys.map((key, index) => (
                <i
                  key={key}
                  style={
                    {
                      "--i": index,
                      "--angle": `${index * 90}deg`,
                      "--rangle": `${index * -90}deg`,
                    } as CSSProperties
                  }
                >
                  {key}
                </i>
              ))}
            </div>
            <span>Rave Tech</span>
            <strong>Travel ERP Software</strong>
            <p>Unlocking travel&apos;s revenue potential</p>
          </div>
          {modules.map((moduleName, index) => (
            <div
              className="moduleChip"
              key={moduleName}
              style={
                {
                  "--i": index,
                  "--angle": `${index * 45}deg`,
                  "--rangle": `${index * -45}deg`,
                } as CSSProperties
              }
            >
              {moduleName}
            </div>
          ))}
        </div>
        <div className="featureGrid">
          {features.map((feature, index) => (
            <MotionReveal key={feature.number} delay={index * 0.08}>
              <InteractiveTilt className="featureCard" strength={5}>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul>
                  {feature.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </InteractiveTilt>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="outcomeSection blueSandSection">
        <div className="blueSandCursor" aria-hidden="true" />
        <div className="beforeAfter">
          <div>
            <p className="eyebrow">Before Rave Tech</p>
            <h2>Chase the booking after it closes.</h2>
            <p>
              Finance waits. Ops waits. Customers wait. Growth feels like a game of whack-a-mole. 
            </p>
          </div>
          <div>
            <p className="eyebrow">After Rave Tech</p>
            <h2>The business moves as one system.</h2>
            <p>
              Bookings, payments, suppliers, and delivery stay visible. Teams stay proactive. Growth feels like a rising tide, not a battle. 
            </p>
          </div>
        </div>
      </section>

      <section className="programSection">
        <div className="sectionIntro">
          <p className="eyebrow">Services-led transformation</p>
          <h2>Not a tool rollout. A sharper way to operate.</h2>
          <p>
            Rave Tech helps travel agencies turn digital modernization into a
            business growth program: clearer processes, better automation,
            stronger controls, and more capacity for sales.
          </p>
        </div>
        <div className="programJourney">
          <div className="rocketRail" aria-hidden="true">
            <span className="rocket rocketSvg">
              <RocketIcon />
            </span>
          </div>
          <div className="programGrid">
            {transformationProgram.map((item, index) => (
              <InteractiveTilt className="programCard" key={item.title} strength={5}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </InteractiveTilt>
            ))}
          </div>
        </div>
      </section>

      <section className="auditSection" id="contact">
        <div className="auditCopy">
          <p className="eyebrow">AI Operations Audit</p>
          <h2>Find the hidden capacity inside your travel agency.</h2>
          <p>
            Fill out the form and a member of our team will respond within 48
            hours. Let&apos;s discuss how Rave Tech can streamline your
            workflow, ensure compliance, and boost profitability.
          </p>
        </div>
        <form className="contactForm">
          <label>
            <span>Name</span>
            <input name="name" type="text" autoComplete="name" />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={5} />
          </label>
          <label className="policy">
            <input name="privacy" type="checkbox" />
            <span>I have read and accept the Privacy Policy.</span>
          </label>
          <button className="button primary" type="submit">
            Submit form
          </button>
        </form>
      </section>

      <footer>
        <span>© Rave Tech Pte. Ltd., 2026.</span>
        <span>18 Cross St, #02-101, Singapore 048423</span>
        <a href="#">Privacy Policy</a>
      </footer>
    </main>
  );
}
