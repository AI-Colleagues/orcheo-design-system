# Orcheo app — UI kit

Recreation of the Orcheo product shell, aligned with the real Studio in `apps/studio/src`. The chrome
lives in a **collapsible left sidebar**; every product sub-page is re-composed from the design-system
primitives (Button, IconButton, Badge, NodeChip, Tabs, Avatar, Card, Tag, Switch, Input).

## Sidebar
- **AI Colleagues** — the landing area (AI Teams / Starred / Candidates tabs, Upload, colleague badges).
- **Apps** — hosted web apps: upload / export / delete / publish / unpublish.
- **Credential Vault** — opens the vault **popup** over the current page (see below).
- **Feedback & issues** — opens GitHub.
- **User profile menu** (bottom) — Profile, Settings, Workspace Management, a second-order
  **workspace switcher** submenu (the selectable workspaces + "Create workspace"), and Log out.
- A collapse toggle hides the sidebar completely; hovering the left edge peeks the full
  (labeled) sidebar back in as an overlay without disturbing the page layout.

There is **no top bar** — each page opens directly into its content.

## Sub-pages
- **AI Colleagues** — team-grouped, collapsible sections of colleague badges (avatar, `@handle`,
  version, subtitle, description, star / actions); Candidates tab shows onboardable candidates grouped
  to mirror the colleague-candidates repository, each with an **Onboard** button.
- **Colleague editor** — click a colleague to open its orchestration canvas (trigger → tool → agent →
  tool), inspector, and **Run** → run timeline.
- **Apps** — app cards with alias (`<alias>.beta.orcheo.cloud`), visibility, state and health badges;
  an app detail view with deployment history (roll back), workflow bindings, and data collections.
- **Credential Vault** — a popup (openable from the sidebar on any page): searchable table with masked
  secrets (reveal / copy) and row actions.
- **Workspace Management** — Members (invite, pending invitations, role table) and API Keys.
- **Settings** — a working light / dark / system theme toggle (applied via `data-theme` on the app root)
  + preference switches.
- **Profile** — profile information form.

## Files
- `kit.css` — layout/chrome only. Component look comes from the DS.
- `app.jsx` — the shell + all views. Exposes `window.OrcheoApp`.
- `icons.jsx` — Lucide-style stroke icons. Exposes `window.Icons`.
- `data.js` — fake workspaces / colleagues / candidates / apps / credentials / members / run. Exposes `window.OrcheoData`.

## Notes
- Cosmetic recreation: navigation and the run animation are faked; there is no backend.
- Loaded by `stories/ui-kits/OrcheoApp.stories.jsx` ("UI Kits/Orcheo App").
