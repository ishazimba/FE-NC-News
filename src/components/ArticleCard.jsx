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
      <article className="card">
        <p className="date">Date: {date}</p>
        <Link key={article_id} to={`articles/${article_id}`}>
          <h3>{title}</h3>
          <img src={imageUrl} alt={title} />
          <p>By: {author}</p>
          <p>Votes: {votes}</p>
          <p>Comments: {comments}</p>
        </Link>
      </article>
    </>
  );
}
export default ArticleCard;
