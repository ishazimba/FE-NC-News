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
  const [viewCommentsText, setViewCommentsText] = useState("View comments");
  const [articleComments, setArticleComments] = useState(comments);

  const date = new Date(created_at).toLocaleDateString();

  const handleViewComments = () => {
    setShowComments(!showComments);
    if (showComments) {
      setViewCommentsText("View comments");
    } else {
      setViewCommentsText("Hide comments");
    }
  };

  return (
    <article className="IndividualArticle">
      <h1>{title}</h1>
      <p className="dateAndcomments">🕙 {date}</p>
      <div className="image-div">
        <img src={imageUrl} alt={title} />
      </div>

      <p className="author">By: {author}</p>

      <VoteAdder article_id={article_id} votes={votes} />

      <p className="commentsspan">
        <span onClick={handleViewComments} style={{ cursor: "pointer" }}>
          {viewCommentsText} 💬
        </span>
      </p>

      {showComments && (
        <>
          <Comments comments={comments} />
          <p className="commentsspan">
            <span onClick={handleViewComments} style={{ cursor: "pointer" }}>
              {viewCommentsText} ⌃
            </span>
          </p>
        </>
      )}

      <p className="article-content">{body}</p>
    </article>
  );
}

export default IndividualArticle;
