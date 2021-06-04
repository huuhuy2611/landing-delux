import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ItemQuestion from "./ItemQuestion";

const useStyles = makeStyles((theme) => ({
  faq: {
    paddingTop: "10%",
    paddingLeft: "10%",
    paddingRight: "10%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "15%",
    },
  },
  faqWrapper: {
    display: "flex",
  },
  faqWrapperItem: {
    "&:first-child": {
      width: "25%",
    },
    "&:nth-child(2)": {
      width: "100%",
      flex: 1,
    },
    [theme.breakpoints.down("sm")]: {
      "&:first-child": {
        width: "100%",
      },
    },
  },
  wrapHaveMoreQuestions: {
    paddingTop: "20px",
    paddingBottom: "20%",
  },

  FAQ_brave: {
    width: "185px",
    height: "185px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "-92.5px",
    background: "white",
    padding: "2%",
    borderRadius: "50%",
    [theme.breakpoints.down("md")]: {
      width: "150px",
      height: "150px",
      bottom: "-75px",
      left: "calc(50% - 75px)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "91px",
      height: "91px",
      bottom: "-45.5px",
      left: "calc(50% - 45.5px)",
    },
    ["@media (max-width: 550px)"]: {
      padding: "4%",
    },
  },
}));

function FAQ(props) {
  const classes = useStyles();
  return (
    <Box className={classes.faq}>
      <Grid container className={classes.faqWrapper}>
        <Grid className={classes.faqWrapperItem}>
          <Typography variant="h1">FAQ</Typography>
        </Grid>
        <Grid className={classes.faqWrapperItem}>
          <ItemQuestion
            title="Do I have to pay for this service?"
            content="Our service is 100% free to you. We charge a flat fee to our partner banks and it is consistent with every banks. Therefore there is no conflict of interest in getting you the best."
          />
          <ItemQuestion
            title="If you are being paid a referral fee by the bank, does that means I do not get the lowest rates?"
            content="We transact in volume with our partner banks therefore we will always command the lowest interest rates in the market. With high number of cases being referred to each bank daily, we are able to get packages that you might not get access to."
          />
          <ItemQuestion
            title="I would like to change my package with my existing bank, can you help?"
            content="Yes, we will definitely point you in the right direction. We take pride in making sure that everyone is fully aware of their options available in the current home loan market."
          />
          <ItemQuestion
            title="I am only buying my property later this year. Can I learn more about my loan eligibility? My lock in period for my existing loan is 6 months away, should I start my refinancing now?"
            content="Delux Mortgage is always here for you. Be it now or the future. We believe everyone deserve to have access to knowledge. Also for refinancing, you can start refinancing as early as 6 months before the lock in period is over. You are able to lock in the lower rates earlier so that you do not incur additional interest when your lock in period is up"
          />
          <ItemQuestion
            title="Is my contact details and information safe?"
            content="Yes, a definite 100%. This is also the last thing we want you to worry about. We value your privacy and will never sell your information or pass your details to any 3rd party without your permission."
          />
          <Typography variant="body2" className={classes.wrapHaveMoreQuestions}>
            Have more questions?
            <br />
            Get on a call with us here, or email us at sales@deluxmortgage.sg
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.FAQ_brave}>
        <img className={classes.FAQ_brave_img} src="\images\Group_10.png" />
      </div>
    </Box>
  );
}

export default FAQ;
