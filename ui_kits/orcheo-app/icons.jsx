// Lucide-style stroke icons (path data from lucide.dev — the system's chosen icon set)
// expressed as small React components so they compose cleanly inside the kit.
const React = window.React;

function svg(children) {
  return function Icon({ size = 20, className = "", style, fill = "none", ...rest }) {
    return React.createElement("svg", {
      width: size, height: size, viewBox: "0 0 24 24", fill,
      stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round",
      className, style, "aria-hidden": "true", ...rest,
    }, children(React));
  };
}
const P = (d, key) => React.createElement("path", { key: key || d, d });

const Icons = {
  workflow: svg((R) => [
    R.createElement("rect", { key: "a", x: 3, y: 3, width: 8, height: 8, rx: 1 }),
    R.createElement("rect", { key: "b", x: 13, y: 13, width: 8, height: 8, rx: 1 }),
    P("M7 11v2a2 2 0 0 0 2 2h2", "c"),
  ]),
  play: svg(() => [P("m7 4 13 8-13 8V4z")]),
  plus: svg(() => [P("M5 12h14"), P("M12 5v14")]),
  search: svg((R) => [R.createElement("circle", { key: "a", cx: 11, cy: 11, r: 7 }), P("m21 21-4.3-4.3", "b")]),
  settings: svg((R) => [
    R.createElement("circle", { key: "a", cx: 12, cy: 12, r: 3 }),
    P("M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z", "b"),
  ]),
  bot: svg((R) => [
    R.createElement("rect", { key: "a", x: 4, y: 8, width: 16, height: 12, rx: 2 }),
    P("M12 8V4M8 4h8", "b"), P("M9 14h.01M15 14h.01", "c"),
  ]),
  clock: svg((R) => [R.createElement("circle", { key: "a", cx: 12, cy: 12, r: 9 }), P("M12 7v5l3 2", "b")]),
  webhook: svg(() => [
    P("M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"),
    P("m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"),
    P("m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"),
  ]),
  message: svg(() => [P("M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z")]),
  database: svg((R) => [
    R.createElement("ellipse", { key: "a", cx: 12, cy: 5, rx: 9, ry: 3 }),
    P("M3 5v14a9 3 0 0 0 18 0V5", "b"), P("M3 12a9 3 0 0 0 18 0", "c"),
  ]),
  check: svg(() => [P("M20 6 9 17l-5-5")]),
  alert: svg(() => [
    P("M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"),
    P("M12 9v4M12 17h.01"),
  ]),
  chevronRight: svg(() => [P("m9 18 6-6-6-6")]),
  chevronDown: svg(() => [P("m6 9 6 6 6-6")]),
  layers: svg(() => [P("m12 2 9 5-9 5-9-5 9-5z"), P("m3 12 9 5 9-5"), P("m3 17 9 5 9-5")]),
  activity: svg(() => [P("M22 12h-4l-3 9L9 3l-3 9H2")]),
  zap: svg(() => [P("M13 2 3 14h9l-1 8 10-12h-9l1-8z")]),
  bell: svg(() => [P("M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"), P("M10.3 21a1.94 1.94 0 0 0 3.4 0")]),
  user: svg((R) => [P("M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"), R.createElement("circle", { key: "b", cx: 12, cy: 7, r: 4 })]),
  more: svg((R) => [
    R.createElement("circle", { key: "a", cx: 12, cy: 12, r: 1 }),
    R.createElement("circle", { key: "b", cx: 19, cy: 12, r: 1 }),
    R.createElement("circle", { key: "c", cx: 5, cy: 12, r: 1 }),
  ]),
  arrowLeft: svg(() => [P("m12 19-7-7 7-7"), P("M19 12H5")]),
  box: svg(() => [P("m21 16-9 5-9-5V8l9-5 9 5v8z"), P("M12 3v18"), P("m3 8 9 5 9-5")]),
  refresh: svg(() => [P("M3 12a9 9 0 0 1 15-6.7L21 8"), P("M21 3v5h-5"), P("M21 12a9 9 0 0 1-15 6.7L3 16"), P("M3 21v-5h5")]),
  globe: svg((R) => [R.createElement("circle", { key: "a", cx: 12, cy: 12, r: 9 }), P("M3 12h18", "b"), P("M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z", "c")]),
};

window.Icons = Icons;
