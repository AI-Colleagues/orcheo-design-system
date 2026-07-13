import React from "react";
import "./ds-globals.js";
import "../../ui_kits/aic-site/site.css";
import "../../ui_kits/aic-site/icons.jsx"; // sets window.Icons
import "../../ui_kits/aic-site/site.jsx"; // sets window.AICSite

const AICSite = window.AICSite;

export default {
  title: "UI Kits/AIC Site",
  component: AICSite,
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    docs: {
      description: {
        component:
          "The AI Colleagues marketing site — corporate landing page introducing Orcheo: " +
          "sticky nav, hero with a live workflow mock (NodeChips on wires), feature grid, " +
          "how-it-works steps on cream, ink stats band, CTA, and footer. " +
          "Source lives in `ui_kits/aic-site/` — this story runs it unmodified.",
      },
      story: { inline: false, iframeHeight: 720 },
    },
  },
};

export const Site = {
  render: () => <AICSite />,
};
