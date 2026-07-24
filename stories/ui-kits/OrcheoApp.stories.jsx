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
          "Hi-fi recreation of the Orcheo product shell, aligned with the real Studio in `apps/studio/src`. " +
          "The chrome lives in a **collapsible left sidebar** with the primary areas — AI Colleagues, " +
          "Apps, Credential Vault, Feedback & issues — and a bottom **profile menu** that holds " +
          "Profile, Settings, Workspace Management, a second-order **workspace switcher** submenu, and Log out. " +
          "There is no top bar; each page opens straight into its content. " +
          "The AI Colleagues landing mirrors the real workflow-card badges (AI Teams / Starred / Candidates " +
          "tabs, Upload, portrait colleague badges); other sub-pages are re-composed from the design-system " +
          "primitives: a colleague's orchestration canvas + run timeline, the Apps area (upload / export / " +
          "delete / publish / unpublish with deployment history and workflow bindings), Workspace Management " +
          "(members + API keys), Settings (a working light/dark/system theme toggle), and Profile. " +
          "The **Credential Vault** is a popup that opens over any page. " +
          "Source lives in `ui_kits/orcheo-app/`.",
      },
      story: { inline: false, iframeHeight: 760 },
    },
  },
};

export const App = {
  render: () => <OrcheoApp />,
};
