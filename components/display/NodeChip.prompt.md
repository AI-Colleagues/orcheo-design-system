The Orcheo workflow node — the atom of the orchestration canvas. Represents a trigger, agent, or tool with a live status dot.

```jsx
<NodeChip kind="trigger" title="Schedule" meta="0 9 * * *" status="done" icon={<ClockIcon/>} />
<NodeChip kind="agent" title="Researcher" meta="claude-sonnet-4" status="running" active icon={<BotIcon/>} />
<NodeChip kind="tool" title="Post to Slack" meta="#research" status="idle" icon={<SlackIcon/>} />
```

`kind` sets the icon-tile color (trigger=cream, agent=ink, tool=blue). `status`: `idle | running | done | error` (running pulses). `active` adds the brand orange glow (executing); `selected` adds a focus ring (selected on canvas).
