// Fake data for the Orcheo app UI kit.
window.OrcheoData = {
  workflows: [
    {
      id: "wf_research", name: "Daily research digest", status: "healthy",
      desc: "Summarizes new arXiv papers and posts highlights to Slack each morning.",
      lastRun: "2m ago", runs: 142, schedule: "0 9 * * *", owner: "Ada Lovelace",
      nodeCount: 5, tags: ["claude-sonnet-4", "slack", "arxiv"],
    },
    {
      id: "wf_support", name: "Support triage", status: "running",
      desc: "Classifies inbound tickets, drafts replies, and routes escalations to on-call.",
      lastRun: "running", runs: 2841, schedule: "on webhook", owner: "Grace Hopper",
      nodeCount: 7, tags: ["claude-sonnet-4", "zendesk", "pagerduty"],
    },
    {
      id: "wf_invoices", name: "Invoice reconciliation", status: "warning",
      desc: "Matches incoming invoices against POs and flags discrepancies for review.",
      lastRun: "1h ago", runs: 318, schedule: "0 */6 * * *", owner: "Alan Turing",
      nodeCount: 6, tags: ["gpt-4o", "postgres", "email"],
    },
    {
      id: "wf_content", name: "Content repurposer", status: "healthy",
      desc: "Turns long-form posts into threads, newsletters, and video scripts.",
      lastRun: "yesterday", runs: 87, schedule: "manual", owner: "Ada Lovelace",
      nodeCount: 4, tags: ["claude-sonnet-4", "notion"],
    },
    {
      id: "wf_leads", name: "Lead enrichment", status: "error",
      desc: "Enriches new CRM leads with firmographics and a fit score.",
      lastRun: "failed 3h ago", runs: 506, schedule: "on webhook", owner: "Grace Hopper",
      nodeCount: 8, tags: ["gpt-4o", "clearbit", "salesforce"],
    },
    {
      id: "wf_standup", name: "Async standup", status: "healthy",
      desc: "Collects updates from GitHub + Linear and posts a team digest.",
      lastRun: "today", runs: 64, schedule: "0 16 * * 1-5", owner: "Alan Turing",
      nodeCount: 5, tags: ["claude-sonnet-4", "github", "linear"],
    },
  ],

  // Nodes for the canvas of "Daily research digest"
  canvas: {
    name: "Daily research digest",
    nodes: [
      { id: "n1", kind: "trigger", title: "Schedule", meta: "0 9 * * *", icon: "clock", x: 40, y: 150, status: "done" },
      { id: "n2", kind: "tool", title: "Fetch arXiv", meta: "cs.AI · 24h", icon: "globe", x: 280, y: 70, status: "done" },
      { id: "n3", kind: "tool", title: "Load library", meta: "postgres", icon: "database", x: 280, y: 230, status: "done" },
      { id: "n4", kind: "agent", title: "Researcher", meta: "claude-sonnet-4", icon: "bot", x: 540, y: 150, status: "running" },
      { id: "n5", kind: "tool", title: "Post to Slack", meta: "#research", icon: "message", x: 800, y: 150, status: "idle" },
    ],
    edges: [
      ["n1", "n2"], ["n1", "n3"], ["n2", "n4"], ["n3", "n4"], ["n4", "n5"],
    ],
  },

  // Steps for a run timeline
  run: {
    id: "run_8f3a91", workflow: "Daily research digest", started: "Today · 09:00:04 UTC",
    duration: "12.4s", status: "running",
    steps: [
      { id: "s1", node: "Schedule", kind: "trigger", status: "done", ms: 2, detail: "Triggered by cron 0 9 * * *" },
      { id: "s2", node: "Fetch arXiv", kind: "tool", status: "done", ms: 1840, detail: "Pulled 38 new papers from cs.AI" },
      { id: "s3", node: "Load library", kind: "tool", status: "done", ms: 210, detail: "Loaded 1,204 prior summaries" },
      { id: "s4", node: "Researcher", kind: "agent", status: "running", ms: null, detail: "Summarizing 38 papers · 12 of 38 done" },
      { id: "s5", node: "Post to Slack", kind: "tool", status: "idle", ms: null, detail: "Waiting for upstream step" },
    ],
  },

  connectors: [
    { name: "Slack", icon: "message", status: "connected", scope: "#research, #support" },
    { name: "Postgres", icon: "database", status: "connected", scope: "prod-read-replica" },
    { name: "GitHub", icon: "box", status: "connected", scope: "12 repos" },
    { name: "Salesforce", icon: "globe", status: "error", scope: "token expired" },
    { name: "Zendesk", icon: "message", status: "connected", scope: "support inbox" },
    { name: "PagerDuty", icon: "bell", status: "connected", scope: "on-call rotation" },
  ],

  user: { name: "Ada Lovelace", role: "Workspace admin" },
};
