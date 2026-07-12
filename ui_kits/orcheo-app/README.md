# Orcheo app — UI kit

Hi-fi recreation of the **Orcheo** product: an agentic workflow orchestration app. Composes the
design-system component primitives (Button, IconButton, Badge, NodeChip, Tabs, Avatar, Card, Tag,
Dialog) — it does not re-implement them.

## Run it
Open `index.html`. It loads `styles.css`, the compiled `_ds_bundle.js`, `data.js`, the icon set,
and `app.jsx`, then mounts an interactive shell.

## Files
- `index.html` — entry; loads everything and mounts `window.OrcheoApp`.
- `kit.css` — layout/chrome only (sidebar, topbar, canvas, timeline). Component look comes from the DS.
- `app.jsx` — the shell + all views (Sidebar, Topbar, WorkflowsView, CanvasView, RunView, ConnectorsView).
- `icons.jsx` — Lucide-style stroke icons as React components (the system's icon set).
- `data.js` — fake workflows / nodes / run steps / connectors.

## Screens & interactions
- **Workflows** (landing) — grid of workflow cards with status badges; tabs (All / Mine); "New workflow".
- **Canvas** — click a workflow card to open its orchestration canvas: trigger → tool → agent → tool
  nodes on a dotted grid, connected by curved wires, with a right-hand inspector. Hit **Run** to
  watch the agent node enter its active/running state, then land on the run timeline.
- **Runs** — a run's step-by-step timeline with per-step status and timings.
- **Connectors** — connected tools with status.

## Notes
- This is a cosmetic recreation: navigation and the run animation are faked; there is no backend.
- Reflects the brand's warm circuit-orchestration language — ink sidebar, orange active states,
  the NodeChip as the canvas atom.
