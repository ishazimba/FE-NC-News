function CommentsList({ body, author, votes, date }) {
  return (
    <article className="comments">
      <p>
        By: {author} &nbsp;&nbsp; ⬆️ {votes} &nbsp;&nbsp; {date}
      </p>
      <p className="commentsbody">{body}</p>
    </article>
  );
}
export default CommentsList;
