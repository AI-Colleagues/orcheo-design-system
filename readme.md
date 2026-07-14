# Orcheo Design System

The design system for **AI Colleagues (AIC)** and its flagship product **Orcheo**, an agentic
workflow orchestration platform. This repository defines the brand's visual foundations,
reusable UI components, and full-screen product recreations so that design agents and engineers
can produce on-brand interfaces, marketing pages, decks, and prototypes.

> **Two brands, one system.** AI Colleagues is the parent company (corporate, ink-black, the
> circuit-brain "C" mark). Orcheo is the product (warm orange, the orchestration-ring icon).
> They share type, spacing, motion, and components; they differ in dominant color and voice.
> Use **ink/black + restraint** for AIC corporate surfaces, **orange + warmth** for Orcheo product.

---

## Sources

No codebase, Figma file, or existing design definition was provided. The system was derived from
two brand marks supplied as raster assets:

- `uploads/orcheo-round-corner.png` — the Orcheo product app icon (orange squircle, orchestration ring).
- `uploads/c-aic-recraft-2026-02-21.png` — the AI Colleagues corporate mark (circuit-brain inside a "C").

All colors below were **sampled directly** from these marks. Typography is a substitution (see
*Visual Foundations → Type*) — flag for the brand owner. If AIC has a real product codebase or
Figma library, attach it and this system should be reconciled against it.

---

## Company & product context

**AI Colleagues (AIC)** builds AI "colleagues" — agentic software that works alongside people.
**Orcheo** is its agentic workflow orchestration platform: users compose, connect, and run
networks of agents and tools as orchestrated workflows. The product's central metaphor —
visible in its logo — is an **orchestration ring**: many nodes (agents, tools, triggers) wired
together by connector lines, radiating from a central hub that conducts them.

That metaphor drives the visual language: **nodes, connectors, hubs, and circuitry** are the
recurring motifs. Surfaces feel like a warm technical workspace — engineered but not cold,
approachable but precise.

---

## Content fundamentals

How Orcheo / AIC writes.

- **Voice:** Confident, plain-spoken, and technical-but-warm. We sound like a sharp colleague,
  not a hype machine. We explain orchestration concepts clearly without dumbing them down.
