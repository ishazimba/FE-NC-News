import { useState } from "react";
import CommentsList from "./CommentsList";
import Comments from "./Comments";

function IndividualArticleCard({
  title,
  created_at,
  comments,
  imageUrl,
  author,
  votes,
  body,
}) {
  const [showComments, setShowComments] = useState(false);

  const date = new Date(created_at).toLocaleDateString();

  const handleViewComments = () => {
    setShowComments(true);
  };

  return (
    <article className="IndividualArticle">
      <h1>{title}</h1>
      <p>🕙 {date}</p>
      <img src={imageUrl} alt={title} />
      <p>
        By: {author} &nbsp;&nbsp;&nbsp; ⬆️{votes}
      </p>
      <p className="commentsspan">
        <span onClick={handleViewComments} style={{ cursor: "pointer" }}>
          View comments: 💬
        </span>
      </p>
      {showComments && (
        <>
          <Comments comments={comments} />
        </>
      )}
      <p>{body}</p>
    </article>
  );
}

export default IndividualArticleCard;
