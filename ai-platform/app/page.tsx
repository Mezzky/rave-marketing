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

const productPillars = [
  {
    label: "Capture",
    title: "AI Sales Assistant",
    text: "Answers enquiries and qualifies leads.",
  },
  {
    label: "Connect",
    title: "Travel ERP",
    text: "Connects bookings, finance, inventory, and operations.",
  },
  {
    label: "Automate",
    title: "Booking Automation",
    text: "Automates quotes, deposits, confirmations, and follow-ups.",
  },
  {
    label: "Operate",
    title: "Operations Visibility",
    text: "Keeps teams, tasks, and delivery visible.",
  },
];

const story = [
  {
    label: "01",
    title: "Enquiries everywhere",
    text: "Website, WhatsApp, agents, events, and direct customers all create booking work.",
  },
  {
    label: "02",
    title: "Admin slows sales",
    text: "Teams chase details, quotes, deposits, supplier updates, and payment follow-ups.",
  },
  {
    label: "03",
    title: "One connected flow",
    text: "AI, ERP, payments, inventory, and operations work from one coordinated layer.",
  },
  {
    label: "04",
    title: "Cleaner growth",
    text: "Customers get faster answers. Teams get cleaner handoffs and fewer repetitive tasks.",
  },
];

const transformationProgram = [
  {
    title: "Find the friction",
    text: "Find where enquiries, quotes, payments, and handoffs create avoidable manual work.",
  },
  {
    title: "Design the flow",
    text: "Connect your current sales channels to cleaner workflows and stronger visibility.",
  },
  {
    title: "Launch improvements",
    text: "Launch practical automation that improves response speed, control, and capacity.",
  },
];

const storyHeadline =
  "Turn booking pressure into automated flow.";

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
          <p className="eyebrow">AI sales, booking, and operations platform</p>
          <h1>
            Scale bookings.
            <span>Not headcount.</span>
          </h1>
          <p>
            Rave Tech helps travel agencies automate customer conversations,
            booking workflows, payments, operations, and accounting with AI.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#contact">
              Book an Ops Audit
            </a>
            <a className="button ghost" href="#rave-demo">
              See Rave
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

      <section className="overviewSection">
        <div className="sectionIntro centered">
          <p className="eyebrow">What Rave Tech does</p>
          <h2>AI for every booking step.</h2>
          <p>
            Capture enquiries, qualify customers, collect payment, and hand
            clean booking data to operations.
          </p>
        </div>
        <div className="overviewStory">
          <div className="overviewFlow" aria-label="Rave Tech workflow">
            {productPillars.map((pillar, index) => (
              <MotionReveal key={pillar.title} delay={index * 0.06}>
                <article className="overviewStep">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <small>{pillar.label}</small>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
          <aside className="overviewOutcome">
            <p className="eyebrow">Business outcome</p>
            <strong>Booking-ready data</strong>
            <span>
              Sell faster with less manual coordination.
            </span>
          </aside>
        </div>
      </section>

      <section className="storySection" id="story">
        <div className="sectionIntro">
          <p className="eyebrow">Problem to solution</p>
          <h2
            className="storyTypeTitle"
            data-text={storyHeadline}
          >
            <TypingHeadline text={storyHeadline} />
          </h2>
          <p>
            Replace scattered admin with a connected booking workflow.
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

      <div id="rave-demo">
        <SplineRobotSection />
      </div>

      <section className="platformSection" id="platform">
        <div className="sectionIntro centered">
          <p className="eyebrow">Platform ecosystem</p>
          <h2>One connected travel platform.</h2>
          <p>
            One flow from customer enquiry to quote, payment, operations, and accounting.
          </p>
        </div>
        <MotionReveal className="immersiveOps">
          <div>
            <p className="eyebrow">Operating model</p>
            <h2>From enquiry to delivery.</h2>
            <p>
              Rave Tech links customer conversations, booking data, payments,
              team tasks, and finance into one working system.
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
      </section>

      <section className="outcomeSection blueSandSection">
        <div className="blueSandCursor" aria-hidden="true" />
        <div className="beforeAfter">
          <div>
            <p className="eyebrow">Before Rave Tech</p>
            <h2>Teams chase the booking.</h2>
            <p>
              Replies are slow, details live everywhere, and every new booking creates more follow-up.
            </p>
          </div>
          <div>
            <p className="eyebrow">After Rave Tech</p>
            <h2>One system.<br />Every team aligned.</h2>
            <p>
              Customers get instant help. Teams get cleaner data, faster payments, and visible operations.
            </p>
          </div>
        </div>
      </section>

      <section className="programSection">
        <div className="sectionIntro">
          <p className="eyebrow">Services-led transformation</p>
          <h2>Operate smarter. Scale faster.</h2>
          <p>
            We help travel agencies turn automation into a practical operating
            model for faster sales, cleaner handoffs, and less admin.
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
          <h2>Find hidden capacity.<br />Turn it into growth.</h2>
          <p>
            Tell us where your team loses time. We&apos;ll identify practical ways
            Rave Tech can automate enquiries, reduce booking admin, accelerate
            payments, and create more capacity for sales. Submit the form and
            our team will respond within 48 hours with the next steps.
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
