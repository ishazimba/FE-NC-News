import { useState } from "react";
import { PostComment } from "../utils/api";

function AddComments({ article_id, prevComments }) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  // const [commentPosted, setCommentPosted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const commentData = {
      username: "grumpy19",
      body: newComment,
    };
    PostComment(article_id, commentData).then((comment) => {
      setComments((prevComments) => [comment, ...prevComments]);
      setNewComment("");
    });
  };
  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <input
        className="commentInput"
        type="text"
        placeholder="Leave comment here..."
        value={newComment}
        required
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      />
      <button type="submit">Send</button>
    </form>
  );
}
export default AddComments;
