import { useEffect, useState } from "react";
import { GetCommentsById } from "../utils/api";
import CommentsList from "./CommentsList";
import { useParams } from "react-router-dom";

function Comments({}) {
  const { article_id } = useParams();

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    GetCommentsById(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [article_id]);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Comments</h1>
      <main className="commentsContainer">
        {comments.map((comment, index) => (
          <CommentsList
            key={index}
            body={comment.body}
            author={comment.author}
            votes={comment.votes}
            date={comment.created_at}
          />
        ))}
      </main>
    </>
  );
}

export default Comments;
