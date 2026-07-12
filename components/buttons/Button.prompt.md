Primary action control — use for any clickable command; lead labels with a verb in sentence case ("Run workflow", "Connect a tool").

```jsx
<Button variant="primary" size="md" onClick={run}>Run workflow</Button>
<Button variant="secondary" iconLeft={<PlusIcon/>}>New workflow</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="danger" loading>Deleting…</Button>
```

Variants: `primary` (orange, the default CTA), `secondary` (white + border), `ghost` (transparent, for low-emphasis), `danger` (warm red, destructive), `inverse` (ink, for use on cream/light feature blocks). Sizes `sm | md | lg`. `block` stretches full width. `loading` swaps in a spinner and disables. Pass `iconLeft` / `iconRight` a Lucide SVG node.
