function CommentsList({ body, author, votes, date }) {
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
