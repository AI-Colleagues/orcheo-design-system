Display primitives. NodeChip is brand-specific (the Orcheo workflow node); Card/Badge/Tag/Avatar are general.

```jsx
<Card title="Daily research digest" subtitle="Runs at 09:00 UTC" footer={<Button size="sm">Open</Button>}>
  Summarizes new papers and posts to Slack.
</Card>
<Badge intent="success" dot>complete</Badge>
<Badge intent="warning" dot>rate limited</Badge>
<Tag variant="cream">claude-sonnet-4</Tag>
<Tag onRemove={() => {}}>slack</Tag>
<Avatar name="Ada Lovelace" size="md" />
<Avatar name="Researcher" agent />
<NodeChip kind="agent" title="Researcher" meta="claude-sonnet-4" status="running" active icon={<BotIcon/>} />
```

`NodeChip` kinds: `trigger | agent | tool` (sets icon color). `status` running pulses; `active` adds the orange glow; `selected` adds the focus ring.
