import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    background: "#35352F",
    padding: "10vh",
    textAlign: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "10vh 5vw",
    },
  },

  child_2: {
    marginBottom: "4vh",
  },

  child_3: {
    width: "90%",
    marginBottom: "10vh",
  },

  div_button: {
    display: "flex",
    justifyContent: "center",

    height: "82px",
    marginBottom: "2vh",

    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },

  button: {
    width: "20vw",
    background: "#F2EFE9",
    ["@media (max-width: 1680px)"]: {
      width: "30vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "60vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
    },
  },
}));

function SaveMoney(props) {
  const classes = useStyles();

  const onTopPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={classes.main}>
        <Typography variant="body2">
          Based on a $800,000 loan over a 25 year period
        </Typography>
        <div className={classes.child_2}>
          <Typography variant="h1">Save at least $114,393 with us.</Typography>
        </div>
        <div className={classes.child_3}>
          <Typography variant="h3">
            These savings can go into your next house, your next car, travel
            expenses or simply into your retirement fund.
          </Typography>
        </div>

        <div className={classes.div_button}>
          <button onClick={onTopPage} className={classes.button}>
            <Typography variant="subtitle1">
              Save $114,393 in 20 minutes
            </Typography>
          </button>
        </div>
        <Typography variant="subtitle2">
          Join 3411 others now in saving your money!
        </Typography>
      </div>
    </>
  );
}

export default SaveMoney;
