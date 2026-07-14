const React = window.React;
const { useState } = React;
const DS = window.OrcheoDesignSystem_f1e686;
const { Button, IconButton, Badge, NodeChip, Tabs, Avatar, AvatarGroup, Card, Tag, Dialog } = DS;
const Icons = window.Icons;
const D = window.OrcheoData;

const ICON = (name, props) => { const C = Icons[name]; return C ? React.createElement(C, props) : null; };

const STATUS_BADGE = {
  healthy: { intent: "success", label: "healthy" },
  running: { intent: "info", label: "running" },
  warning: { intent: "warning", label: "needs review" },
  error: { intent: "danger", label: "failed" },
};

/* ---------------- Sidebar ---------------- */
function Sidebar({ view, go, runningCount }) {
  const nav = [
    { id: "workflows", label: "Workflows", icon: "workflow", count: D.workflows.length },
    { id: "runs", label: "Runs", icon: "activity", count: runningCount + " live" },
    { id: "connectors", label: "Connectors", icon: "webhook", count: D.connectors.length },
    { id: "agents", label: "Agents", icon: "bot" },
  ];
  const sys = [
    { id: "settings", label: "Settings", icon: "settings" },
  ];
  const item = (n) => (
    <button key={n.id} className="nav" data-active={(view === n.id) || (n.id === "workflows" && view === "canvas")} onClick={() => go(n.id)}>
      {ICON(n.icon, { size: 18 })}
      <span>{n.label}</span>
      {n.count != null && <span className="nav__count">{n.count}</span>}
    </button>
  );
  return (
    <aside className="side">
      <div className="side__brand">
        <img src="../../assets/orcheo-mark.png" alt="Orcheo" />
        <div>
          <b>Orcheo</b>
          <span>by AI Colleagues</span>
        </div>
      </div>
      {nav.map(item)}
      <div className="side__sec">Workspace</div>
      {sys.map(item)}
      <div className="side__user">
        <Avatar name={D.user.name} size="sm" />
        <div>
          <div className="nm">{D.user.name}</div>
          <div className="rl">{D.user.role}</div>
        </div>
      </div>
    </aside>
  );
}

/* ---------------- Topbar ---------------- */
function Topbar({ title, sub, actions }) {
  return (
    <header className="topbar">
      <div className="crumb">
        <span className="crumb__title">{title}</span>
        {sub && <span className="crumb__sub">{sub}</span>}
      </div>
      <div className="topbar__spacer" />
      <div className="topbar__search">
        {ICON("search", { size: 16 })}
        <input placeholder="Search workflows…" />
      </div>
      {actions}
      <IconButton label="Notifications" variant="ghost">{ICON("bell", { size: 20 })}</IconButton>
      <Avatar name={D.user.name} size="sm" />
    </header>
  );
}

