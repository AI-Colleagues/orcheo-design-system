Tab switcher. `line` (underline) for page-level navigation, `pill` (segmented) for compact toggles.

```jsx
<Tabs variant="line" defaultValue="runs" items={[
  { value: "overview", label: "Overview" },
  { value: "runs", label: "Runs", count: 24 },
  { value: "settings", label: "Settings" },
]} onChange={setTab} />

<Tabs variant="pill" defaultValue="all" items={[
  { value: "all", label: "All" }, { value: "mine", label: "Mine" },
]} />
```
