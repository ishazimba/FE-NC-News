import axios from "axios";

const ncApi = axios.create({
  baseURL: "https://nc-news-7v3f.onrender.com/api/",
});
function fetchArticle() {
  return ncApi
    .get(`/articles`)
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => console.log(error));
}
export default fetchArticle;
