// Fake data for the Orcheo app UI kit. Modeled on the real Studio data:
// AI colleagues grouped into teams, onboardable candidates, hosted apps,
// vault credentials, workspace members / API keys, plus a colleague's
// orchestration canvas + run timeline for the editor sub-page.
window.OrcheoData = {
  user: {
    name: "Ada Lovelace",
    email: "ada@ai-colleagues.dev",
    role: "Workspace admin",
    initials: "AL",
  },

  versions: {
    studio: "0.24.7",
    backend: "0.38.4",
    core: "0.44.4",
  },

  workspaces: [
    { id: "ws_ai", name: "AI Colleagues", slug: "ai-colleagues", role: "admin", current: true },
    { id: "ws_acme", name: "Acme Labs", slug: "acme", role: "editor" },
    { id: "ws_ada", name: "Ada's workspace", slug: "ada", role: "owner" },
  ],

  // AI Colleagues, grouped into teams (mirrors the gallery's team sections).
  teams: [
    {
      id: "t_research",
      name: "Research desk",
      colleagues: [
        { id: "c_researcher", name: "Researcher", handle: "researcher", version: "1.4.0", emoji: "🔬", tint: "#f0f7ff", subtitle: "arXiv digests", description: "Summarizes new arXiv papers each morning and posts the top five to Slack.", starred: true },
        { id: "c_librarian", name: "Librarian", handle: "librarian", version: "0.9.2", emoji: "📚", tint: "#fff6ec", subtitle: "Knowledge base", description: "Keeps the team's research library indexed and answers questions from it." },
      ],
    },
    {
      id: "t_support",
      name: "Support pod",
      colleagues: [
        { id: "c_triage", name: "Triage", handle: "triage", version: "2.1.0", emoji: "🎧", tint: "#f3fff3", subtitle: "Ticket routing", description: "Classifies inbound tickets, drafts replies, and escalates to on-call.", starred: true },
        { id: "c_scribe", name: "Scribe", handle: "scribe", version: "1.0.0", emoji: "✍️", tint: "#fbf3ff", subtitle: "Call notes", description: "Turns support calls into structured notes and follow-up tasks." },
      ],
    },
    {
      id: "__none__",
      name: "Ungrouped",
      colleagues: [
        { id: "c_reconciler", name: "Reconciler", handle: "reconciler", version: "1.2.3", emoji: "🧾", tint: "#fff7f0", subtitle: "Invoices", description: "Matches invoices against POs and flags discrepancies for review.", error: true },
      ],
    },
  ],

  // Onboardable candidates from the colleague-candidates repository. Some are
  // grouped (one level under `colleagues/`), some are independent.
  candidateGroups: [
    {
      slug: "news_desk",
      name: "News desk",
      candidates: [
        { id: "news_desk/feed_curator", name: "Feed Curator", handle: "feed-curator", version: "1.1.0", emoji: "🗞️", tint: "#f0f7ff", subtitle: "RSS + web", description: "Curates a morning news brief from your configured feeds and sources." },
        { id: "news_desk/fact_checker", name: "Fact Checker", handle: "fact-checker", version: "0.4.0", emoji: "🔎", tint: "#fff6ec", subtitle: "Verification", description: "Cross-checks claims against primary sources and rates confidence." },
      ],
    },
    {
      slug: "growth",
      name: "Growth",
      candidates: [
        { id: "growth/lead_enricher", name: "Lead Enricher", handle: "lead-enricher", version: "2.0.1", emoji: "📈", tint: "#f3fff3", subtitle: "CRM", description: "Enriches new CRM leads with firmographics and a fit score." },
      ],
    },
  ],
  candidateIndependents: [
    { id: "standup", name: "Standup Bot", handle: "standup-bot", version: "1.3.0", emoji: "☀️", tint: "#fbf3ff", subtitle: "Async standup", description: "Collects updates from GitHub + Linear and posts a team digest." },
  ],

  // Hosted web apps (the Apps area).
  apps: [
    {
      id: "app_portal",
      name: "Research Portal",
      alias: "research-portal",
      visibility: "private",
      state: "published",
      health: "healthy",
      updated: "2h ago",
      activeDeployment: "dpl_7c2",
      description: "Internal portal over the Research desk colleagues.",
      deployments: [
        { id: "dpl_7c2", version: "v14", digest: "sha256:9f3a…c1", size: "2.4 MB", files: 38, status: "valid", active: true, created: "2h ago" },
        { id: "dpl_7b0", version: "v13", digest: "sha256:41ba…e8", size: "2.3 MB", files: 37, status: "valid", active: false, created: "yesterday" },
        { id: "dpl_79f", version: "v12", digest: "sha256:0c5d…7a", size: "2.3 MB", files: 37, status: "valid", active: false, created: "3d ago" },
      ],
      bindings: [
        { name: "search", workflow: "Researcher", version: "1.4.0", access: "authenticated", rate: "60/min" },
        { name: "summarize", workflow: "Librarian", version: "0.9.2", access: "authenticated", rate: "30/min" },
      ],
      collections: [
        { name: "saved_reports", access: "user", read: "authenticated", write: "authenticated" },
        { name: "team_notes", access: "shared", read: "authenticated", write: "authenticated" },
      ],
    },
    {
      id: "app_status",
      name: "Status Page",
      alias: "status",
      visibility: "public",
      state: "published",
      health: "healthy",
      updated: "1d ago",
      activeDeployment: "dpl_5aa",
      description: "Public uptime + incident page.",
      deployments: [
        { id: "dpl_5aa", version: "v8", digest: "sha256:77ea…09", size: "512 KB", files: 12, status: "valid", active: true, created: "1d ago" },
        { id: "dpl_59c", version: "v7", digest: "sha256:2b1c…f4", size: "508 KB", files: 12, status: "valid", active: false, created: "1w ago" },
      ],
      bindings: [
        { name: "incidents", workflow: "Triage", version: "2.1.0", access: "anonymous", rate: "120/min" },
      ],
      collections: [
        { name: "subscribers", access: "shared", read: "authenticated", write: "anonymous" },
      ],
    },
    {
      id: "app_intake",
      name: "Customer Intake",
      alias: "intake",
      visibility: "private",
      state: "draft",
      health: "unknown",
      updated: "5m ago",
      activeDeployment: null,
      description: "Onboarding form that files tickets via Triage.",
      deployments: [
        { id: "dpl_31a", version: "v1", digest: "sha256:ab90…12", size: "740 KB", files: 19, status: "valid", active: false, created: "5m ago" },
      ],
      bindings: [],
      collections: [],
    },
    {
      id: "app_promo",
      name: "Launch Teaser",
      alias: "launch",
      visibility: "public",
      state: "suspended",
      health: "error",
      updated: "3d ago",
      activeDeployment: "dpl_22b",
      description: "Suspended by an operator pending review.",
      deployments: [
        { id: "dpl_22b", version: "v3", digest: "sha256:6d4e…aa", size: "1.1 MB", files: 24, status: "valid", active: true, created: "3d ago" },
      ],
      bindings: [],
      collections: [],
    },
  ],
  appsBaseDomain: "beta.orcheo.cloud",

  // Credential vault entries.
  credentials: [
    { id: "cr_slack", name: "Slack — Research", provider: "slack", access: "shared", status: "healthy", secretPreview: "xoxb-… 3f9a", updated: "2d ago" },
    { id: "cr_openai", name: "OpenAI (prod)", provider: "openai", access: "shared", status: "healthy", secretPreview: "sk-… 91c2", updated: "5d ago" },
    { id: "cr_pg", name: "Postgres read-replica", provider: "postgres", access: "scoped", status: "healthy", secretPreview: "post… 44de", updated: "1w ago" },
    { id: "cr_sf", name: "Salesforce", provider: "salesforce", access: "scoped", status: "unhealthy", secretPreview: "00D… expired", updated: "3w ago" },
    { id: "cr_zd", name: "Zendesk", provider: "zendesk", access: "shared", status: "unknown", secretPreview: "zd_… 7b10", updated: "1mo ago" },
  ],

  // Workspace management.
  members: [
    { id: "usr_ada", name: "Ada Lovelace", email: "ada@ai-colleagues.dev", role: "owner", joined: "Jan 3, 2026", self: true },
    { id: "usr_grace", name: "Grace Hopper", email: "grace@ai-colleagues.dev", role: "admin", joined: "Jan 8, 2026" },
    { id: "usr_alan", name: "Alan Turing", email: "alan@ai-colleagues.dev", role: "editor", joined: "Feb 1, 2026" },
    { id: "usr_kat", name: "Katherine Johnson", email: "kat@ai-colleagues.dev", role: "viewer", joined: "Mar 12, 2026" },
  ],
  invitations: [
    { id: "inv_1", email: "linus@example.com", role: "editor", expires: "in 6 days" },
    { id: "inv_2", email: "margaret@example.com", role: "viewer", expires: "in 2 days" },
  ],
  apiKeys: [
    { id: "key_ci", name: "CI deploy", prefix: "orc_live_7f…", created: "Jan 20, 2026", lastUsed: "2h ago" },
    { id: "key_local", name: "Local dev", prefix: "orc_live_a2…", created: "Feb 14, 2026", lastUsed: "yesterday" },
  ],

  // Orchestration canvas for the "Researcher" colleague (editor sub-page).
  canvas: {
    name: "Researcher",
    nodes: [
      { id: "n1", kind: "trigger", title: "Schedule", meta: "0 9 * * *", icon: "clock", x: 40, y: 150, status: "done" },
      { id: "n2", kind: "tool", title: "Fetch arXiv", meta: "cs.AI · 24h", icon: "globe", x: 280, y: 70, status: "done" },
      { id: "n3", kind: "tool", title: "Load library", meta: "postgres", icon: "database", x: 280, y: 230, status: "done" },
      { id: "n4", kind: "agent", title: "Researcher", meta: "claude-sonnet-4", icon: "bot", x: 540, y: 150, status: "running" },
      { id: "n5", kind: "tool", title: "Post to Slack", meta: "#research", icon: "message", x: 800, y: 150, status: "idle" },
    ],
    edges: [["n1", "n2"], ["n1", "n3"], ["n2", "n4"], ["n3", "n4"], ["n4", "n5"]],
  },
  run: {
    id: "run_8f3a91", workflow: "Researcher", started: "Today · 09:00:04 UTC", duration: "12.4s",
    steps: [
      { id: "s1", node: "Schedule", kind: "trigger", status: "done", ms: 2, detail: "Triggered by cron 0 9 * * *" },
      { id: "s2", node: "Fetch arXiv", kind: "tool", status: "done", ms: 1840, detail: "Pulled 38 new papers from cs.AI" },
      { id: "s3", node: "Load library", kind: "tool", status: "done", ms: 210, detail: "Loaded 1,204 prior summaries" },
      { id: "s4", node: "Researcher", kind: "agent", status: "running", ms: null, detail: "Summarizing 38 papers · 12 of 38 done" },
      { id: "s5", node: "Post to Slack", kind: "tool", status: "idle", ms: null, detail: "Waiting for upstream step" },
    ],
  },
};
