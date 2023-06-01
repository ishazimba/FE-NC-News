function CommentsList({ body, author, votes, created_at }) {
  const date = new Date(created_at).toLocaleDateString();
  return (
    <article className="comments">
      <p className="dateAndcomments">
        {date} &nbsp;&nbsp; ⬆️ {votes}
      </p>
      <p>Author: {author}</p>
      <p className="commentsbody">{body}</p>
    </article>
  );
}
export default CommentsList;
