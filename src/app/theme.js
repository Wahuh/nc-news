const breakpoints = ["20em", "30em", "48em", "62em", "75em"];
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export default {
  breakpoints,
  colors: {
    fg: "white",
    bg: "#f2f2f2",
    banner: "#20232a",
    form: "rgb(246,247,248)",
    header: "rgba(0,0,0,.84)",
    body: "rgba(0,0,0,.84)",
    action: "#f10079",
    actionHover: "#e00070",
    option: "rgba(0,0,0,.84)",
    caption: "rgb(120, 124, 126)",
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
