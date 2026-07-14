import React from "react";
import "./ds-globals.js";
import "../../ui_kits/orcheo-app/kit.css";
import "../../ui_kits/orcheo-app/icons.jsx"; // sets window.Icons
import "../../ui_kits/orcheo-app/data.js"; // sets window.OrcheoData
import "../../ui_kits/orcheo-app/app.jsx"; // sets window.OrcheoApp

const OrcheoApp = window.OrcheoApp;

export default {
  title: "UI Kits/Orcheo App",
  component: OrcheoApp,
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    docs: {
      description: {
        component:
          "Hi-fi recreation of the Orcheo product, composed from the design-system primitives " +
          "(Button, IconButton, Badge, NodeChip, Tabs, Avatar, Card, Tag, Dialog). " +
          "It's interactive: click a workflow card to open its orchestration canvas, " +
          "hit Run to watch the agent node execute and land on the run timeline, " +
          "and use the sidebar to reach Runs and Connectors. " +
          "Source lives in `ui_kits/orcheo-app/` — this story runs it unmodified.",
      },
      story: { inline: false, iframeHeight: 720 },
    },
  },
};

export const App = {
  render: () => <OrcheoApp />,
};
