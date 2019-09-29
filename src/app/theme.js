const breakpoints = ["20em", "30em", "48em", "62em", "75em"];
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export default {
  breakpoints,
  radii: [0, "4px"],
  colors: {
    fg: "#1C202B",
    fgHover: "#313544",
    bg: "rgb(17, 20, 34)",
    banner: "#20232a",
    header: "#2d3143",
    heading: "#F2F2F2",
    body: "rgba(255, 255, 255, 0.6)",
    action: "#FF69B4",
    actionHover: "#e00070",
    option: "rgba(0,0,0,.84)",
    caption: "rgba(255, 255, 255, 0.5)",
    icon: "grey",
    border: "rgb(237,239,241)",
    link: "#cf0068"
  },
  fontWeights: {
    heading: 600,
    option: 600
  },
  letterSpacings: [0, "0.05em"],
  fontSizes: [
    0,
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.125rem",
    "1.25rem",
    "1.5rem",
    "1.75rem",
    "2rem",
    "2.25rem",
    "2.625rem",
    "3rem",
    "3.375rem",
    "3.75rem",
    "4.25rem",
    "4.75rem",
    "5.25rem",
    "5.75rem"
  ],
  space: [0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 60]
};
