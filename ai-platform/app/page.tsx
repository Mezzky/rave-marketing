import type { CSSProperties } from "react";
import { InteractiveTilt } from "./components/InteractiveTilt";
import { MotionReveal } from "./components/MotionReveal";
import { ScrollExperience } from "./components/ScrollExperience";
import { TravelOpsScene } from "./components/TravelOpsScene";

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
    title: "Rave.tech coordinates",
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
      "Multi-step workflows, complex tax rules, and changing currency exchange rates need accounting built from the ground up for travel businesses.",
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
      "After the sale, Rave operations keeps every moving part visible so your team can deliver better customer experiences.",
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
      "Give customers automated self-service touchpoints to place reservations and make payments across your travel products.",
  },
];

const auditItems = [
  "A personalized demo of Rave.tech software",
  "Robust automated workflows",
  "Ways to enhance customer service",
  "Tools to help optimize pricing",
];

const transformationProgram = [
  {
    title: "Map the operational drag",
    text: "We identify where bookings create avoidable admin across finance, operations, payments, inventory, customer service, and supplier handoffs.",
  },
  {
    title: "Design the AI operating model",
    text: "Rave.tech becomes the coordination layer that connects your current revenue channels with cleaner workflows and stronger management visibility.",
  },
  {
    title: "Launch measurable improvements",
    text: "Your team gets a practical roadmap for scaling reservations, reducing repetitive work, improving compliance, and protecting customer experience.",
  },
];

export default function Home() {
  return (
    <main>
      <ScrollExperience />
      <header className="nav">
        <a className="logo" href="#top" aria-label="Rave.tech home">
          <img src={logoUrl} alt="Rave.tech" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#story">Story</a>
          <a href="#platform">Platform</a>
          <a href="#funding">Grant</a>
          <a href="#contact">Audit</a>
        </nav>
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
            Transform your travel agency&apos;s operations with ERP, ecommerce,
            inventory, payments, APIs, and AI-assisted workflows built for the
            real complexity of travel.
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
                  <strong>24/7</strong>
                  <span>Self-service sales</span>
                </article>
                <article>
                  <strong>1</strong>
                  <span>Central workspace</span>
                </article>
                <article>
                  <strong>48h</strong>
                  <span>Team response</span>
                </article>
              </div>
            </div>
          </InteractiveTilt>
          <div className="orbitalSystem" aria-hidden="true">
            <div className="aiCore">AI</div>
            {modules.slice(0, 6).map((moduleName, index) => (
              <span
                key={moduleName}
                style={
                  {
                    "--i": index,
                    "--angle": `${index * 60}deg`,
                    "--rangle": `${index * -60}deg`,
                  } as CSSProperties
                }
              >
                {moduleName}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Rave.tech platform modules">
        <div className="tickerTrack">
          {[...modules, ...modules, ...modules].map((moduleName, index) => (
            <span key={`${moduleName}-${index}`}>{moduleName}</span>
          ))}
        </div>
      </section>

      <section className="storySection" id="story">
        <div className="sectionIntro">
          <p className="eyebrow">Problem to solution journey</p>
          <h2>Every scroll moves your operation from pressure to leverage.</h2>
          <p>
            Travel growth should feel like opportunity, not another layer of
            admin. Rave.tech turns scattered work into a coordinated operating
            system for modern agencies.
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
          <h2>One premium operating layer for travel revenue, finance, and delivery.</h2>
        </div>
        <MotionReveal className="immersiveOps">
          <div>
            <p className="eyebrow">Live operations model</p>
            <h2>Watch the business connect around the AI core.</h2>
            <p>
              The 3D layer represents how Rave.tech links bookings, finance,
              inventory, payments, and tour operations into one intelligent
              operating system.
            </p>
          </div>
          <TravelOpsScene />
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
            <span>Rave.tech</span>
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

      <section className="outcomeSection">
        <div className="beforeAfter">
          <div>
            <p className="eyebrow">Before Rave.tech</p>
            <h2>Teams chase the booking after it closes.</h2>
            <p>
              Finance waits on operations. Operations waits on missing customer
              details. Customers wait for answers. Growth creates more manual
              coordination.
            </p>
          </div>
          <div>
            <p className="eyebrow">After Rave.tech</p>
            <h2>The business moves as one system.</h2>
            <p>
              Bookings, deposits, inventory, ecommerce, supplier handoffs, and
              tour delivery become visible, trackable, and easier to scale.
            </p>
          </div>
        </div>
      </section>

      <section className="programSection">
        <div className="sectionIntro">
          <p className="eyebrow">Services-led transformation</p>
          <h2>Not a tool rollout. A sharper way to operate.</h2>
          <p>
            Rave.tech helps travel agencies turn digital modernization into a
            business growth program: clearer processes, better automation,
            stronger controls, and more capacity for sales.
          </p>
        </div>
        <div className="programJourney">
          <div className="rocketRail" aria-hidden="true">
            <span className="rocket">▲</span>
          </div>
          <div className="programGrid">
            {transformationProgram.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fundingSection" id="funding">
        <div>
          <p className="eyebrow">Grant funding opportunity</p>
          <h2>Make digital transformation easier to justify.</h2>
          <p>
            Position Rave.tech as a strategic investment in automation,
            compliance, customer experience, and operational capacity. The
            funding conversation becomes a business-growth conversation.
          </p>
          <a className="button primary" href="#contact">
            Discuss eligibility
          </a>
        </div>
        <div className="fundingSummary">
          <span>Grant-ready focus</span>
          <strong>Efficiency</strong>
          <strong>Compliance</strong>
          <strong>Profitability</strong>
        </div>
      </section>

      <section className="auditSection" id="contact">
        <div className="auditCopy">
          <p className="eyebrow">AI Operations Audit</p>
          <h2>Find the hidden capacity inside your travel agency.</h2>
          <p>
            Fill out the form and a member of our team will respond within 48
            hours. Let&apos;s discuss how Rave.tech can streamline your
            workflow, ensure compliance, and boost profitability.
          </p>
          <div className="auditList">
            {auditItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
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
        <span>© Rave Tech Pte. Ltd., 2025.</span>
        <span>81 Aljunied Road, #03-01, Singapore 389823</span>
        <a href="#">Privacy Policy</a>
      </footer>
    </main>
  );
}
