const React = window.React;
const { useState, useEffect } = React;
const DS = window.OrcheoDesignSystem_f1e686;
const { Button, IconButton, Badge, NodeChip, Tabs, Avatar, Card, Tag, Switch, Input } = DS;
const Icons = window.Icons;
const D = window.OrcheoData;

const ICON = (name, props) => {
  const C = Icons[name];
  return C ? React.createElement(C, props) : null;
};

/* ============================ Dropdown menu ============================ */
function Menu({ trigger, children, placement = "down", width }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="menu">
      <div onClick={() => setOpen((o) => !o)}>{trigger}</div>
      {open && (
        <>
          <div className="menu__backdrop" onClick={() => setOpen(false)} />
          <div
            className={"menu__panel menu__panel--" + placement}
            style={width ? { width, minWidth: width } : undefined}
            onClick={() => setOpen(false)}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
}
function MenuItem({ icon, children, onClick, danger, checked, arrow }) {
  return (
    <button className="menu__item" data-danger={danger || undefined} onClick={onClick}>
      {icon}
      <span>{children}</span>
      {checked && <span className="chk">{ICON("check", { size: 15 })}</span>}
      {arrow && <span className="arr">{ICON("chevronRight", { size: 15 })}</span>}
    </button>
  );
}
const MenuLabel = ({ children }) => <div className="menu__label">{children}</div>;
const MenuSep = () => <div className="menu__sep" />;

// Second-order (flyout) submenu that opens to the side on hover.
function SubMenu({ label, icon, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="submenu" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="menu__item" onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}>
        {icon}
        <span>{label}</span>
        <span className="arr">{ICON("chevronRight", { size: 15 })}</span>
      </button>
      {open && <div className="submenu__panel">{children}</div>}
    </div>
  );
}

/* ============================ Modal ============================ */
function Modal({ open, onClose, className, children }) {
  if (!open) return null;
  return (
    <div className="modal__scrim" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={["modal", className].filter(Boolean).join(" ")} role="dialog" aria-modal="true">
        <button className="modal__close" onClick={onClose} aria-label="Close">{ICON("x", { size: 18 })}</button>
        {children}
      </div>
    </div>
  );
}

/* ============================ Sidebar ============================ */
function UserMenu({ collapsed, go, openAbout }) {
  const current = D.workspaces.find((w) => w.current) || D.workspaces[0];
  return (
    <Menu
      placement="up"
      width={220}
      trigger={
        <button className="user" title={collapsed ? D.user.name : undefined}>
          <Avatar name={D.user.name} size="sm" agent />
          {!collapsed && (
            <>
              <div className="user__txt">
                <div className="nm">{D.user.name}</div>
                <div className="rl">{current.name}</div>
              </div>
              <span className="user__chev">{ICON("chevronsUpDown", { size: 15 })}</span>
            </>
          )}
        </button>
      }
    >
      <MenuLabel>My account</MenuLabel>
      <MenuItem icon={ICON("user", { size: 16 })} onClick={() => go("profile")}>Profile</MenuItem>
      <MenuItem icon={ICON("settings", { size: 16 })} onClick={() => go("settings")}>Settings</MenuItem>
      <MenuItem icon={ICON("building", { size: 16 })} onClick={() => go("workspace")}>Workspace Management</MenuItem>
      <MenuSep />
      <MenuLabel>Workspace</MenuLabel>
      <SubMenu
        label={current.name}
        icon={<span className="ws__badge" style={{ width: 20, height: 20, fontSize: 11 }}>{current.name[0]}</span>}
      >
        {D.workspaces.map((w) => (
          <MenuItem
            key={w.id}
            icon={<span className="ws__badge" style={{ width: 18, height: 18, fontSize: 10 }}>{w.name[0]}</span>}
            checked={w.current}
          >
            {w.name}
          </MenuItem>
        ))}
        <MenuSep />
        <MenuItem icon={ICON("plus", { size: 16 })}>Create workspace</MenuItem>
      </SubMenu>
      <MenuSep />
      <MenuItem icon={ICON("info", { size: 16 })} onClick={openAbout}>About</MenuItem>
      <MenuItem icon={ICON("logout", { size: 16 })} danger>Log out</MenuItem>
    </Menu>
  );
}

/* About modal content — Studio / backend / core versions. */
function AboutContent() {
  const rows = [
    { label: "Studio", value: D.versions.studio },
    { label: "Backend", value: D.versions.backend },
    { label: "Core", value: D.versions.core },
  ];
  return (
    <div className="modal__body" style={{ maxWidth: 360 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src="../../assets/orcheo-mark.png" alt="Orcheo" style={{ width: 36, height: 36, borderRadius: "var(--radius-sm)" }} />
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text-strong)", letterSpacing: "-0.02em" }}>Orcheo</div>
          <div className="muted" style={{ fontSize: 13 }}>by AI Colleagues</div>
        </div>
      </div>
      <div className="table-wrap">
        <table className="table">
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <td>{r.label}</td>
                <td className="mono" style={{ textAlign: "right" }}>{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Sidebar({ view, go, collapsed, setCollapsed, openVault, openAbout }) {
  const [peek, setPeek] = useState(false);
  const nav = [
    { id: "colleagues", label: "AI Colleagues", icon: "users" },
    { id: "apps", label: "Apps", icon: "grid" },
    { id: "vault", label: "Credential Vault", icon: "vault", action: openVault },
    { id: "feedback", label: "Feedback & issues", icon: "github", ext: true },
  ];
  const isActive = (id) =>
    view === id || (id === "colleagues" && view === "editor") || (id === "apps" && view === "appDetail");
  // Docked-collapsed hides the sidebar completely (translated off-screen); hovering
  // the thin edge zone peeks the full (labeled) sidebar back in as an overlay.
  const showLabels = !collapsed || peek;
  return (
    <div
      className="side-wrap"
      data-collapsed={collapsed || undefined}
      data-peek={(collapsed && peek) || undefined}
      onMouseEnter={() => collapsed && setPeek(true)}
      onMouseLeave={() => setPeek(false)}
    >
      {collapsed && <div className="side-hoverzone" />}
      <aside className="side">
        <div className="side__brand">
          <img src="../../assets/orcheo-mark.png" alt="Orcheo" />
          {showLabels && (
            <div className="side__brand-txt">
              <b>Orcheo</b>
              <span>by AI Colleagues</span>
            </div>
          )}
          <button
            className="side__collapse"
            onClick={() => setCollapsed((c) => !c)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand" : "Collapse"}
          >
            {ICON("panelLeft", { size: 17 })}
          </button>
        </div>

        <div style={{ height: 8 }} />

        {nav.map((n) => (
          <button
            key={n.id}
            className="nav"
            data-active={isActive(n.id)}
            onClick={() => (n.action ? n.action() : go(n.id))}
            title={showLabels ? undefined : n.label}
          >
            {ICON(n.icon, { size: 18 })}
            {showLabels && <span className="nav__label">{n.label}</span>}
            {showLabels && n.ext && <span className="nav__ext">{ICON("externalLink", { size: 13 })}</span>}
          </button>
        ))}

        <div style={{ flex: 1 }} />
        <UserMenu collapsed={!showLabels} go={go} openAbout={openAbout} />
      </aside>
    </div>
  );
}

/* ============================ Shared bits ============================ */
const STATE_BADGE = {
  draft: { intent: "neutral", label: "draft" },
  published: { intent: "success", label: "published" },
  unpublished: { intent: "warning", label: "unpublished" },
  suspended: { intent: "danger", label: "suspended" },
  archived: { intent: "neutral", label: "archived" },
};
const HEALTH_BADGE = {
  healthy: { intent: "success", label: "healthy" },
  unknown: { intent: "neutral", label: "unknown" },
  error: { intent: "danger", label: "error" },
};

function TeamSection({ name, count, defaultOpen = true, onRemove, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="teamsec">
      <button className="teamsec__head" onClick={() => setOpen((o) => !o)}>
        <span className="teamsec__chev">{ICON(open ? "chevronDown" : "chevronRight", { size: 16 })}</span>
        <span className="teamsec__name">{name}</span>
        <span className="teamsec__count">{count}</span>
        {onRemove && (
          <span
            className="teamsec__remove"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
          >
            {ICON("trash", { size: 15 })}
          </span>
        )}
      </button>
      {open && <div className="teamsec__body">{children}</div>}
    </section>
  );
}

/* ============================ AI Colleagues ============================ */
function ColleagueCard({ c, isCandidate, workspaceLabel, onOpen }) {
  const [starred, setStarred] = useState(!!c.starred);
  const open = !isCandidate ? () => onOpen(c) : undefined;
  return (
    <Card
      interactive={!isCandidate}
      className="cbadge"
      onClick={open}
      role={isCandidate ? undefined : "button"}
      tabIndex={isCandidate ? undefined : 0}
      aria-label={isCandidate ? undefined : `Open ${c.name}`}
      onKeyDown={
        open
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open();
              }
            }
          : undefined
      }
    >
      <div className="cbadge__strip">
        {isCandidate ? "Candidate" : workspaceLabel}
        <span className="cbadge__strip-menu">
          <Menu
            placement="right"
            trigger={
              <IconButton size="sm" label="Actions" onClick={(e) => e.stopPropagation()}>
                {ICON("more", { size: 16 })}
              </IconButton>
            }
          >
            <MenuItem icon={ICON("send", { size: 15 })}>Transfer</MenuItem>
            {!isCandidate && (
              <>
                <MenuSep />
                <MenuItem icon={ICON("userMinus", { size: 15 })} danger>Offboard</MenuItem>
              </>
            )}
          </Menu>
        </span>
      </div>
      <div className="cbadge__body">
        <div className="cbadge__avatar-wrap">
          <span className="cbadge__flag" data-error={c.error || undefined}>
            <span className="dot" />
            <span className="txt">{c.error ? "Error" : "AI"}</span>
          </span>
          <span className="cbadge__avatar">{c.emoji}</span>
          {!isCandidate && (
            <span className="cbadge__star" data-on={starred || undefined}>
              <IconButton
                size="sm"
                label="Star"
                onClick={(e) => {
                  e.stopPropagation();
                  setStarred((s) => !s);
                }}
              >
                {ICON("star", { size: 15 })}
              </IconButton>
            </span>
          )}
        </div>
        <div className="cbadge__name">{c.name}</div>
        <div className="cbadge__handle">@{c.handle}</div>
        <div className="cbadge__ver">v{c.version}</div>
        <div className="cbadge__rule" />
        {c.subtitle && <div className="cbadge__subtitle">{c.subtitle}</div>}
        <div className="cbadge__desc">{c.description}</div>
      </div>
      {isCandidate && (
        <div className="cbadge__foot">
          <Button size="sm" variant="primary" iconLeft={ICON("userPlus", { size: 14 })} onClick={(e) => e.stopPropagation()}>
            Onboard
          </Button>
        </div>
      )}
    </Card>
  );
}

function ColleaguesView({ openColleague }) {
  const [tab, setTab] = useState("teams");
  const [q, setQ] = useState("");
  const workspaceLabel = (D.workspaces.find((w) => w.current) || {}).name || "Workspace";

  const allColleagues = D.teams.flatMap((t) => t.colleagues);
  const teamCount = allColleagues.length;
  const starredCount = allColleagues.filter((c) => c.starred).length;
  const candidateCount =
    D.candidateGroups.reduce((n, g) => n + g.candidates.length, 0) + D.candidateIndependents.length;

  const match = (c) => !q || (c.name + " " + c.handle + " " + (c.subtitle || "")).toLowerCase().includes(q.toLowerCase());

  const grid = (items, isCandidate) => (
    <div className="cbadge-grid">
      {items.map((c) => (
        <ColleagueCard key={c.id} c={c} isCandidate={isCandidate} workspaceLabel={workspaceLabel} onOpen={openColleague} />
      ))}
    </div>
  );

  let body;
  if (tab === "candidates") {
    body = (
      <div>
        {D.candidateIndependents.filter(match).length > 0 && grid(D.candidateIndependents.filter(match), true)}
        {D.candidateGroups.map((g) => {
          const items = g.candidates.filter(match);
          if (items.length === 0) return null;
          return (
            <TeamSection key={g.slug} name={g.name} count={items.length}>
              {grid(items, true)}
            </TeamSection>
          );
        })}
      </div>
    );
  } else {
    body = (
      <div>
        {D.teams.map((t) => {
          let items = t.colleagues.filter(match);
          if (tab === "starred") items = items.filter((c) => c.starred);
          if (tab === "starred" && items.length === 0) return null;
          return (
            <TeamSection
              key={t.id}
              name={t.id === "__none__" ? "Ungrouped" : t.name}
              count={items.length}
              onRemove={t.id !== "__none__" ? () => {} : undefined}
            >
              {items.length > 0 ? grid(items, false) : <p className="muted" style={{ padding: "8px 2px", fontSize: 13 }}>No colleagues here yet.</p>}
            </TeamSection>
          );
        })}
      </div>
    );
  }

  return (
    <div className="inner">
      <div className="toolbar">
        <Tabs
          variant="pill"
          value={tab}
          onChange={setTab}
          items={[
            { value: "teams", label: "AI Teams", count: teamCount },
            { value: "starred", label: "Starred", count: starredCount },
            { value: "candidates", label: "Candidates", count: candidateCount },
          ]}
        />
        <div className="search" style={{ width: 300 }}>
          {ICON("search", { size: 16 })}
          <input placeholder="Search colleagues…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="toolbar__spacer" />
        <Button variant="secondary" size="sm" iconLeft={ICON("upload", { size: 16 })}>Upload</Button>
      </div>

      {body}

      {tab !== "candidates" && (
        <div style={{ marginTop: 16 }}>
          <Button variant="ghost" size="sm" iconLeft={ICON("plus", { size: 16 })}>New team</Button>
        </div>
      )}
    </div>
  );
}

/* ============================ Apps ============================ */
function AppsView({ openApp }) {
  return (
    <div className="inner">
      <div className="toolbar" style={{ marginBottom: 20 }}>
        <div className="toolbar__spacer" />
        <Button variant="primary" iconLeft={ICON("plus", { size: 16 })}>Create app</Button>
      </div>

      <div className="apps-grid">
        {D.apps.map((a) => {
          const st = STATE_BADGE[a.state];
          const hl = HEALTH_BADGE[a.health];
          return (
            <Card key={a.id} interactive className="app-card" onClick={() => openApp(a)}>
              <div className="app-card__top">
                <span className="app-card__icon">{ICON("grid", { size: 20 })}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="app-card__name">{a.name}</div>
                  <div className="app-card__alias">
                    {ICON(a.visibility === "public" ? "globe" : "lock", { size: 12 })}
                    {a.alias}.{D.appsBaseDomain}
                  </div>
                </div>
                <span onClick={(e) => e.stopPropagation()}>
                  <Menu
                    placement="right"
                    trigger={<IconButton size="sm" label="App actions">{ICON("more", { size: 18 })}</IconButton>}
                  >
                    <MenuItem icon={ICON("upload", { size: 15 })}>Upload deployment</MenuItem>
                    <MenuItem icon={ICON("download", { size: 15 })}>Export bundle</MenuItem>
                    {a.state === "published" ? (
                      <MenuItem icon={ICON("pause", { size: 15 })}>Unpublish</MenuItem>
                    ) : (
                      <MenuItem icon={ICON("rocket", { size: 15 })}>Publish</MenuItem>
                    )}
                    <MenuSep />
                    <MenuItem icon={ICON("trash", { size: 15 })} danger>Delete</MenuItem>
                  </Menu>
                </span>
              </div>
              <div className="app-card__badges">
                <Badge intent={a.visibility === "public" ? "info" : "neutral"}>{a.visibility}</Badge>
                <Badge intent={st.intent} dot>{st.label}</Badge>
                <Badge intent={hl.intent} dot>{hl.label}</Badge>
              </div>
              <div className="app-card__meta">
                <span>{a.activeDeployment ? a.deployments.find((d) => d.active)?.version : "no active build"}</span>
                <span>·</span>
                <span>{a.deployments.length} deploys</span>
                <span style={{ marginLeft: "auto" }}>{a.updated}</span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function AppDetailView({ app, back }) {
  const st = STATE_BADGE[app.state];
  const published = app.state === "published";
  return (
    <div className="inner">
      <button className="back" onClick={back}>{ICON("arrowLeft", { size: 16 })} Apps</button>

      <div className="detail-head">
        <div>
          <div className="h-title" style={{ fontSize: "var(--text-2xl)", marginTop: 0 }}>{app.name}</div>
          <div className="app-card__alias" style={{ marginTop: 6, fontSize: 13 }}>
            {ICON(app.visibility === "public" ? "globe" : "lock", { size: 13 })}
            {app.alias}.{D.appsBaseDomain}
            {ICON("externalLink", { size: 12 })}
          </div>
          <div className="app-card__badges" style={{ marginTop: 10 }}>
            <Badge intent={app.visibility === "public" ? "info" : "neutral"}>{app.visibility}</Badge>
            <Badge intent={st.intent} dot>{st.label}</Badge>
            <Badge intent={HEALTH_BADGE[app.health].intent} dot>{HEALTH_BADGE[app.health].label}</Badge>
          </div>
        </div>
        <div className="detail-head__spacer" />
        {published ? (
          <Button variant="secondary" iconLeft={ICON("pause", { size: 16 })}>Unpublish</Button>
        ) : (
          <Button variant="primary" iconLeft={ICON("rocket", { size: 16 })}>Publish</Button>
        )}
        <span style={{ marginLeft: 8 }}>
          <Menu placement="right" trigger={<IconButton label="More">{ICON("more", { size: 18 })}</IconButton>}>
            <MenuItem icon={ICON("upload", { size: 15 })}>Upload deployment</MenuItem>
            <MenuItem icon={ICON("download", { size: 15 })}>Export bundle</MenuItem>
            <MenuSep />
            <MenuItem icon={ICON("trash", { size: 15 })} danger>Delete app</MenuItem>
          </Menu>
        </span>
      </div>

      <div className="stat-row" style={{ marginBottom: 20 }}>
        <div className="stat"><div className="stat__v">{app.deployments.length}</div><div className="stat__l">Deployments</div></div>
        <div className="stat"><div className="stat__v">{app.bindings.length}</div><div className="stat__l">Workflow bindings</div></div>
        <div className="stat"><div className="stat__v">{app.collections.length}</div><div className="stat__l">Data collections</div></div>
        <div className="stat"><div className="stat__v">{app.updated}</div><div className="stat__l">Last updated</div></div>
      </div>

      <div className="detail-grid">
        <Card className="section-card">
          <div className="section-card__title">
            Deployments
            <Button size="sm" variant="secondary" iconLeft={ICON("upload", { size: 14 })}>Upload</Button>
          </div>
          {app.deployments.map((d) => (
            <div className="dep-row" key={d.id}>
              <div className="dep-row__ver">{d.version}</div>
              <div className="dep-row__meta">
                <div className="dep-row__digest">{d.digest} · {d.size} · {d.files} files</div>
                <div className="mono" style={{ marginTop: 2 }}>{d.created}</div>
              </div>
              {d.active ? (
                <Badge intent="success" dot>active</Badge>
              ) : (
                <Button size="sm" variant="ghost">Roll back</Button>
              )}
            </div>
          ))}
        </Card>

        <div>
          <Card className="section-card">
            <div className="section-card__title">Workflow bindings</div>
            {app.bindings.length === 0 ? (
              <p className="muted" style={{ fontSize: 13 }}>No bindings yet. Bind a workflow so the app can call it as a backend.</p>
            ) : (
              app.bindings.map((b) => (
                <div className="dep-row" key={b.name}>
                  <div className="dep-row__meta">
                    <div style={{ fontWeight: 500, color: "var(--text-strong)" }}>{b.name}</div>
                    <div className="mono" style={{ marginTop: 2 }}>{b.workflow} · v{b.version} · {b.rate}</div>
                  </div>
                  <Badge intent={b.access === "anonymous" ? "warning" : "neutral"}>{b.access}</Badge>
                </div>
              ))
            )}
          </Card>

          <Card className="section-card" style={{ marginTop: 20 }}>
            <div className="section-card__title">Data collections</div>
            {app.collections.length === 0 ? (
              <p className="muted" style={{ fontSize: 13 }}>No collections configured.</p>
            ) : (
              app.collections.map((c) => (
                <div className="dep-row" key={c.name}>
                  <div className="dep-row__meta">
                    <div style={{ fontWeight: 500, color: "var(--text-strong)" }}>{c.name}</div>
                    <div className="mono" style={{ marginTop: 2 }}>read: {c.read} · write: {c.write}</div>
                  </div>
                  <Tag variant="cream">{c.access}</Tag>
                </div>
              ))
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ============================ Credential Vault (modal content) ============================ */
const ACCESS_LABEL = { scoped: "Workflow-scoped", shared: "Shared" };
const CRED_STATUS = {
  healthy: { intent: "success", label: "healthy" },
  unhealthy: { intent: "danger", label: "needs attention" },
  unknown: { intent: "neutral", label: "unknown" },
};
function VaultContent() {
  const [q, setQ] = useState("");
  const [revealed, setRevealed] = useState({});
  const list = D.credentials.filter(
    (c) => !q || (c.name + " " + c.provider).toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <div className="modal__body">
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, paddingRight: 32 }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-xl)", color: "var(--text-strong)", letterSpacing: "-0.02em" }}>Credential Vault</div>
          <p className="muted" style={{ fontSize: 13, marginTop: 4, maxWidth: "62ch" }}>
            Credentials stored here are securely injected into your workflows at runtime, so nodes can authenticate to external services without hardcoding secrets.
          </p>
        </div>
        <Button variant="primary" size="sm" iconLeft={ICON("plus", { size: 15 })}>Add</Button>
      </div>

      <div className="search" style={{ width: "100%", maxWidth: 360 }}>
        {ICON("search", { size: 16 })}
        <input placeholder="Search credentials…" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>

      <div className="table-wrap" style={{ overflowX: "auto" }}>
        <table className="table" style={{ minWidth: 820 }}>
          <thead>
            <tr>
              <th style={{ width: 260 }}>Name</th>
              <th>Provider</th>
              <th>Access</th>
              <th>Status</th>
              <th style={{ width: 190 }}>Secret</th>
              <th>Last updated</th>
              <th style={{ width: 48 }} />
            </tr>
          </thead>
          <tbody>
            {list.map((c) => {
              const s = CRED_STATUS[c.status];
              const on = revealed[c.id];
              return (
                <tr key={c.id}>
                  <td>
                    <span className="table__name">{ICON("key", { size: 16 })}{c.name}</span>
                  </td>
                  <td><Badge intent="neutral">{c.provider}</Badge></td>
                  <td><Tag variant="cream">{ACCESS_LABEL[c.access]}</Tag></td>
                  <td><Badge intent={s.intent} dot>{s.label}</Badge></td>
                  <td>
                    <div className="secret">
                      <code>{on ? c.secretPreview : "•••••••••••"}</code>
                      <IconButton
                        size="sm"
                        label={on ? "Hide" : "Show"}
                        onClick={() => setRevealed((r) => ({ ...r, [c.id]: !r[c.id] }))}
                      >
                        {ICON(on ? "eyeOff" : "eye", { size: 15 })}
                      </IconButton>
                      <IconButton size="sm" label="Copy">{ICON("copy", { size: 15 })}</IconButton>
                    </div>
                  </td>
                  <td className="muted">{c.updated}</td>
                  <td>
                    <Menu
                      placement="right"
                      trigger={<IconButton size="sm" label="Credential actions">{ICON("more", { size: 16 })}</IconButton>}
                    >
                      <MenuItem icon={ICON("edit", { size: 15 })}>Edit</MenuItem>
                      <MenuItem icon={ICON("copy", { size: 15 })}>Duplicate</MenuItem>
                      <MenuSep />
                      <MenuItem icon={ICON("trash", { size: 15 })} danger>Delete</MenuItem>
                    </Menu>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ============================ Workspace Management ============================ */
function WorkspaceView() {
  const [tab, setTab] = useState("members");
  return (
    <div className="inner">
      <div style={{ marginBottom: 20 }}>
        <Tabs
          variant="pill"
          value={tab}
          onChange={setTab}
          items={[
            { value: "members", label: "Members" },
            { value: "keys", label: "API Keys" },
          ]}
        />
      </div>

      {tab === "members" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Card className="form-card">
            <div className="form-card__title" style={{ fontSize: "var(--text-md)" }}>Invite member</div>
            <div className="form-card__desc">We'll email an invitation link. The member joins once they accept while signed in with a matching verified email.</div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-end", marginTop: 16 }}>
              <div style={{ flex: 1 }}>
                <span className="field-label">Email</span>
                <Input placeholder="person@example.com" />
              </div>
              <div style={{ width: 150 }}>
                <span className="field-label">Role</span>
                <Input defaultValue="editor" />
              </div>
              <Button variant="primary" iconLeft={ICON("mail", { size: 15 })}>Send invite</Button>
            </div>
          </Card>

          <div>
            <div className="section-card__title" style={{ marginBottom: 10 }}>Pending invitations</div>
            <div className="table-wrap">
              <table className="table">
                <thead><tr><th>Email</th><th>Role</th><th>Expires</th><th style={{ width: 100 }} /></tr></thead>
                <tbody>
                  {D.invitations.map((i) => (
                    <tr key={i.id}>
                      <td>{i.email}</td>
                      <td style={{ textTransform: "capitalize" }}>{i.role}</td>
                      <td className="muted">{i.expires}</td>
                      <td style={{ textAlign: "right" }}><Button size="sm" variant="ghost">Revoke</Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="section-card__title" style={{ marginBottom: 10 }}>Members</div>
            <div className="table-wrap">
              <table className="table">
                <thead><tr><th>Name</th><th>Email / ID</th><th>Role</th><th>Joined</th><th style={{ width: 100 }} /></tr></thead>
                <tbody>
                  {D.members.map((m) => (
                    <tr key={m.id}>
                      <td><span className="table__name"><Avatar name={m.name} size="xs" />{m.name}</span></td>
                      <td>
                        <div>{m.email}</div>
                        <div className="mono">{m.id}</div>
                      </td>
                      <td style={{ textTransform: "capitalize" }}>{m.role}</td>
                      <td className="muted">{m.joined}</td>
                      <td style={{ textAlign: "right" }}>
                        {!m.self && <Button size="sm" variant="ghost">Remove</Button>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="toolbar" style={{ marginBottom: 12 }}>
            <div className="form-card__desc" style={{ marginTop: 0 }}>Service tokens authenticate the CLI and CI against this workspace.</div>
            <div className="toolbar__spacer" />
            <Button variant="secondary" size="sm" iconLeft={ICON("plus", { size: 15 })}>Create token</Button>
          </div>
          <div className="table-wrap">
            <table className="table">
              <thead><tr><th>Name</th><th>Token</th><th>Created</th><th>Last used</th><th style={{ width: 100 }} /></tr></thead>
              <tbody>
                {D.apiKeys.map((k) => (
                  <tr key={k.id}>
                    <td><span className="table__name">{ICON("key", { size: 16 })}{k.name}</span></td>
                    <td className="mono">{k.prefix}</td>
                    <td className="muted">{k.created}</td>
                    <td className="muted">{k.lastUsed}</td>
                    <td style={{ textAlign: "right" }}><Button size="sm" variant="ghost">Revoke</Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================ Settings ============================ */
function SettingsView({ theme, setTheme }) {
  const themes = [
    { id: "light", label: "Light", icon: "sun" },
    { id: "dark", label: "Dark", icon: "moon" },
    { id: "system", label: "System", icon: "monitor" },
  ];
  return (
    <div className="inner--narrow">
      <Card className="form-card">
        <div className="form-card__title">Theme</div>
        <div className="form-card__desc">Choose how the application should look in light, dark, or system mode.</div>
        <div style={{ marginTop: 18 }}>
          <div className="seg">
            {themes.map((t) => (
              <button key={t.id} className="seg__btn" data-active={theme === t.id} onClick={() => setTheme(t.id)}>
                {ICON(t.icon, { size: 16 })} {t.label}
              </button>
            ))}
          </div>
        </div>
      </Card>

      <Card className="form-card">
        <div className="form-card__title">Preferences</div>
        <div className="form-card__desc">Defaults applied across your colleagues and runs.</div>
        <div className="form-card__body">
          <div className="pref-row">
            <div className="pref-row__txt">
              <b>Run notifications</b>
              <span>Email me when a colleague's run fails.</span>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="divider" />
          <div className="pref-row">
            <div className="pref-row__txt">
              <b>Show candidate updates</b>
              <span>Surface new candidate versions on colleague badges.</span>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="divider" />
          <div className="pref-row">
            <div className="pref-row__txt">
              <b>Compact grid</b>
              <span>Denser colleague badges on the AI Colleagues page.</span>
            </div>
            <Switch />
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ============================ Profile ============================ */
function ProfileView() {
  return (
    <div className="inner--narrow">
      <Card className="form-card">
        <div className="form-card__title">Profile information</div>
        <div className="form-card__desc">Update your account profile information and email address.</div>
        <div className="form-card__body">
          <div className="profile-hero">
            <span className="profile-hero__avatar">{D.user.initials}</span>
            <div>
              <div style={{ fontWeight: 600, color: "var(--text-strong)", fontSize: "var(--text-md)" }}>{D.user.name}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "6px 0" }}>
                <Badge intent="brand-soft">{D.user.role}</Badge>
                <span className="muted" style={{ fontSize: 13 }}>Member since Jan 2026</span>
              </div>
              <Button size="sm" variant="secondary">Change avatar</Button>
            </div>
          </div>
          <div className="divider" />
          <div className="form-row">
            <div>
              <span className="field-label">Name</span>
              <Input defaultValue={D.user.name} />
            </div>
            <div>
              <span className="field-label">Email</span>
              <Input defaultValue={D.user.email} />
            </div>
          </div>
          <div>
            <span className="field-label">Bio</span>
            <textarea className="textarea" placeholder="Write a short bio about yourself" />
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <Button variant="primary">Save changes</Button>
        </div>
      </Card>
    </div>
  );
}

/* ============================ Feedback & issues ============================ */
function FeedbackView() {
  return (
    <div className="inner--narrow">
      <div className="empty">
        <span className="empty__icon">{ICON("github", { size: 30 })}</span>
        <div className="h-title" style={{ fontSize: "var(--text-xl)", marginTop: 0 }}>Feedback &amp; issues</div>
        <p className="h-desc" style={{ textAlign: "center", margin: "8px auto 20px" }}>
          Found a bug or have an idea for your AI colleagues? Open an issue on GitHub and the Orcheo team will take a look.
        </p>
        <Button variant="primary" iconLeft={ICON("github", { size: 16 })} iconRight={ICON("externalLink", { size: 14 })}>
          Open GitHub issues
        </Button>
      </div>
    </div>
  );
}

/* ============================ Editor (canvas + run) ============================ */
const STEP_STYLE = {
  done: { bg: "var(--intent-success-bg)", fg: "var(--green-600)" },
  running: { bg: "var(--orange-100)", fg: "var(--orange-700)" },
  idle: { bg: "var(--ink-100)", fg: "var(--text-subtle)" },
  error: { bg: "var(--intent-danger-bg)", fg: "var(--red-600)" },
};
function EditorView({ colleague, running, onRun, showRun, back }) {
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

  if (showRun) {
    const r = D.run;
    return (
      <div className="content">
        <div className="inner--narrow">
          <button className="back" onClick={back}>{ICON("arrowLeft", { size: 16 })} AI Colleagues</button>
          <div className="h-eyebrow">Run · {r.id}</div>
          <div className="h-title" style={{ fontSize: "var(--text-2xl)" }}>{colleague.name}</div>
          <div style={{ display: "flex", gap: 16, marginTop: 12, alignItems: "center", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)" }}>
            <Badge intent="info" dot>running</Badge>
            <span>{r.started}</span><span>·</span><span>{r.duration}</span>
          </div>
          <Card variant="flat" style={{ marginTop: 16 }}>
            <div className="run-list" style={{ padding: "4px 8px" }}>
              {r.steps.map((s, i) => {
                const stStyle = STEP_STYLE[s.status];
                const last = i === r.steps.length - 1;
                return (
                  <div className="run-step" key={s.id}>
                    <div className="run-step__rail">
                      <div className="run-step__dot" style={{ background: stStyle.bg, color: stStyle.fg }}>
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
      </div>
    );
  }

  return (
    <div className="content content--canvas">
      <div className="canvas">
        <div className="canvas__toolbar">
          <button className="back" style={{ margin: 0 }} onClick={back}>{ICON("arrowLeft", { size: 16 })} Colleagues</button>
          <div className="canvas__chip">{ICON("layers", { size: 16, style: { color: "var(--orange-600)" } })}<b style={{ fontWeight: 500 }}>{colleague.name}</b></div>
          <div className="canvas__chip" style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>{c.nodes.length} nodes · 5 connections</div>
          <div style={{ flex: 1 }} />
          <Button variant="secondary" size="sm" iconLeft={ICON("plus", { size: 16 })}>Add node</Button>
          <Button variant="primary" size="sm" loading={running} iconLeft={running ? null : ICON("play", { size: 15 })} onClick={onRun}>{running ? "Running" : "Run"}</Button>
        </div>
        <div className="canvas__inner">
          <svg className="canvas__svg" viewBox="0 0 1080 440">
            {c.edges.map(([a, b], i) => {
              const upstream = pos[a].status === "done";
              return <path key={i} d={edgePath(a, b)} fill="none" stroke={upstream ? "var(--orange-400)" : "var(--ink-300)"} strokeWidth="2.5" strokeDasharray={upstream ? "0" : "5 5"} />;
            })}
          </svg>
          {c.nodes.map((n) => (
            <div key={n.id} className="canvas__node" style={{ left: n.x, top: n.y, width: NW }} onClick={() => setSel(n.id)}>
              <NodeChip kind={n.kind} title={n.title} meta={n.meta} status={running ? n.status : (n.status === "running" ? "idle" : n.status)} active={running && n.status === "running"} selected={sel === n.id} icon={ICON(n.icon, { size: 17 })} style={{ width: "100%" }} />
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
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-body)", background: "var(--surface-sunken)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "12px 14px", lineHeight: 1.6 }}>{selNode.meta}</div>
          </div>
          {selNode.kind === "agent" && (
            <div>
              <span className="field-label">Instructions</span>
              <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>Summarize each paper in two sentences, rank by relevance to our research, and format the top 5 for Slack.</div>
            </div>
          )}
          <div style={{ marginTop: "auto" }}>
            <Button variant="secondary" size="sm" block>Configure</Button>
          </div>
        </div>
      </aside>
    </div>
  );
}

/* ============================ App shell ============================ */
function App() {
  const [view, setView] = useState("colleagues");
  const [collapsed, setCollapsed] = useState(false);
  const [activeColleague, setActiveColleague] = useState(null);
  const [activeApp, setActiveApp] = useState(null);
  const [running, setRunning] = useState(false);
  const [showRun, setShowRun] = useState(false);
  const [vaultOpen, setVaultOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [sysDark, setSysDark] = useState(
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false,
  );

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => setSysDark(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  const resolvedTheme = theme === "system" ? (sysDark ? "dark" : "light") : theme;

  const go = (v) => {
    setShowRun(false);
    setView(v);
  };
  const openColleague = (c) => { setActiveColleague(c); setShowRun(false); setView("editor"); };
  const openApp = (a) => { setActiveApp(a); setView("appDetail"); };
  const onRun = () => {
    setRunning(true);
    setTimeout(() => { setRunning(false); setShowRun(true); }, 1400);
  };

  let body = null, isCanvas = false;
  if (view === "colleagues") {
    body = <ColleaguesView openColleague={openColleague} />;
  } else if (view === "editor") {
    isCanvas = true;
    body = <EditorView colleague={activeColleague} running={running} onRun={onRun} showRun={showRun} back={() => go("colleagues")} />;
  } else if (view === "apps") {
    body = <AppsView openApp={openApp} />;
  } else if (view === "appDetail") {
    body = <AppDetailView app={activeApp} back={() => go("apps")} />;
  } else if (view === "workspace") {
    body = <WorkspaceView />;
  } else if (view === "settings") {
    body = <SettingsView theme={theme} setTheme={setTheme} />;
  } else if (view === "profile") {
    body = <ProfileView />;
  } else if (view === "feedback") {
    body = <FeedbackView />;
  }

  return (
    <div className="app" data-collapsed={collapsed} data-theme={resolvedTheme === "dark" ? "dark" : undefined}>
      <Sidebar
        view={view}
        go={go}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        openVault={() => setVaultOpen(true)}
        openAbout={() => setAboutOpen(true)}
      />
      <div className="main">
        {isCanvas ? body : <div className="content">{body}</div>}
      </div>
      <Modal open={vaultOpen} onClose={() => setVaultOpen(false)}>
        <VaultContent />
      </Modal>
      <Modal open={aboutOpen} onClose={() => setAboutOpen(false)}>
        <AboutContent />
      </Modal>
    </div>
  );
}

window.OrcheoApp = App;
