Feedback components: Tooltip (hover hint), Dialog (modal), Toast/Toaster (notifications).

```jsx
<Tooltip label="Run this workflow now" side="top"><IconButton label="Run"><PlayIcon/></IconButton></Tooltip>

<Dialog open={open} onClose={close} title="Delete workflow?"
  description="This removes the workflow and its run history. This can't be undone."
  footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button variant="danger">Delete</Button></>}>
  You have 24 stored runs that will also be deleted.
</Dialog>

<Toaster>
  <Toast intent="success" title="Workflow saved" onClose={dismiss}>Daily research digest is live.</Toast>
</Toaster>
```
