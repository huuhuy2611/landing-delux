import {
  Grid,
  makeStyles,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  FormControl,
  InputLabel,
  NativeSelect,
  FormHelperText,
  CircularProgress,
  InputAdornment,
} from "@material-ui/core";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import React, { useState } from "react";
import Validator from "../../validator/validator";
import _ from "lodash";
import { useRouter } from "next/router";
import { post } from "../../../services/Network";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "95.5vh",
    [theme.breakpoints.down("md")]: {
      height: "unset",
    },
  },

  headerIntro: {
    height: "3.5vh",
    width: "100vw",
    marginTop: "1vh",
    [theme.breakpoints.down("md")]: {
      height: "unset",
      width: "200vw",
      margin: "1vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "unset",
      width: "300vw",
      margin: "1vh",
    },
  },

  divCenter: {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
  },

  circleCenter: {
    position: "absolute",
    top: "calc(50% - 92.5px)",
    right: "-92.5px",
    background: "white",
    width: "185px",
    height: "185px",
    borderRadius: "50%",
    [theme.breakpoints.down("md")]: {
      top: "unset",
      right: "calc(50% - 92.5px)",
      bottom: "-92.5px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "91px",
      height: "91px",
      top: "unset",
      right: "calc(50% - 45.5px)",
      bottom: "-45.5px",
      "& img": {
        width: "45.29px",
        height: "32.1px",
      },
    },
  },

  rowHeader: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      margin: "10% 0",
    },
  },

  rowHeader_left: {
    padding: "5vmin 10.5%",
    position: "relative",
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      padding: "5vmin 5vmin 5vmin 5vmin",
      textAlign: "center",
      height: "100%",
    },
  },

  rowHeader__left_text: {},

  headerRight: {
    height: "auto",
    background: "#f2efe9",
    padding: "10vmin 6.4%",
    [theme.breakpoints.down("md")]: {
      padding: "15vmin 10vmin 10vmin 10vmin",
    },
  },

  headerRight_header: {
    width: "78%",
    paddingLeft: "3%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
    },
  },

  headerRight_form: {
    "& .MuiFormLabel-root": {
      color: "#C1995A",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid rgb(0,0,0,0.87)",
    },
    "& .MuiFormHelperText-root": {
      color: "red",
    },
  },

  headerRight_form_input: {
    width: "44%",
    margin: "5% 3%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginBottom: "2vmin",
    },
  },

  headerRight_submit: {
    paddingLeft: "3%",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      display: "block !important",
    },
  },

  headerRight_button: {
    background: "#35352F",
    color: "#f2efe9",
    width: "39%",
    height: "82px",
    "&:hover": {
      background: "#121211",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginBottom: "2vmin",
    },
  },

  headerRight_privacy: {
    width: "55%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
    },
  },

  common_margin: {
    marginBottom: "2vh",
  },

  left_text: {
    paddingBottom: "10vh",
    [theme.breakpoints.down("md")]: {
      padding: "unset",
    },
  },

  checked_form: {
    margin: "1% 0 5% 1%",
    width: "75%",
    ["& .MuiTypography-body1"]: {
      fontWeight: "300 !important",
      fontSize: `${12 * 0.75}px !important`,
      [theme.breakpoints.up("sm")]: {
        fontSize: `${14 * 0.75}px !important`,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: `${17 * 0.75}px !important`,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: `${20 * 0.75}px !important`,
      },
    },
  },
}));

const rules = [
  {
    field: "email",
    method: "isEmpty",
    validWhen: false,
    message: "Email is required.",
  },
  {
    field: "phone",
    method: "isEmpty",
    validWhen: false,
    message: "Phone is required.",
  },
  {
    field: "name",
    method: "isEmpty",
    validWhen: false,
    message: "Full Name is required.",
  },
  {
    field: "consent",
    method: "isEmpty",
    validWhen: false,
    message: "The Consent is a required field.",
  },
  {
    field: "email",
    method: "isEmail",
    validWhen: true,
    message: "The email must be a valid email address.",
  },
];

const validator = new Validator(rules);

