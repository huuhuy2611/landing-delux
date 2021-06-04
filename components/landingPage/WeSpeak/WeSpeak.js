import React from "react";
import Slider from "react-slick";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  divCenter: {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
  },

  logos: {
    padding: "1vh 0",
    width: "200vw",
    border: "1px solid black",
  },

  logo_detail: {
    height: "85px !important",
    width: "170px !important",
  },

  WeSpeak: {
    padding: "10% 0",
    position: "relative",
    ["@media (max-width: 1680px)"]: {
      padding: "5% 0",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  },

  WeSpeak_text: {
    padding: "5%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  },

  WeSpeak_images: {
    position: "relative",
    [theme.breakpoints.down("md")]: {
      position: "unset",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
  },

  WeSpeak_image_div_1: {
    position: "absolute",
    top: "20vh",
    left: "10vw",
    width: "15vw",
    height: "32.7vh",
    [theme.breakpoints.down("md")]: {
      position: "unset",
      display: "flex",
      alignItems: "flex-end",
      width: "20vw",
    },
    [theme.breakpoints.down("sm")]: {
      position: "unset",
      width: "119px",
      height: "147px",
    },
  },
  WeSpeak_image_div_2: {
    position: "absolute",
    top: "0",
    right: "5vw",
    width: "15vw",
    height: "32.7vh",
    [theme.breakpoints.down("md")]: {
      position: "unset",
      display: "flex",
      alignItems: "flex-end",
      width: "20vw",
    },
    [theme.breakpoints.down("sm")]: {
      position: "unset",
      width: "119px",
      height: "147px",
    },
  },
  WeSpeak_image_div_3: {
    position: "absolute",
    right: "0",
    bottom: "-28vh",
    width: "15vw",
    height: "32.7vh",
    ["@media (max-width: 1680px)"]: {
      bottom: "-20vh",
    },
    [theme.breakpoints.down("md")]: {
      position: "unset",
      display: "flex",
      alignItems: "flex-end",
      width: "20vw",
    },
    [theme.breakpoints.down("sm")]: {
      position: "unset",
      width: "119px",
      height: "147px",
    },
  },

  WeSpeak_brave: {
    position: "absolute",
    bottom: "-33px",
    right: "17vw",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  BookACall: {
    padding: "5%",
    background: "#F2EFE9",
  },

  BookACall_header: {
    marginBottom: "4%",
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },

  BookACall_slider: {
    marginBottom: "8%",
  },

  BookACall_main: {
    position: "relative",
    padding: "0 10%",
    height: "60vh",
    [theme.breakpoints.down("md")]: {
      marginTop: "20%",
      height: "unset",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "40%",
      padding: "0 5%",
    },
  },

  BookACall_main_border: {
    height: "100%",
    marginLeft: "15%",
    padding: "2% 0%",
    border: "1px solid black",
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      margin: "unset",
      paddingTop: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "40%",
    },
  },

  BookACall_main_text: {
    width: "65%",
    margin: "2%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "5%",
    },
  },

  BookACall_main_div_image: {
    position: "absolute",
    width: "536px",
    height: "590px",
    top: "calc(50% - 295px)",
    left: "calc(22% - 268px)",
    [theme.breakpoints.down("lg")]: {
      width: "28vw",
      height: "55vh",
      top: "calc(50% - 27.5vh)",
      left: "calc(22% - 14vw)",
    },
    [theme.breakpoints.down("md")]: {
      width: "276px",
      height: "fit-content",
      top: "-152px",
      left: "calc(50% - 138px)",
    },
    [theme.breakpoints.down("sm")]: {
      overflow: "hidden",
      height: "225px",
      top: "-112.5px",
      left: "calc(50% - 138px)",
    },
  },

  BookACall_main_image: {
    width: "450px",
    [theme.breakpoints.down("sm")]: {
      width: "unset",
    },
  },

  custom_slick: {
    paddingBottom: "1%",
    [`& > ul`]: {
      display: "flex !important",
      justifyContent: "center",
    },
    [`& > ul li`]: {
      borderRadius: "50%",
      border: "1px solid #707070",
    },
    [`& > ul li button:before`]: {
      content: "unset !important",
    },
    [`& > ul li.slick-active`]: {
      background: "#C1995A",
      borderRadius: "50%",
    },
    [theme.breakpoints.down("md")]: {
      [`& > ul`]: {
        display: "block !important",
      },
    },
  },

  BookACall_div_button: {
    margin: "5% 0",
    display: "flex",
    justifyContent: "center",
    height: "82px",
    [theme.breakpoints.down("md")]: {
      margin: "10% 0",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "15% 0",
    },
  },
  BookACall_button: {
    background: "#35352F",
    color: "white",
    width: "20vw",
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

  common_margin: {
    marginBottom: "2vh",
  },

  common_margin_h1: {
    marginBottom: "5vh",
  },
}));

