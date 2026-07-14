import "../styles.css";

/** @type {import('@storybook/react-vite').Preview} */
const preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        page: { name: "Page (warm off-white)", value: "#f7f5ef" },
        card: { name: "Card (white)", value: "#ffffff" },
        cream: { name: "Parchment cream", value: "#f6f5d4" },
        ink: { name: "AIC ink", value: "#0e0e0c" },
      },
    },
    options: {
      storySort: {
        order: [
          "Welcome",
          "Foundations",
          ["Colors", "Typography", "Spacing & Shape", "Elevation"],
          "Buttons",
          "Forms",
          "Display",
          "Navigation",
          "Feedback",
          "Orcheo",
          "UI Kits",
          ["Orcheo App", "AIC Site"],
        ],
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: "page" },
  },
};

export default preview;
