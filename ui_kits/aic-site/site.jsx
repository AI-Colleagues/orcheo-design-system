const React = window.React;
const DS = window.OrcheoDesignSystem_f1e686;
const { Button, Badge, NodeChip, Tag } = DS;
const Icons = window.Icons;
const ICON = (n, p) => { const C = Icons[n]; return C ? React.createElement(C, p) : null; };

function Nav() {
  return (
    <div className="nav-bar">
      <div className="wrap nav-in">
        <div className="nav-brand">
          <img src="../../assets/aic-mark-ink.png" alt="AI Colleagues" />
          <b>AI Colleagues</b>
        </div>
        <div className="nav-links">
          <a href="#">Product</a>
          <a href="#">Orcheo</a>
          <a href="#">Customers</a>
          <a href="#">Docs</a>
          <a href="#">Company</a>
        </div>
        <div className="nav-actions">
          <a href="#" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-body)" }}>Sign in</a>
          <Button variant="primary" size="sm">Get started</Button>
        </div>
      </div>
    </div>
  );
}

function HeroMock() {
  const nodes = [
    { id: "a", kind: "trigger", title: "Webhook", meta: "POST /ticket", icon: "webhook", x: 24, y: 36, status: "done" },
    { id: "b", kind: "agent", title: "Triage agent", meta: "claude-sonnet-4", icon: "bot", x: 250, y: 120, status: "running" },
    { id: "c", kind: "tool", title: "Reply in Zendesk", meta: "#support", icon: "message", x: 470, y: 36, status: "idle" },
    { id: "d", kind: "tool", title: "Escalate", meta: "pagerduty", icon: "bell", x: 470, y: 196, status: "idle" },
  ];
  const W = 168, H = 52;
  const pos = {}; nodes.forEach((n) => pos[n.id] = n);
  const edge = (a, b) => {
    const x1 = pos[a].x + W, y1 = pos[a].y + H / 2, x2 = pos[b].x, y2 = pos[b].y + H / 2, mx = (x1 + x2) / 2;
    return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
  };
  return (
    <div className="mock">
      <div className="mock__bar">
        <span className="mock__dot" /><span className="mock__dot" /><span className="mock__dot" />
        <span className="mock__title">orcheo · support-triage</span>
      </div>
      <div className="mock__canvas">
        <svg className="mock__svg" viewBox="0 0 660 320">
          <path d={edge("a", "b")} fill="none" stroke="var(--orange-400)" strokeWidth="2.5" />
          <path d={edge("b", "c")} fill="none" stroke="var(--ink-300)" strokeWidth="2.5" strokeDasharray="5 5" />
          <path d={edge("b", "d")} fill="none" stroke="var(--ink-300)" strokeWidth="2.5" strokeDasharray="5 5" />
        </svg>
        {nodes.map((n) => (
          <div className="mock__node" key={n.id} style={{ left: n.x, top: n.y, width: W }}>
            <NodeChip kind={n.kind} title={n.title} meta={n.meta} status={n.status}
              active={n.status === "running"} icon={ICON(n.icon, { size: 16 })} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow-pill">{ICON("zap", { size: 13 })} Agentic orchestration</span>
          <h1>Orchestrate your agents.<br /><em>Ship the work.</em></h1>
          <p>Orcheo is the orchestration platform from AI Colleagues. Compose triggers, tools, and AI
            agents into reliable workflows — then run them on a schedule, a webhook, or on demand.</p>
          <div className="hero-cta">
            <Button variant="primary" size="lg" iconRight={ICON("chevronRight", { size: 18 })}>Start building free</Button>
            <Button variant="secondary" size="lg" iconLeft={ICON("play", { size: 15 })}>Watch a 2-min demo</Button>
          </div>
          <div className="hero-note">{ICON("check", { size: 14, style: { color: "var(--green-500)" } })} No credit card · Free for 3 workflows</div>
        </div>
        <HeroMock />
      </div>
    </div>
  );
}

function Logos() {
  const names = ["Northwind", "Aperture", "Lumon", "Hooli", "Initech", "Soylent"];
  return (
    <div className="logos">
      <div className="wrap logos__row">
        <span className="logos__label">Trusted by teams at</span>
        {names.map((n) => <span key={n} className="logos__name">{n}</span>)}
      </div>
    </div>
  );
}

function Features() {
  const feats = [
    { icon: "workflow", t: "Visual orchestration", d: "Drag triggers, tools, and agents onto a canvas and wire them together. No glue code, no brittle scripts." },
    { icon: "bot", t: "Agents that act", d: "Give an agent a model, instructions, and the connectors it needs. It reasons, calls tools, and reports back." },
    { icon: "activity", t: "Observability built in", d: "Every run is traced step-by-step — inputs, outputs, timings, and failures, ready to replay or debug." },
    { icon: "webhook", t: "Connect everything", d: "Slack, Postgres, GitHub, Salesforce, and any HTTP API. Connect once, reuse across every workflow." },
    { icon: "clock", t: "Run on your schedule", d: "Cron, webhook, or manual. Orcheo handles retries, rate limits, and concurrency for you." },
    { icon: "layers", t: "Built for scale", d: "From a single daily digest to thousands of concurrent runs — the same workflow, no rewrite." },
  ];
  return (
    <div className="section">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Why Orcheo</div>
          <h2>The control plane for your AI colleagues</h2>
          <p>Everything you need to put agents to work reliably — from the first prototype to production.</p>
        </div>
        <div className="feat-grid">
          {feats.map((f) => (
            <div className="feat" key={f.t}>
              <span className="feat__icon">{ICON(f.icon, { size: 22 })}</span>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Steps() {
  const steps = [
    { n: "01", t: "Compose", d: "Lay out your workflow on the canvas — a trigger, the tools it needs, and the agents that do the thinking." },
    { n: "02", t: "Connect", d: "Authorize your tools once. Agents call them safely with scoped, auditable access." },
    { n: "03", t: "Run & watch", d: "Trigger a run and follow every step live. Replay, branch, or promote to production in a click." },
  ];
  return (
    <div className="section section--cream">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">How it works</div>
          <h2>From idea to running workflow in minutes</h2>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="step__n">{s.n}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stats() {
  const stats = [
    { n: "12M+", l: "workflow runs orchestrated each month" },
    { n: "99.95%", l: "run reliability across production workflows" },
    { n: "200+", l: "tools and APIs available as connectors" },
  ];
  return (
    <div className="section section--ink">
      <div className="wrap stats">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="stat__n">{s.n}</div>
            <div className="stat__l">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className="section">
      <div className="wrap">
        <div className="cta">
          <h2>Put your agents to work</h2>
          <p>Start free. Build your first orchestrated workflow today.</p>
          <div className="cta__row">
            <Button variant="inverse" size="lg" iconRight={ICON("chevronRight", { size: 18 })}>Start building free</Button>
            <Button variant="secondary" size="lg">Talk to sales</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const cols = [
    { h: "Product", links: ["Orcheo", "Connectors", "Agents", "Pricing", "Changelog"] },
    { h: "Developers", links: ["Docs", "API reference", "Examples", "Status"] },
    { h: "Company", links: ["About", "Careers", "Blog", "Contact"] },
  ];
  return (
    <div className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot__brand">
              <img src="../../assets/aic-mark-white.png" alt="AI Colleagues" />
              <b>AI Colleagues</b>
            </div>
            <p style={{ fontSize: 14, color: "var(--ink-400)", lineHeight: 1.6, maxWidth: "32ch" }}>
              We build AI colleagues that work alongside your team. Orcheo is our agentic orchestration platform.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h5>{c.h}</h5>
              {c.links.map((l) => <a key={l} href="#">{l}</a>)}
            </div>
          ))}
        </div>
        <div className="foot__legal">
          <span>© 2026 AI Colleagues, Inc.</span>
          <span>Privacy · Terms · Security</span>
        </div>
      </div>
    </div>
  );
}

function Site() {
  return (
    <div className="site">
      <Nav />
      <Hero />
      <Logos />
      <Features />
      <Steps />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

window.AICSite = Site;
