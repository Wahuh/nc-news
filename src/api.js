import axios from "axios";

const instance = axios.create({
  baseURL: "https://speedwagon-server.herokuapp.com/api"
});

const getArticles = async topic => {
  const {
    data: { articles }
  } = await instance.get("/articles", {
    params: {
      topic
    }
  });
  return articles;
};

const getTopics = () => {
  instance.get("/topics").then(response => console.log(response.data));
};

export default {
  getArticles,
  getTopics
};
