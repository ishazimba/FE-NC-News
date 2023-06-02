import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-7v3f.onrender.com/api/",
});
export function fetchArticle() {
  return api
    .get(`/articles`)
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => console.log(error));
}
export function GetArticleById(article_id) {
  return api
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((error) => {
      console.log(error);
    });
}
export function GetRecentArticles(desc) {
  return api
    .get(`/articles?order=${desc}`)
    .then(({ data }) => {
      const articles = data.articles.map((article) => {
        return {
          article_id: article.article_id,
          title: article.title,
          imageUrl: article.article_img_url,
          author: article.author,
          votes: article.votes,
          created_at: article.created_at,
          comments: article.comment_count,
        };
      });
      return articles;
    })
    .catch((error) => {
      console.log(error);
    });
}
export function GetCommentsById(article_id) {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch((error) => {});
}
export function PatchVotesById(article_id, updateVoteBy) {
  const body = {
    votes_inc_by: updateVoteBy,
  };
  return api
    .patch(`/articles/${article_id}`, body)
    .then(({ data }) => {
      return data.article;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
}
