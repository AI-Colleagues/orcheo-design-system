import { DocsContext } from "@storybook/addon-docs/blocks";
import React, { useContext, useEffect, useState } from "react";

const getBackgroundName = (context) => {
  const backgrounds = context?.store?.userGlobals?.get?.()?.backgrounds;

  return typeof backgrounds === "string" ? backgrounds : backgrounds?.value;
};

export const WelcomeLogos = () => {
  const context = useContext(DocsContext);
  const backgroundOptions = context.projectAnnotations.parameters.backgrounds.options;
  const [backgroundName, setBackgroundName] = useState(
    () => getBackgroundName(context) || "page",
  );

  useEffect(() => {
    const updateBackground = ({ globals }) => {
      const backgrounds = globals?.backgrounds;
      setBackgroundName(typeof backgrounds === "string" ? backgrounds : backgrounds?.value || "page");
    };

    // The docs page is not a story canvas, so Storybook's background decorator
    // does not apply here. Follow the same global that powers the toolbar.
    setBackgroundName(getBackgroundName(context) || "page");
    context.channel.on("globalsUpdated", updateBackground);

    return () => context.channel.removeListener("globalsUpdated", updateBackground);
  }, [context]);

  const isAicInk = backgroundName === "ink";
  const background = backgroundOptions[backgroundName]?.value || "transparent";

  return (
    <div
      data-background={backgroundName}
      style={{
        display: "flex",
        gap: 24,
        alignItems: "center",
        margin: "24px 0",
        padding: 24,
        borderRadius: "var(--radius-lg)",
        background,
        transition: "background-color 0.3s",
      }}
    >
      <img
        src="./orcheo-mark.png"
        alt="Orcheo product icon with rounded orange tile"
        width="96"
        height="96"
      />
      <img
        src={isAicInk ? "./aic-mark-white.png" : "./aic-mark.png"}
        alt={`AI Colleagues corporate mark${isAicInk ? " in white" : " with rounded white tile"}`}
        width="96"
        height="96"
      />
    </div>
  );
};
