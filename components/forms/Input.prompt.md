Form controls — text input, textarea, select, checkbox, switch. All take optional `label`/`hint`/`error`. Sentence-case labels.

```jsx
<Input label="Workflow name" placeholder="e.g. Daily research digest" />
<Input label="API key" mono icon={<KeyIcon/>} error="That key was rejected." />
<Textarea label="System prompt" placeholder="Describe what this agent should do…" />
<Select label="Model" options={["GPT-4o","Claude Sonnet","Llama 3"]} />
<Checkbox label="Run on a schedule" defaultChecked />
<Switch label="Enabled" defaultChecked />
```

Checked/on states use brand orange. Errors turn the control red and show the message in place of the hint.
