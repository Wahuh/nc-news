import axios from "axios";

const instance = axios.create({
  baseURL: "https://speedwagon-server.herokuapp.com/api"
});

const getUserByUsername = async username => {
  const {
    data: { user }
  } = await instance.get(`/users/${username}`);
  return user;
};

const postComment = async ({ article_id, ...rest }) => {
  const {
    data: { comment }
  } = await instance.post(`/articles/${article_id}/comments`, rest);
  return comment;
};

const getArticleById = async article_id => {
  const {
    data: { article }
  } = await instance.get(`/articles/${article_id}`);
  return article;
};

const deleteCommentById = async comment_id => {
  await instance.delete(`/comments/${comment_id}`);
};

const getCommentsByArticleId = async article_id => {
  const {
    data: { comments }
  } = await instance.get(`/articles/${article_id}/comments`);
  return comments;
};

const getArticles = async query => {
  const {
    data: { articles }
  } = await instance.get("/articles", {
    params: {
      ...query
    }
  });
  return articles;
};

const getTopics = () => {
  instance.get("/topics").then(response => console.log(response.data));
};

export default {
  deleteCommentById,
  getCommentsByArticleId,
  getArticleById,
  getArticles,
  getTopics,
  getUserByUsername,
  postComment
};
