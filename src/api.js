import axios from "axios";
import { async } from "q";

const apiUrl = "https://speedwagon-server.herokuapp.com/api";

const getArticles = async () => {
  const {
    data: { articles }
  } = await axios.get(`${apiUrl}/articles`);
  return articles;
};

const getTopics = () => {
  axios.get(`${apiUrl}/topics`).then(response => console.log(response.data));
};

export default {
  getArticles,
  getTopics
};
