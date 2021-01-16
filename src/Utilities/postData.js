import axios from "axios";

const backend = "https://niamos-strapi.herokuapp.com";
const getData = async (page, data, alertMessage) => {
  await axios.post(`${backend}/${page}`, data).then(
    (res) => {
      console.log(res);
      alert(alertMessage);
    },
    (error) => {
      console.log(error);
    }
  );
};

export default getData;
