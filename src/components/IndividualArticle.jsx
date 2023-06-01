import { useState } from "react";
import CommentsList from "./CommentsList";
import Comments from "./Comments";

function IndividualArticle({
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
  const handleHideComments = () => {
    setShowComments(false);
  };

  return (
    <article className="IndividualArticle">
      <h1>{title}</h1>
      <p className="dateAndcomments">🕙 {date}</p>
      <img src={imageUrl} alt={title} />
      <p className="author">
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
          <p className="commentsspan">
            <span
              className="commentsspan"
              onClick={handleHideComments}
              style={{ cursor: "pointer" }}
            >
              Hide comments ⌃
            </span>
          </p>
        </>
      )}

      <p className="article-content">{body}</p>
    </article>
  );
}

export default IndividualArticle;
