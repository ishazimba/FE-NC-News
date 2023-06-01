import { GetArticleById } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IndividualArticleCard from "./IndividualArticleCard";
function IndividualArticle() {
  const [currArticle, setCurrArticle] = useState({});
  const [isLoading, setIsLoading] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    GetArticleById(article_id)
      .then((data) => {
        setCurrArticle(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [article_id]);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <IndividualArticleCard
        key={currArticle.article_id}
        article_id={currArticle.article_id}
        title={currArticle.title}
        topic={currArticle.topic}
        author={currArticle.author}
        votes={currArticle.votes}
        imageUrl={currArticle.article_img_url}
        body={currArticle.body}
        created_at={currArticle.created_at}
        comments={currArticle.comment_count}
      />
    </>
  );
}
export default IndividualArticle;
