import React from "react";
import {
  Grid,
  makeStyles,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import { ButtonWhite } from "../../common/core/button";

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: "15vh",
    paddingLeft: "140px",
    paddingRight: "140px",
    paddingBottom: "62px",
    background: "#35352F",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "36px",
      paddingRight: "36px",
      paddingTop: "10vh",
    },
  },
  footerWrapper: {
    height: "100%",
  },
  footerWrapperContainer: {
    width: "100%",
    justifyContent: "space-between",
  },
  footerWrapperItem: {
    "&:first-child": {
      width: "30vw",
    },
    [theme.breakpoints.down("md")]: {
      "&:first-child": {
        width: "50vw",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "&:first-child": {
        width: "90%",
      },

      "&:nth-child(2)": {
        width: "100%",
      },
      "&:nth-child(3)": {
        width: "70%",
      },
    },
  },
  classesWrapperItemInfor: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
  itemInforTitle: {
    paddingBottom: "78px",
  },
  itemContactUsItem: {
    paddingBottom: "30px",
  },

  classesWrapperItemContactUs: {
    [theme.breakpoints.down("md")]: {
      paddingTop: "5vh",
    },
  },
  classesWrapperItemFollowUs: {
    [theme.breakpoints.down("md")]: {
      paddingTop: "5vh",
    },
  },
  socials: {
    paddingTop: "10px",
    display: "flex",
    // justifyContent: "space-between",
  },

  social_logo: {
    marginRight: "2vw",
    [theme.breakpoints.down("md")]: {
      marginRight: "5vw",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "10vw",
    },
  },

  footerDown: {
    background: "red",
    paddingTop: "50px",
    paddingBottom: "60px",
  },
  footerWrapperBelow: {
    paddingTop: "8vh",
    // paddingBottom: "61px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  copyright: {
    [theme.breakpoints.down("md")]: {
      paddingBottom: "5vh",
    },
  },

  button_footer: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));

function Footer() {
  const classes = useStyles();

  const onTopPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateWhatsapp = () => {
    window.open("https://wa.me/6591091029", "_blank");
  };
  return (
    <div className={classes.footer}>
      <Grid className={classes.footerWrapper}>
        <Grid container className={classes.footerWrapperContainer}>
          <Grid className={classes.footerWrapperItem}>
            <Grid className={classes.classesWrapperItemInfor}>
              <Typography variant="h2" className={classes.itemInforTitle}>
                Home loans made simple
              </Typography>
              <ButtonWhite
                className={classes.button_footer}
                title="Book A Call"
                onClick={onTopPage}
              />
              <div></div>
            </Grid>
          </Grid>
          <Grid className={classes.footerWrapperItem}>
            <Grid className={classes.classesWrapperItemContactUs}>
              <Grid className={classes.itemContactUsItem}>
                <Typography variant="h4">Contact Us</Typography>
              </Grid>
              <Grid className={classes.itemContactUsItem}>
                <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
                  email/
                  <br />
                  sales@deluxmortgage.sg
                </Typography>
              </Grid>
              <Grid className={classes.itemContactUsItem}>
                <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
                  phone/
                  <br />
                  +65 9109 1029
                </Typography>
              </Grid>
              <Grid className={classes.itemContactUsItem}>
                <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
                  address/
                  <br />
                  68 CIRCULAR ROAD #02-01 SINGAPORE (049422)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.footerWrapperItem}>
            <Grid className={classes.classesWrapperItemFollowUs}>
              <Grid className={classes.itemContactUsItem}>
                <Typography variant="h4">Follow Us</Typography>
              </Grid>
              <Box className={classes.socials}>
                {/* <img
                  className={classes.social_logo}
                  width="40px"
                  height="40px"
                  src="/images/facebook.png"
                />
                <img
                  className={classes.social_logo}
                  width="40px"
                  height="40px"
                  src="/images/instagram.png"
                />
                <img
                  className={classes.social_logo}
                  width="40px"
                  height="40px"
                  src="/images/linkedin.png"
                /> */}
                <img
                  className={classes.social_logo}
                  width="40px"
                  height="40px"
                  src="/images/whatsapp-square.png"
                  onClick={navigateWhatsapp}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.footerWrapperBelow}>
          <Typography variant="body2" className={classes.copyright}>
            © Delux Mortgage 2021
          </Typography>
          <Typography variant="subtitle1">
            Design by PassionSwirls <br />
            Development by Fetch Technology
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