/* ---------------- Workflows view ---------------- */
function WorkflowsView({ openWorkflow }) {
  const [tab, setTab] = useState("all");
  const list = tab === "mine" ? D.workflows.filter((w) => w.owner === D.user.name) : D.workflows;
  return (
    <div className="content__inner">
      <div className="content__head" style={{ alignItems: "flex-end" }}>
        <div>
          <div className="h-eyebrow">Orchestration</div>
          <div className="h-title">Workflows</div>
          <div className="h-desc">Compose, connect, and run networks of agents as orchestrated workflows.</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <Tabs variant="pill" value={tab} onChange={setTab} items={[
          { value: "all", label: "All workflows" },
          { value: "mine", label: "Mine" },
        ]} />
        <Button variant="primary" iconLeft={ICON("plus", { size: 18 })}>New workflow</Button>
      </div>
      <div className="wf-grid">
        {list.map((w) => {
          const sb = STATUS_BADGE[w.status];
          return (
            <Card key={w.id} interactive className="wf-card" onClick={() => openWorkflow(w)}>
              <div className="wf-card__top">
                <span className="wf-card__icon">{ICON("workflow", { size: 20 })}</span>
                <Badge intent={sb.intent} dot>{sb.label}</Badge>
              </div>
              <div className="wf-card__name">{w.name}</div>
              <div className="wf-card__desc">{w.desc}</div>
              <div className="wf-card__tags">
                {w.tags.map((t) => <Tag key={t} variant="cream">{t}</Tag>)}
              </div>
              <div className="wf-card__meta">
                <span>{ICON("box", { size: 13, style: { verticalAlign: "-2px", marginRight: 4 } })}{w.nodeCount} nodes</span>
                <span>·</span>
                <span>{w.runs} runs</span>
                <span style={{ marginLeft: "auto" }}>{w.lastRun}</span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Canvas view ---------------- */
function CanvasView({ onRun, running }) {
  const c = D.canvas;
  const [sel, setSel] = useState("n4");
  const pos = {};
  c.nodes.forEach((n) => { pos[n.id] = n; });
  const NW = 188, NH = 52;
  const edgePath = (a, b) => {
    const x1 = pos[a].x + NW, y1 = pos[a].y + NH / 2;
    const x2 = pos[b].x, y2 = pos[b].y + NH / 2;
    const mx = (x1 + x2) / 2;
    return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
  };
  const selNode = pos[sel];
  return (
    <div className="content content--canvas">
      <div className="canvas">
        <div className="canvas__toolbar">
          <div className="canvas__chip">{ICON("layers", { size: 16, style: { color: "var(--orange-600)" } })}<b style={{ fontWeight: 500 }}>{c.name}</b></div>
          <div className="canvas__chip" style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>{c.nodes.length} nodes · 5 connections</div>
          <div style={{ flex: 1 }} />
          <Button variant="secondary" size="sm" iconLeft={ICON("plus", { size: 16 })}>Add node</Button>
          <Button variant="primary" size="sm" loading={running} iconLeft={running ? null : ICON("play", { size: 15 })} onClick={onRun}>{running ? "Running" : "Run"}</Button>
        </div>
        <div className="canvas__inner">
          <svg className="canvas__svg" viewBox="0 0 1080 440">
            {c.edges.map(([a, b], i) => {
              const upstream = pos[a].status === "done";
              return <path key={i} d={edgePath(a, b)} fill="none"
                stroke={upstream ? "var(--orange-400)" : "var(--ink-300)"} strokeWidth="2.5"
                strokeDasharray={upstream ? "0" : "5 5"} />;
            })}
          </svg>
          {c.nodes.map((n) => (
            <div key={n.id} className="canvas__node" style={{ left: n.x, top: n.y, width: NW }} onClick={() => setSel(n.id)}>
              <NodeChip kind={n.kind} title={n.title} meta={n.meta} status={running ? n.status : (n.status === "running" ? "idle" : n.status)}
                active={running && n.status === "running"} selected={sel === n.id}
                icon={ICON(n.icon, { size: 17 })} style={{ width: "100%" }} />
            </div>
          ))}
        </div>
      </div>
      <aside className="inspector">
        <div className="inspector__head">
          <div className="h-eyebrow" style={{ fontSize: 11 }}>{selNode.kind}</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 20, color: "var(--text-strong)", letterSpacing: "-0.01em", marginTop: 2 }}>{selNode.title}</div>
        </div>
        <div className="inspector__body">
          <div>
            <span className="field-label">Type</span>
            <Tag variant="cream">{selNode.kind}</Tag>
          </div>
          <div>
            <span className="field-label">Configuration</span>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-body)", background: "var(--surface-sunken)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "12px 14px", lineHeight: 1.6 }}>
              {selNode.meta}
            </div>
          </div>
          {selNode.kind === "agent" && (
            <div>
              <span className="field-label">Instructions</span>
              <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>
                Summarize each paper in two sentences, rank by relevance to our research, and format the top 5 for Slack.
              </div>
            </div>
          )}
          <div style={{ marginTop: "auto", display: "flex", gap: 8 }}>
            <Button variant="secondary" size="sm" block>Configure</Button>
          </div>
        </div>
      </aside>
    </div>
  );
}

/* ---------------- Run view ---------------- */
const STEP_STYLE = {
  done: { bg: "var(--intent-success-bg)", fg: "var(--green-600)" },
  running: { bg: "var(--orange-100)", fg: "var(--orange-700)" },
  idle: { bg: "var(--ink-100)", fg: "var(--text-subtle)" },
  error: { bg: "var(--intent-danger-bg)", fg: "var(--red-600)" },
};
function RunView() {
  const r = D.run;
  return (
    <div className="content__inner" style={{ maxWidth: 760 }}>
      <div className="content__head" style={{ display: "block" }}>
        <div className="h-eyebrow">Run · {r.id}</div>
        <div className="h-title" style={{ fontSize: "var(--text-2xl)" }}>{r.workflow}</div>
        <div style={{ display: "flex", gap: 16, marginTop: 12, alignItems: "center", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)" }}>
          <Badge intent="info" dot>running</Badge>
          <span>{r.started}</span>
          <span>·</span>
          <span>{r.duration}</span>
        </div>
      </div>
      <Card variant="flat" style={{ marginTop: 8 }}>
        <div className="run-list" style={{ padding: "4px 8px" }}>
          {r.steps.map((s, i) => {
            const st = STEP_STYLE[s.status];
            const last = i === r.steps.length - 1;
            return (
              <div className="run-step" key={s.id}>
                <div className="run-step__rail">
                  <div className="run-step__dot" style={{ background: st.bg, color: st.fg }}>
                    {s.status === "done" && ICON("check", { size: 16 })}
                    {s.status === "running" && <span style={{ width: 13, height: 13, border: "2px solid currentColor", borderRightColor: "transparent", borderRadius: "50%", display: "block", animation: "orc-spin .6s linear infinite" }} />}
                    {s.status === "idle" && ICON("clock", { size: 15 })}
                    {s.status === "error" && ICON("alert", { size: 15 })}
                  </div>
                  {!last && <div className="run-step__line" style={{ background: s.status === "done" ? "var(--orange-300)" : "var(--border-default)" }} />}
                </div>
                <div className="run-step__body">
                  <div className="run-step__name">
                    {s.node}
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 400, color: "var(--text-subtle)" }}>{s.kind}</span>
                    {s.ms != null && <span className="run-step__ms" style={{ marginLeft: "auto" }}>{s.ms} ms</span>}
                  </div>
                  <div className="run-step__detail">{s.detail}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

/* ---------------- Connectors view ---------------- */
function ConnectorsView() {
  return (
    <div className="content__inner">
      <div className="content__head" style={{ display: "block" }}>
        <div className="h-eyebrow">Integrations</div>
        <div className="h-title">Connectors</div>
        <div className="h-desc">Tools your agents can call. Connect once, reuse across every workflow.</div>
      </div>
      <div className="conn-grid" style={{ marginTop: 24 }}>
        {D.connectors.map((c) => (
          <Card key={c.name} className="conn-card">
            <span className="conn-card__icon">{ICON(c.icon, { size: 20 })}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 500, color: "var(--text-strong)" }}>{c.name}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.scope}</div>
            </div>
            <Badge intent={c.status === "connected" ? "success" : "danger"} dot>{c.status}</Badge>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Generic placeholder ---------------- */
function Placeholder({ title, desc }) {
  return (
    <div className="content__inner" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60vh", textAlign: "center", color: "var(--text-muted)" }}>
      {ICON("box", { size: 40, style: { color: "var(--ink-300)" } })}
      <div className="h-title" style={{ fontSize: "var(--text-xl)", marginTop: 16 }}>{title}</div>
      <div className="h-desc" style={{ textAlign: "center" }}>{desc}</div>
    </div>
  );
}

/* ---------------- App ---------------- */
function App() {
  const [view, setView] = useState("workflows");
  const [active, setActive] = useState(D.canvas);
  const [running, setRunning] = useState(false);

  const go = (v) => setView(v);
  const openWorkflow = (w) => { setActive(w); setView("canvas"); };
  const onRun = () => {
    setRunning(true);
    setTimeout(() => { setRunning(false); setView("runs"); }, 1400);
  };
  const runningCount = D.workflows.filter((w) => w.status === "running").length;

  let title = "Workflows", sub = null, actions = null, body = null;
  if (view === "workflows") { body = <WorkflowsView openWorkflow={openWorkflow} />; }
  else if (view === "canvas") {
    title = active.name; sub = "editing";
    actions = <Button variant="ghost" size="sm" iconLeft={ICON("arrowLeft", { size: 16 })} onClick={() => go("workflows")}>Workflows</Button>;
    body = <CanvasView onRun={onRun} running={running} />;
  }
  else if (view === "runs") { title = "Runs"; sub = D.run.id; body = <RunView />; }
  else if (view === "connectors") { title = "Connectors"; body = <ConnectorsView />; }
  else if (view === "agents") { title = "Agents"; body = <Placeholder title="Agents" desc="Reusable agent definitions live here — give them a name, a model, and instructions." />; }
  else { title = "Settings"; body = <Placeholder title="Settings" desc="Workspace, billing, and member settings." />; }

  const isCanvas = view === "canvas";
  return (
    <div className="app">
      <Sidebar view={view} go={go} runningCount={runningCount} />
      <div className="main">
        <Topbar title={title} sub={sub} actions={actions} />
        {isCanvas ? body : <div className="content">{body}</div>}
      </div>
    </div>
  );
}

window.OrcheoApp = App;
