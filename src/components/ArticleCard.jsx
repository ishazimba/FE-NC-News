import { Link } from "react-router-dom";

function ArticleCard({
  article_id,
  title,
  imageUrl,
  author,
  votes,
  created_at,
  comments,
}) {
  const date = new Date(created_at).toLocaleDateString();
  return (
    <>
      <article className="card" key={article_id} to={`articles/${article_id}`}>
        <p className="date">Date: {date}</p>

        <Link>
          <h3>{title}</h3>
        </Link>
        <img src={imageUrl} alt={title} />
        <p>By: {author}</p>
        <p>Votes: {votes}</p>
        <p>Comments: {comments}</p>
      </article>
    </>
  );
}
export default ArticleCard;
