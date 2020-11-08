import axios from "axios";

const backend = "https://niamos-strapi.herokuapp.com";
const getData = async (page) => {
  const data = await axios.get(`${backend}/${page}`).then((res, err) => {
    return res.data;
  });
  return data;
};

export default getData;
