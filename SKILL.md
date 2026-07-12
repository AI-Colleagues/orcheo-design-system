---
name: orcheo-design
description: Use this skill to generate well-branded interfaces and assets for Orcheo and AI Colleagues (AIC), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create
static HTML files for the user to view. If working on production code, you can copy assets and read
the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or
design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.

## What's here
- `readme.md` — the full design guide: brand context, content fundamentals, visual foundations,
  iconography, and a file index. **Read this first.**
- `styles.css` — single entry point; link it to inherit all tokens, fonts, and base styles.
- `tokens/` — color, typography, spacing, elevation, and font CSS (all `@import`ed by `styles.css`).
- `assets/` — Orcheo product icon and AI Colleagues marks (ink, white, on-transparent variants).
- `components/` — React UI primitives (Button, IconButton, Input, Select, Checkbox, Switch, Card,
  Badge, Tag, Avatar, Tabs, Tooltip, Dialog, Toast, and the brand-specific NodeChip). Each has a
  `.jsx`, a `.d.ts` props contract, and a `.prompt.md` usage note.
- `ui_kits/orcheo-app/` — interactive recreation of the Orcheo workflow app.
- `ui_kits/aic-site/` — the AI Colleagues marketing site.
- `templates/orcheo-deck/` — a branded 16:9 slide-deck template.

## Quick rules (see readme.md for the full version)
- **Two brands:** ink/black + restraint for AI Colleagues corporate; orange + warmth for the Orcheo product.
- **Color:** Orcheo orange `#f87825`, ink `#0e0e0c`, parchment cream `#f6f5d4`, circuit tan `#e0c090`,
  plus a warm (never cool) neutral ramp. Use semantic aliases (`--surface-card`, `--text-body`,
  `--action-primary`, …).
- **Type:** Space Grotesk (display), IBM Plex Sans (UI/body), IBM Plex Mono (IDs, logs, eyebrows).
- **Voice:** sentence case, verb-first, warm-but-technical, no emoji.
- **Motif:** nodes, connectors, and a conducting hub (the orchestration ring).
- **Icons:** Lucide stroke set.
