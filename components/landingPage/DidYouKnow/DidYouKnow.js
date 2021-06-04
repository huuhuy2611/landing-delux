import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "8%",
    [theme.breakpoints.down("md")]: {
      padding: "5% 0",
      justifyContent: "center",
    },
  },
  content: {
    padding: "10% 0 5% 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "80%",
    [theme.breakpoints.down("md")]: {
      paddingTop: "20vh",
      paddingBottom: "10%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "15vh",
      paddingBottom: "10%",
    },
  },
  content_detail: {
    width: "44%",
    paddingBottom: "7%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  hashtag: {
    position: "absolute",
    width: "560px",
    height: "104px",
    background: "#C1995A",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "rotate(-90deg)",
    top: "calc(50% - 52px)",
    left: "-230px",
    [theme.breakpoints.down("md")]: {
      width: "60vw",
      height: "80px",
      top: "80px",
      left: "calc(50% - 30vw)",
      transform: "unset",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
      height: "60px",
      top: "40px",
      left: "calc(50% - 40vw)",
      transform: "unset",
    },
  },
}));

function DidYouKnow(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.main}>
        <div className={classes.content}>
          <div className={classes.content_detail}>
            <Typography variant="h3">
              01/
              <br />
              There are 7 payments when you buy a private property
            </Typography>
          </div>
          <div className={classes.content_detail}>
            <Typography variant="h3">
              03/
              <br />
              Equity loan is the cheapest form of liquidity
            </Typography>
          </div>
          <div className={classes.content_detail}>
            <Typography variant="h3">
              02/
              <br />
              You can refinance to a longer loan and drop instalments
            </Typography>
          </div>
          <div className={classes.content_detail}>
            <Typography variant="h3">
              04/
              <br />
              There are 18 benchmark rates to choose from for home loans
            </Typography>
          </div>
        </div>
        <div className={classes.hashtag}>
          <Typography variant="h3">Did you know?</Typography>
        </div>
      </div>
    </>
  );
}

export default DidYouKnow;