export default function Header() {
  const classes = useStyles();

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
    property: "HDB",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    let { name, value } = e.target;
    let newErr = errors;
    if (name === "consent") {
      value = e.target.checked;
    }
    if (name === "phone" && value.length > 8) {
      return;
    }
    delete newErr[name];
    setErrors(newErr);
    setDataForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let err = validator.validate(dataForm);
    if (dataForm.phone.length > 0 && !/^[6|8|9]\d{7}/g.test(dataForm.phone)) {
      err["phone"] = "Invalid Number";
    }
    setErrors(err);
    if (_.isEmpty(err)) {
      const data = {
        contact: {
          first_name: dataForm.name.split(" ").slice(0, -1).join(" "),
          last_name: dataForm.name.split(" ").slice(-1).join(" "),
          mobile_number: dataForm.phone,
          email: dataForm.email,
          // propertyType: dataForm.property,
        },
      };

      try {
        setLoading(true);
        await post(`/api/contacts`, data);
        setTimeout(() => {
          setDataForm({
            name: "",
            email: "",
            phone: "",
            property: "HDB",
            consent: false,
          });
        }, 1000);
        setTimeout(() => {
          // router.push("/thank-you");
        }, 1500);
      } catch (error) {
        console.log("ERROR post form =====>", error.message);
      }
      setLoading(false);
    }
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 35000,
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 10,
    pauseOnHover: true,
    cssEase: "linear",
    variableWidth: true,
  };

  return (
    <>
      <div className={classes.header}>
        <Grid container direction="row" style={{ height: "100%" }}>
          <Grid item lg={5} md={12} className={classes.rowHeader_left}>
            <div className={classes.rowHeader_left_logo}>
              <Image
                src="/images/Group_31.png"
                alt="Logo delux"
                width={261}
                height={61}
              />
            </div>
            <div className={`${classes.divCenter} ${classes.rowHeader}`}>
              <div className={classes.left_text}>
                <Typography variant="h1" className={classes.common_margin}>
                  Home loans made simple
                </Typography>
                <Typography variant="subtitle1">
                  Helping anyone who desires to own a home, save money and live
                  better
                </Typography>
              </div>
            </div>
            <div className={`${classes.circleCenter} ${classes.divCenter}`}>
              <Image src="/images/Group_10.png" width={92.28} height={65.4} />
            </div>
          </Grid>

          <Grid
            item
            lg={7}
            md={12}
            className={`${classes.headerRight} ${classes.divCenter}`}
          >
            <div>
              <Typography
                className={`${classes.headerRight_header} ${classes.common_margin}`}
                variant="h3"
              >
                Get your personalised rate within 12 hours
              </Typography>
              <form
                className={classes.headerRight_form}
                noValidate
                autoComplete="off"
              >
                <TextField
                  name="name"
                  className={classes.headerRight_form_input}
                  id="standard-basic"
                  label="Full Name*"
                  value={dataForm.name}
                  onChange={handleChange}
                  helperText={errors.name}
                />
                <TextField
                  className={classes.headerRight_form_input}
                  id="standard-basic"
                  label="Email*"
                  name="email"
                  value={dataForm.email}
                  onChange={handleChange}
                  helperText={errors.email}
                />
                <TextField
                  className={classes.headerRight_form_input}
                  id="standard-basic"
                  label="Phone Number*"
                  name="phone"
                  value={dataForm.phone}
                  onChange={handleChange}
                  helperText={
                    _.isEmpty(errors.phone) ? (
                      <span style={{ color: "black" }}>
                        [Phone number starting with 6,8,9 and only 8 digits in
                        total]
                      </span>
                    ) : (
                      errors.phone
                    )
                  }
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">(+65)</InputAdornment>
                    ),
                  }}
                />
                <FormControl className={classes.headerRight_form_input}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Property Type
                  </InputLabel>
                  <NativeSelect
                    id="demo-customized-select-native"
                    value={dataForm.property}
                    onChange={handleChange}
                    name="property"
                  >
                    <option>HDB</option>
                    <option>EC</option>
                    <option>Condo</option>
                    <option>Landed</option>
                    <option>Commercial</option>
                  </NativeSelect>
                </FormControl>
                <FormControl className={classes.checked_form}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={dataForm.consent}
                        onChange={handleChange}
                        color="primary"
                        style={{ padding: "4% 4%" }}
                        name="consent"
                      />
                    }
                    label="I consent to be contacted by DeluxMortgage for any follow
                      up action regarding my mortgage enquiry"
                  />
                  <FormHelperText>{errors.consent}</FormHelperText>
                </FormControl>
              </form>
              <div
                className={`${classes.divCenter} ${classes.headerRight_submit}`}
              >
                <Link href="/thank-you" passHref>
                  <Button
                    onClick={submitForm}
                    className={classes.headerRight_button}
                  >
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      <Typography variant="subtitle1">GET RATES NOW</Typography>
                    )}
                  </Button>
                </Link>

                <Typography
                  variant="subtitle2"
                  className={classes.headerRight_privacy}
                >
                  Expect a non-obligatory call from us within the next 12 hours
                  upon submitting your contact details.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.divCenter}>
        <div className={classes.headerIntro}>
          <Slider {...settings}>
            <div className={classes.divCenter}>
              <Typography
                variant="subtitle2"
                className={classes.headerRight_privacy}
                style={{ width: "fit-content", padding: "0 5vmin" }}
              >
                Private Resale - 2 Years Fixed: 1.10% | 3 Years Fixed: 1.15% | 4
                Years Fixed: 1.58% | 5 Years Fixed: 1.68% | Floating: 0.87%
              </Typography>
            </div>
            <div className={classes.divCenter}>
              <Typography
                variant="subtitle2"
                className={classes.headerRight_privacy}
                style={{ width: "fit-content", padding: "0 5vmin" }}
              >
                HDB Resale - 2 Years Fixed: 1.18% | 3 Years Fixed: 1.25% | 5
                Years Fixed: 1.40% | Floating: 0.97%
              </Typography>
            </div>
            <div className={classes.divCenter}>
              <Typography
                variant="subtitle2"
                className={classes.headerRight_privacy}
                style={{ width: "fit-content", padding: "0 5vmin" }}
              >
                Private Under Construction - 1M SORA: 1.05% | 3M SORA: 0.97% |
                1M SIBOR: 1.02% | 3M SIBOR: 1.12%
              </Typography>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
