import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

const downScale = (num) => {
  return num * 0.75;
};

theme.typography.h1 = {
  lineHeight: "1.15 !important",
  fontWeight: "bold !important",
  fontFamily: "orpheuspro, sans-serif !important",
  fontSize: `${downScale(60)}px !important`,
  [theme.breakpoints.up("sm")]: {
    fontSize: `${downScale(74)}px !important`,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: `${downScale(87)}px !important`,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: `${downScale(100)}px !important`,
  },
};

theme.typography.h2 = {
  lineHeight: "1.15 !important",
  fontWeight: "bold !important",
  fontFamily: "orpheuspro, sans-serif !important",
  fontSize: `${downScale(30)}px !important`,
  [theme.breakpoints.up("sm")]: {
    fontSize: `${downScale(46)}px !important`,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: `${downScale(63)}px !important`,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: `${downScale(80)}px !important`,
  },
};

theme.typography.h3 = {
  lineHeight: "1.15 !important",
  fontWeight: "bold !important",
  fontFamily: "orpheuspro, sans-serif !important",
  fontSize: `${downScale(30)}px !important`,
  [theme.breakpoints.up("sm")]: {
    fontSize: `${downScale(36)}px !important`,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: `${downScale(43)}px !important`,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: `${downScale(50)}px !important`,
  },
};

theme.typography.h4 = {
  lineHeight: "1.15 !important",
  fontWeight: "bold !important",
  fontFamily: "orpheuspro, sans-serif !important",
  fontSize: `${downScale(30)}px !important`,
  [theme.breakpoints.up("sm")]: {
    fontSize: `${downScale(33)}px !important`,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: `${downScale(37)}px !important`,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: `${downScale(40)}px !important`,
  },
};

theme.typography.body2 = {
  fontWeight: "300 !important",
  fontFamily: "open-sans, sans-serif !important",
  fontSize: `${downScale(18)}px !important`,
  [theme.breakpoints.up("sm")]: {
    fontSize: `${downScale(22)}px !important`,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: `${downScale(26)}px !important`,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: `${downScale(30)}px !important`,
  },
};

theme.typography.subtitle1 = {
  fontWeight: "300 !important",
  fontSize: `${downScale(18)}px !important`,
  [theme.breakpoints.up("sm")]: {
    fontSize: `${downScale(20)}px !important`,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: `${downScale(23)}px !important`,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: `${downScale(25)}px !important`,
  },
};

theme.typography.subtitle2 = {
  fontWeight: "300 !important",
  fontSize: `${downScale(12)}px !important`,
  [theme.breakpoints.up("sm")]: {
    fontSize: `${downScale(14)}px !important`,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: `${downScale(17)}px !important`,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: `${downScale(20)}px !important`,
  },
};

export default theme;
