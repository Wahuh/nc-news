import axios from "axios";

const instance = axios.create({
  baseURL: "https://speedwagon-server.herokuapp.com/api"
});

const getArticleById = async article_id => {
  const {
    data: { article }
  } = await instance.get(`/articles/${article_id}`);
  return article;
};

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
  getArticleById,
  getArticles,
  getTopics
};
