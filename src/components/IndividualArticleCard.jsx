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
      <p>{body}</p>
    </article>
  );
}
export default IndividualArticleCard;
