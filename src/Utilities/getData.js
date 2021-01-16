import axios from "axios";

const backend = "https://niamos-strapi.herokuapp.com";
const getData = async (page) => {
  const data = await axios.get(`${backend}/${page}`).then(
    (res) => {
      return res.data;
    },
    (error) => {
      console.log(error);
    }
  );
  return data;
};

export default getData;
