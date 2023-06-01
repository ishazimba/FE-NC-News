import { Link } from "react-router-dom";
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
  const date = new Date(created_at).toLocaleDateString();
  return (
    <article className="IndividualArticle">
      <h3>{title}</h3>
      <p>🕙 {date}</p>
      <img src={imageUrl} alt={title}></img>
      <p>By: {author}</p> <p>Votes: {votes}</p>
      <Link to={`/articles/:article_id/comments`}>
        <p>View comments: 💬 {comments}</p>
      </Link>
      <p>{body}</p>
    </article>
  );
}
export default IndividualArticleCard;
