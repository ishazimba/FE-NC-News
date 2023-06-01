import { Link } from "react-router-dom";
import Comments from "./Comments";
function IndividualArticleCard({
  title,
  article_id,
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
      <h1>{title}</h1>
      <p>🕙 {date}</p>
      <img src={imageUrl} alt={title}></img>
      <p>
        By: {author} &nbsp;&nbsp;&nbsp; ⬆️{votes}
      </p>
      <Link to={`/articles/${article_id}/comments`}>
        <p>View comments: 💬 </p>
        {comments}
      </Link>

      <p>{body}</p>
    </article>
  );
}
export default IndividualArticleCard;
