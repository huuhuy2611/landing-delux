import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  halfTop: {
    position: "relative",
  },

  divCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  halfTop_image: {
    width: "816px",
    height: "862px",
    [theme.breakpoints.down("md")]: {
      content: "url(/images/mobile_katja-bayer-77JACslA8G0-unsplash.png)",
      width: "100%",
      height: "auto",
    },
  },

  halfTop_right: {
    [theme.breakpoints.down("md")]: {
      padding: "10%",
    },
  },

  halfTop_right_text: {
    width: "70%",
    paddingBottom: "10%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },

  halfTop_hashtag: {
    width: "560px",
    height: "104px",
    background: "#C1995A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "-230px",
    bottom: "-240px",
    zIndex: "1",
    transform: "rotate(-90deg)",
    padding: "2%",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      height: "70px",
      left: "20%",
      bottom: "-35px",
      transform: "unset",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "50px",
      left: "10%",
      bottom: "-25px",
      transform: "unset",
    },
  },

  brave: {
    position: "absolute",
    bottom: "96px",
    right: "5%",
    width: "92.28px",
    height: "65.4px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  halfBottom: {
    background: "#F2EFE9",
    position: "relative",
    width: "100%",
    height: "fit-content",
    padding: "10% 10% 10% 15%",
    [theme.breakpoints.down("md")]: {
      top: 0,
      padding: "10%",
    },
  },

  halfBottom_text: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  halfBottom_text_child: {
    width: "46%",
    paddingBottom: "5%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  halfBottom_button: {
    padding: "0 20%",
    display: "block",
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  },

  halfBottom_button_child: {
    background: "#35352F",
    color: "#F2EFE9",
    width: "100%",
    height: "82px",
    marginBottom: "1%",
    ["&:hover"]: {
      background: "#1e1e1c",
    },
  },

  lane_bg: {
    position: "absolute",
    bottom: "0",
    height: "130px",
    width: "100vw",
    background: "#F2EFE9",
    zIndex: "-1",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

function Benefit(props) {
  const classes = useStyles();

  const onTopPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Grid container direction="row" className={classes.halfTop}>
        <Grid
          item
          md="12"
          lg="5"
          style={{ width: "100%", height: "fit-content" }}
        >
          <img
            src="/images/katja-bayer-77JACslA8G0-unsplash.jpg"
            className={classes.halfTop_image}
          />
        </Grid>
        <Grid
          item
          md="12"
          lg="7"
          className={`${classes.divCenter} ${classes.halfTop_right}`}
        >
          <div className={classes.halfTop_right_text}>
            <Typography variant="h3" style={{ paddingBottom: "2vmin" }}>
              Owning a house is exciting until you have to deal with mortgage
            </Typography>
            <Typography
              variant="body2"
              style={{ fontStyle: "italic", paddingBottom: "8vmin" }}
            >
              Keep the excitement and we will deal with the rest.
            </Typography>
            <Typography variant="body2">
              On average, our customers take 20 minutes with us to clarify their
              doubts, understand the current interest rate market, which package
              to take today and what to do next.
            </Typography>
          </div>
        </Grid>
        <div className={classes.halfTop_hashtag}>
          <Typography
            variant="h3"
            style={{ fontWeight: "bold", color: "white" }}
          >
            Our promise to you
          </Typography>
        </div>
        <div className={classes.brave}>
          <img src="/images/Group_10.png" />
        </div>
        <div className={classes.lane_bg}></div>
      </Grid>
      <div>
        <div className={classes.halfBottom}>
          <div className={classes.halfBottom_text}>
            <div className={`${classes.halfBottom_text_child}`}>
              <Typography variant="h3">01/</Typography>
              <Typography variant="h3" style={{ paddingBottom: "3%" }}>
                Get the best rate
              </Typography>
              <Typography variant="body2">
                We compare 138 packages across 14 banks. We work with dedicated
                bankers to inform us of any latest rate change daily.
              </Typography>
            </div>
            <div className={`${classes.halfBottom_text_child}`}>
              <Typography variant="h3">02/</Typography>
              <Typography variant="h3" style={{ paddingBottom: "3%" }}>
                Personalised Recommendation
              </Typography>
              <Typography variant="body2">
                We listen. Expect unbiased advisory based on your needs now and
                3 years later.
              </Typography>
            </div>

            <div className={`${classes.halfBottom_text_child}`}>
              <Typography variant="h3">03/</Typography>
              <Typography variant="h3" style={{ paddingBottom: "3%" }}>
                No more waiting
              </Typography>
              <Typography variant="body2">
                A mortgage specialist from the bank of your choice within the
                same day.
              </Typography>
            </div>
            <div className={`${classes.halfBottom_text_child}`}>
              <Typography variant="h3">04/</Typography>
              <Typography variant="h3" style={{ paddingBottom: "3%" }}>
                No one overpay
              </Typography>
              <Typography variant="body2">
                Mortgage is long term. Get a follow up call when you are due for
                your next refinancing. But of course, you can choose to opt out
                of this awesome service.
              </Typography>
            </div>
          </div>
          <div className={`${classes.halfBottom_button} ${classes.divCenter}`}>
            <Button
              onClick={onTopPage}
              className={classes.halfBottom_button_child}
            >
              <Typography variant="subtitle1">
                GET YOUR PERSONALISED RECOMMENDATION NOW
              </Typography>
            </Button>
            <div className={classes.divCenter}>
              <Typography
                variant="subtitle2"
                style={{ fontStyle: "italic", color: "#C1995A" }}
              >
                It's free
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefit;
