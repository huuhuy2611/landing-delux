import { makeStyles, Grid } from "@material-ui/core";
import theme from "../theme/typography";
import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      backgroundImage:
        "url(/images/katja-bayer-77JACslA8G0-unsplash.jpg), rgba(255, 0, 150, 0.6)",
    },
  },
  row_left: {
    position: "relative",
  },
  row: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "center",
    padding: "0 13%",
    [theme.breakpoints.down("md")]: {},
  },
  childItem: {
    marginTop: "5vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  childItemImg: {
    margin: "0 3%",
  },
  groupImg: {
    background: "white",
    width: 185,
    height: 185,
    borderRadius: "50%",
    position: "absolute",
    top: "calc(50% - 92.5px)",
    right: "-92.5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  item: {
    textAlign: "center",
  },
  childImg: {},
  child: {
    display: "flex",
    justifyContent: "center",
  },

  div_logo: {
    display: "flex",
    justifyContent: "center",
  },

  logo: {
    width: 261,
    height: 61,
    [theme.breakpoints.down("md")]: {
      width: 200,
      height: 47,
    },
  },

  div_imgLanding: {
    height: "100%",
    [theme.breakpoints.down("md")]: {
      height: "fit-content",
    },
  },

  imgLanding: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default function ThankYou() {
  const classes = useStyles();

  const navigateWhatsapp = () => {
    window.open("https://wa.me/6591091029", "_blank");
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.root}>
        <Grid
          item
          lg={6}
          md={12}
          style={{ height: "100%" }}
          className={classes.row_left}
        >
          <div className={classes.row}>
            <div className={classes.div_logo}>
              <img src="/images/Group_31.png" className={classes.logo} />
            </div>
            <div className={classes.item}>
              <div>
                <Typography variant="h1">Thank You</Typography>
              </div>
              <div>
                <div style={{ paddingTop: 20 }}>
                  <Typography variant="body2">
                    You are on your to greater savings for Your mortgage. Out
                    mortgage specialist will be contacing you within 12 hours
                  </Typography>
                </div>
                <div className={classes.child} style={{ paddingTop: 30 }}>
                  <Typography variant="body2" style={{ width: "70%" }}>
                    For urgent enquires you can chat with us directly here
                  </Typography>
                </div>
              </div>

              <div className={classes.childItem}>
                {/* <img
                  className={classes.childItemImg}
                  src="/images/facebook-square-brands@1X.png"
                  width={40}
                  height={40}
                />
                <img
                  className={classes.childItemImg}
                  src="/images/instagram-square-brands@1X.png"
                  width={40}
                  height={40}
                />
                <img
                  className={classes.childItemImg}
                  src="/images/linkedin-brands@1X.png"
                  width={40}
                  height={40}
                /> */}
                <img
                  className={classes.childItemImg}
                  src="/images/whatsapp-121.png"
                  width={40}
                  height={40}
                  onClick={navigateWhatsapp}
                />
              </div>
            </div>
            <Typography
              variant="body2"
              style={{ fontFamily: "orpheuspro, sans-serif !important" }}
            >
              Home Loans Made Simple
            </Typography>
          </div>
          <div className={classes.groupImg}>
            <img className={classes.childImg} src="/images/Group_10.png" />
          </div>
        </Grid>

        <Grid item lg={6} md={12} className={classes.div_imgLanding}>
          <img
            className={classes.imgLanding}
            src="/images/katja-bayer-77JACslA8G0-unsplash.jpg"
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
