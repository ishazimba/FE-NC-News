import { useState } from "react";

import Comments from "./Comments";
import VoteAdder from "./VoteAdder";

function IndividualArticle({
  article_id,
  title,
  created_at,
  comments,
  imageUrl,
  author,
  votes,
  body,
}) {
  const [showComments, setShowComments] = useState(false);
  const [articleComments, setArticleComments] = useState(comments);

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
      <p className="author">By: {author}</p>

      <VoteAdder article_id={article_id} votes={votes} />
      <p className="commentsspan">
        <span onClick={handleViewComments} style={{ cursor: "pointer" }}>
          View comments: 💬
        </span>
      </p>

      {showComments && (
        <>
          <p className="commentsspan">
            <span onClick={handleHideComments} style={{ cursor: "pointer" }}>
              Hide comments ⌃
            </span>
          </p>
          <Comments comments={comments} />
          <p className="commentsspan">
            <span onClick={handleHideComments} style={{ cursor: "pointer" }}>
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