- **Person:** Address the user as **"you."** Refer to the product as **"Orcheo"** or **"we"**
  for the company. Agents in-product are referred to by their given names/roles ("the Researcher
  agent," "your reviewer").
- **Casing:** **Sentence case everywhere** — buttons, headings, menus, nav. Never Title Case UI.
  Product/feature names are capitalized (Orcheo, Workflows, Runs, Connectors). Reserve ALL-CAPS
  for the mono *eyebrow/overline* style only.
- **Tone examples:**
  - Hero: *"Orchestrate your agents. Ship the work."*
  - Empty state: *"No runs yet. Build a workflow and hit Run to watch it work."*
  - Button labels: *"New workflow," "Run," "Connect a tool," "View run."*
  - Error: *"That step couldn't reach the API. Check the connection and retry."* (specific, blameless, actionable.)
- **Length:** Short. Lead with the verb. One idea per sentence. Numbers are concrete
  ("3 agents, 12 steps"), never vague ("many integrations").
- **Jargon:** Use the real vocabulary — *workflow, run, node, agent, connector, trigger, step,
  orchestration* — consistently. Don't invent synonyms.
- **Emoji:** **Not used** in product or marketing copy. The brand expresses warmth through color
  and the circuit motif, not emoji. (Status is shown with color + iconography instead.)
- **Punctuation:** Minimal exclamation. No trailing ellipses in CTAs. Oxford comma on.

---

## Visual foundations

### Color
A **warm circuit-orchestration palette**, all sampled from the marks.

- **Orcheo Orange `#f87825`** — the signature. Primary actions, active workflow nodes, brand
  fills, links (darkened to `--orange-700` on light text). Energetic but not neon; it reads as
  "warm signal," not "alert red."
- **AIC Ink `#0e0e0c`** — corporate anchor and primary text. Dominant on AIC corporate surfaces;
  used as text + dark panels in Orcheo product.
- **Parchment Cream `#f6f5d4`** — the warm field from inside the orchestration ring. Used for
  feature sections and warm callouts, sparingly, to evoke "the workspace canvas."
- **Circuit Tan `#e0c090`** — the connector-line color. Decorative rules, dividers, node-wire
  illustration, subtle borders on cream.
- **Neutrals** are a **warm gray ramp** (`--ink-50…950`) tinted toward parchment — never cool/blue
  gray. This keeps screens feeling warm even when mostly neutral.
- **Semantics** are hue-harmonized to stay warm: forest green success, ochre-amber warning,
  warm red danger, muted slate-blue info. Never use pure saturated web colors.

Use **semantic aliases** (`--surface-card`, `--text-body`, `--action-primary`, …) in product UI,
not raw ramp steps. Reach for ramp steps only when composing new semantic tokens.

### Dark theme
Dark mode is **first-class**: add `class="dark"` (or `data-theme="dark"`) to `<html>` and every
semantic alias flips — surfaces go warm ink (`--ink-950` page, `--ink-900` cards), text lightens,
links move to `--orange-300`, intent backgrounds become deep warm tints, and shadows gain weight.
Raw ramps never change, so **any UI written against the aliases is dark-ready for free**. Two
rules of dark: interactive orange **lightens** on hover (`--orange-400`), never darkens; and
surfaces stay warm-tinted — never slip into cool gray-blue.

### Type
- **Display — Space Grotesk** (bold/semibold, tight tracking): headlines, hero, big numbers. Its
  geometric quirk gives the brand personality and pairs with the circuit motif. H1 is bold;
  h2–h6 are **semibold** so section headings hold their own against body text.
- **Sans — IBM Plex Sans:** all UI and body. Engineered, humanist, legible at small sizes.
- **Mono — IBM Plex Mono:** node IDs, agent names, run logs, code, and the ALL-CAPS **eyebrow**
  overline style (`.eyebrow`). Mono is a load-bearing brand signal here — it says "this is an
  engineering tool" — so use it deliberately, not just for code.
- Scale is a ~1.25 ratio (`--text-2xs`…`--text-6xl`). Body in product is `--text-base` (15px).
  Headlines balance-wrap; body pretty-wraps.
- **⚠ Substitution flag:** No brand fonts were supplied. Space Grotesk + IBM Plex are Google Fonts
  chosen to fit. Confirm or replace with licensed brand fonts.

### Spacing & layout
- **4px base grid** (`--space-*`). Controls use `--pad-control`; cards `--pad-card`; marketing
  sections `--pad-section`. Page gutters `--gutter-page`.
- Containers: prose 680px, content 1080px, wide 1320px.
- Layouts are **calm and aligned** — generous whitespace, clear columns. Product screens use a
  fixed left sidebar + top bar shell; the workflow canvas is a sunken well.

### Shape & corners
- Radii lean **soft** (the app icon is a generous squircle). Controls `--radius-md` (10px), cards
  `--radius-lg` (14px), panels/modals `--radius-xl` (20px), hero/feature blocks `--radius-2xl`
  (28px, echoing the icon). Pills for tags/avatars/switches.

### Elevation & borders
- **Warm-tinted shadows** (ink/brown alpha, never black-blue). Subtle and layered: `--shadow-sm`
  for cards at rest, `--shadow-md` on hover/raise, `--shadow-lg/xl` for popovers and modals.
- A dedicated **`--shadow-brand`** orange glow marks active workflow nodes / primary emphasis.
- Cards: white surface, `--radius-lg`, 1px `--border-subtle` *or* `--shadow-sm` (pick one, not
  both heavy). No colored-left-border cards. Borders are warm gray; decorative dividers use the
  dashed **circuit rule** (`.circuit-rule`).

### Backgrounds
- Default app/page background is warm off-white `--ink-50`. **No purple/blue gradients.**
- Warmth comes from cream feature sections and the **circuit-line motif** — thin tan node-and-wire
  patterns, used decoratively at low contrast (never busy). Full-bleed imagery is warm-toned.
- Brand utilities (in `tokens/base.css`): `.circuit-rule` (dashed tan divider), `.dot-grid`
  (warm dot lattice — the workspace-canvas motif, theme-aware via `--dot-grid-color`),
  `.eyebrow-pill` (mono overline in a soft brand pill), and `.glass` (translucent sticky-bar
  surface via `--surface-glass` + backdrop blur).

### Motion
- Purposeful and quick. `--duration-fast` (120ms) for hovers, `--duration-base` (200ms) for most
  transitions, `--duration-slow` (320ms) for overlays/modals. Easing `--ease-standard`
  (cubic-bezier(.2,0,0,1)). Gentle settle (`--ease-emphasized`) for things that appear; **no big
  bounces.** Running workflows may show a calm pulse/flow along connectors; everything respects
  `prefers-reduced-motion`.

### Interaction states
- **Hover:** primary darkens one step (`--orange-600`) — on dark theme it *lightens* instead
  (`--orange-400`); neutral/ghost gains a faint warm tint (`--surface-hover`). Links darken to
  `--orange-800` (lighten to `--orange-200` on dark).
- **Active/press:** darkens another step (`--orange-700`); subtle 1px translate or scale(.98), no
  big squash. Neutral press uses `--surface-active`.
- **Focus:** always-visible warm focus ring (`--ring-focus`) — a 2px surface-colored gap plus a
  2px `--focus-ring` orange ring; never removed.
- **Buttons:** labels are **semibold**; primary carries a faint inset top sheen so the orange
  doesn't read flat.
- **Disabled:** reduced contrast via `--text-subtle` + muted surface; no opacity-only disabling on
  text.

### Transparency & blur
- Used sparingly. Sticky top bars use a translucent warm-white with backdrop blur. Modal scrims
  are ink at ~50% alpha. Avoid frosted glass as decoration.

---

## Iconography

- **System:** **Lucide** (https://lucide.dev) — clean, consistent ~1.75px stroke icons with
  rounded joins. This matches the engineered-but-warm tone and the thin connector-line motif of
  the brand. Default size 20px in UI, 16px inline, stroke `currentColor`.
  - **⚠ Substitution flag:** No icon set shipped with the source assets. Lucide is the chosen
    substitute. If AIC uses a different set, swap the CDN link.
  - Load from CDN: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`.
- **Brand marks live in `assets/`** (see index). Use the orchestration-node / circuit metaphor for
  custom spot illustration rather than generic stock icons where possible.
- **Emoji:** never used as iconography. **Unicode glyphs:** avoid as icons; use Lucide.
- Status/intent is shown with icon + semantic color (check = success, alert-triangle = warning,
  x-circle = danger, info = info).

---

## Storybook

The component catalogue is browsable as a Storybook (`stories/` + `.storybook/`):

```sh
npm install
npm run storybook        # dev server on http://localhost:6006
npm run build-storybook  # static build in storybook-static/
```

Stories cover the full core component set, foundation pages (Colors, Typography,
Spacing & Shape, Elevation), and both UI kits as full-screen interactive stories
(`stories/ui-kits/` shims the kits' browser globals so `ui_kits/` source runs unmodified).
Global CSS (`styles.css`) is loaded in `.storybook/preview.js`, and the toolbar's
background switcher offers the brand surfaces (page, card, cream, ink).

## Index / manifest

Root files:
- `styles.css` — global entry point (consumers link this). `@import` manifest only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `base.css`.
- `assets/` — brand marks (see below).
- `readme.md` — this file. `SKILL.md` — Agent-Skills wrapper.

Assets (`assets/`):
- `orcheo-icon.png` — Orcheo product app icon (orange squircle orchestration ring).
- `aic-mark.png` — AI Colleagues corporate mark, black on white.
- `aic-mark-ink.png` — AIC mark, ink on transparent (for light surfaces).
- `aic-mark-white.png` — AIC mark, white on transparent (for ink/orange surfaces).

Components (`components/…`): see the Design System tab. Core set — Button, IconButton, Input,
Textarea, Select, Checkbox, Switch, Badge, Tag, Avatar, Card, Tabs, Tooltip, Dialog, Toast,
NodeChip (brand-specific workflow node).

UI kits (`ui_kits/…`):
- `orcheo-app/` — the Orcheo product (workflows, orchestration canvas, run timeline, connectors).
- `aic-site/` — the AI Colleagues marketing website (hero, features, CTA, footer).

Templates (`templates/…`):
- `orcheo-deck/` — a branded 16:9 slide-deck template (title, section, content, stat layouts),
  authored as a Design Component. This is the reusable "starting point" consuming projects pick up.

Foundation specimen cards: scattered `*.card.html` files, tagged `@dsCard`, rendered in the
Design System tab under Type / Colors / Spacing / Brand / Components / Orcheo App / AIC Site.

`SKILL.md`: makes this folder usable as a downloadable Agent Skill.
