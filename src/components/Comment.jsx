import "../App.css";

import { useSelector, useDispatch } from "react-redux";
import { addComment, changeCommntVal } from "../libs/store/features/comment";

export default function Comments() {
  const dispatch = useDispatch();
  const commentVal = useSelector((state) => state.comment.commentVal);
  const comments = useSelector((state) => state.comment.comments);

  const handleCommentValue = (e) => {
    dispatch(changeCommntVal(e.target.value));
  };

  const passComment = () => {
    dispatch(addComment());
  };

  return (
    <div className="main-comment">
      <textarea
        className="comment-inp"
        onChange={handleCommentValue}
        value={commentVal}
      ></textarea>
      <button className="comment-btn" onClick={passComment}>
        Add Comment
      </button>
      <div>
        {comments.map((el) => {
          return <h2 className="comment">{el}</h2>;
        })}
      </div>
    </div>
  );
}