function WeSpeak(props) {
  const classes = useStyles();

  const onTopPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  var settings_slider = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 65000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 10,
    pauseOnHover: true,
    cssEase: "linear",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={classes.logos}>
        <Slider {...settings}>
          <div className={`${classes.divCenter} ${classes.logo_detail}`}>
            <img src="/logos/Citibank-logo.png" />
          </div>
          <div className={`${classes.divCenter} ${classes.logo_detail}`}>
            <img src="/logos/Bank_Of_China_logo.png" />
          </div>
          <div className={`${classes.divCenter} ${classes.logo_detail}`}>
            <img src="/logos/Standard_Chartered_(2021).svg.png" />
          </div>
          <div className={`${classes.divCenter} ${classes.logo_detail}`}>
            <img src="/logos/maybank.png" />
          </div>
          <div className={`${classes.divCenter} ${classes.logo_detail}`}>
            <img src="/logos/Singapura.png" />
          </div>
          <div className={`${classes.divCenter} ${classes.logo_detail}`}>
            <img src="/logos/CIMB.png" />
          </div>
          <div className={`${classes.divCenter} ${classes.logo_detail}`}>
            <img src="/logos/1200px-RHB_Logo.svg.png" />
          </div>
          <div className={`${classes.divCenter} ${classes.logo_detail}`}>
            <img src="/logos/POSB.png" />
          </div>
          <div className={`${classes.divCenter} ${classes.logo_detail}`}>
            <img src="/logos/DBS_Bank_logo_logotype.png" />
          </div>
          <div className={`${classes.divCenter} ${classes.logo_detail}`}>
            <img src="/logos/UOB.png" />
          </div>
          <div className={`${classes.divCenter} ${classes.logo_detail}`}>
            <img src="/logos/hsbc-fdf2a0202fce45dc9afed7b76b095200.png" />
          </div>
        </Slider>
      </div>
      <Grid container className={classes.WeSpeak}>
        <Grid item lg={6} md={12} className={classes.WeSpeak_text}>
          <Typography variant="h3" className={classes.common_margin}>
            More importantly,
          </Typography>
          <Typography variant="h1" className={classes.common_margin_h1}>
            We speak human
          </Typography>
          <Typography variant="body2">
            We are here with a sole purpose to bring transparency & clarity. Say
            goodbye to complicated terms & jargon.
          </Typography>
        </Grid>
        <Grid item lg={6} md={12} className={classes.WeSpeak_images}>
          <div className={classes.WeSpeak_image_div_1}>
            <img
              className={classes.WeSpeak_image_1}
              src="/images/WhatsApp Image 2021-05-17 at 1.05.38 PM.png"
            />
          </div>
          <div className={classes.WeSpeak_image_div_2}>
            <img
              className={classes.WeSpeak_image_2}
              src="/images/WhatsApp Image 2021-05-17 at 1.01.58 PM.png"
            />
          </div>
          <div className={classes.WeSpeak_image_div_3}>
            <img
              className={classes.WeSpeak_image_3}
              src="/images/WhatsApp Image 2021-05-18 at 3.45.39 PM.png"
            />
          </div>
        </Grid>
        <div className={classes.WeSpeak_brave}>
          <img src="/images/Group_10.png" />
        </div>
      </Grid>
      <div className={classes.BookACall}>
        <div className={classes.BookACall_header}>
          <Typography variant="body2">Don’t take it from us</Typography>
          <Typography variant="h3">
            Hear what our past customers have to say
          </Typography>
        </div>
        <div className={classes.BookACall_slider}>
          <Slider {...settings_slider} className={classes.custom_slick}>
            <div className={classes.BookACall_main}>
              <div className={classes.BookACall_main_border}>
                <div className={classes.BookACall_main_text}>
                  <Typography variant="h3">Sales Manager</Typography>
                  <br />
                  <Typography variant="body2">
                    Being a first time home owner can be really stressful and
                    taking up the biggest loan in my life wasn’t really helping
                    the situation. I tried researching for information on my own
                    but they are really all over the place.
                    <br />
                    <br />I was introduced to Delux by a friend and they proved
                    to be a one stop service provider. From sourcing for the
                    lowest package in the market to finally signing the loan,
                    they are there along every step of the way. Even the
                    conveyancing lawyer was taken care of. Thank you Delux!
                  </Typography>
                </div>
              </div>

              <div
                className={`${classes.BookACall_main_div_image} ${classes.divCenter}`}
              >
                <img
                  className={classes.BookACall_main_image}
                  src="/images/review1.png"
                />
              </div>
            </div>
            <div className={classes.BookACall_main}>
              <div className={classes.BookACall_main_border}>
                <div className={classes.BookACall_main_text}>
                  <Typography variant="h3">Engineer</Typography>
                  <br />
                  <Typography variant="body2">
                    I was sourcing around for a better home loan package to
                    refinance to as my current interest rate is too high. I
                    spoke to several sources including the bankers but i’m
                    pleasantly surprised by Luck Sin professionalism and
                    experience in the industry.
                    <br />
                    <br />I prefer a Fixed rate and most recommended me to take
                    up the 2 years lock in package since it was the lowest.
                    However Luck Sin take one step further to find out that i
                    have the intention to sell my property and was quick to
                    point out that it might not be feasible for refinancing
                    because of the subsidies clawback from the banks. Managed to
                    dodge a bullet there and i highly recommend Delux to all
                    homeowners looking to refinance. Thank you Luck Sin!
                  </Typography>
                </div>
              </div>

              <div
                className={`${classes.BookACall_main_div_image} ${classes.divCenter}`}
              >
                <img
                  className={classes.BookACall_main_image}
                  src="/images/review2.png"
                />
              </div>
            </div>
            <div className={classes.BookACall_main}>
              <div className={classes.BookACall_main_border}>
                <div className={classes.BookACall_main_text}>
                  <Typography variant="h3">
                    Financial Service Director
                  </Typography>
                  <br />
                  <Typography variant="body2">
                    Great job Delux! Clear, concise and knowledgeable. From the
                    start till the end, Jim was there to guide me every step
                    along the way. Highly recommend his service to my family and
                    friends!
                  </Typography>
                </div>
              </div>

              <div
                className={`${classes.BookACall_main_div_image} ${classes.divCenter}`}
              >
                <img
                  className={classes.BookACall_main_image}
                  src="/images/review3.png"
                />
              </div>
            </div>
          </Slider>
        </div>

        <div className={classes.BookACall_div_button}>
          <button onClick={onTopPage} className={classes.BookACall_button}>
            <Typography variant="subtitle1">BOOK A CALL WITH US</Typography>
          </button>
        </div>
      </div>
    </>
  );
}

export default WeSpeak;
