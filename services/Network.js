import axios from "axios";

const domain = "https://deluxmortgageadvisory.myfreshworks.com/crm/sales";

const getHeader = () => {
  const token = "Bzfca8R2Qd-7YqKTgJD23g";
  let axiosConfig = {
    headers: {
      Authorization: `Token token=${token}`,
      "Content-Type": "application/json;charset=UTF-8",
      // 'Access-Control-Allow-Origin': '*',
    },
  };
  return axiosConfig;
};

export const post = (url, params) => {
  return new Promise((resolve, rejected) => {
    axios
      .post(domain + url, params, getHeader())
      .then(function (response) {
        return resolve(response.data);
      })
      .catch(function (error) {
        console.log(error.response);
        // handleError(error, rejected);
      });
  });
};

export const get = (url) => {
  return new Promise((resolve, rejected) => {
    axios
      .get(domain + url, getHeader())
      .then(function (response) {
        return resolve(response.data);
      })
      .catch(function (error) {
        console.log("ERROR get=====>", error.response);
        // handleError(error, rejected);
      });
  });
};

// const handleError = (error, rejected) => {
//   if (error.response) {
//     if (error.response.status === 401) {
//       // auth.logout();
//     } else if (error.response.status === 404) {
//       // window.location.href = '/error';
//     } else {
//       rejected(error);
//     }
//   } else {
//     console.log("ERROR---->", error);
//     rejected(error);
//   }
// };
