/** @type {import('@storybook/react-vite').StorybookConfig} */
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx)"],
  addons: ["@storybook/addon-docs"],
  framework: "@storybook/react-vite",
  // Root mapping serves the Welcome page images; the /assets mapping serves
  // the ui_kits' relative image paths (../../assets/… resolves to /assets/…).
  staticDirs: ["../assets", { from: "../assets", to: "/assets" }],
};

export default config;
