import { useSelector, useDispatch } from "react-redux";
import {
  add,
  save,
  edit,
  currentComment,
} from "../../libs/store/features/comment";
import styles from "./Comment.module.css";

export default function Comment() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => {
    return state.comment.comments;
  });
  const editComment = useSelector((state) => {
    return state.comment.edit;
  });

  const handleComment = (ev) => {
    ev.stopPropagation();
    dispatch(currentComment(ev.target.value));
  };

  const handleAddComment = (ev) => {
    ev.stopPropagation();
    dispatch(add());
  };

  const handleSave = (ind) => (ev) => {
    ev.stopPropagation();
    dispatch(save(ind));
  };

  const handleEdit = (el) => (ev) => {
    ev.stopPropagation();
    dispatch(edit(el));
  };

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <button onClick={handleAddComment}>Add Comment</button>
      </div>

      {comments.length > 0 ? (
        comments.map((el, ind) => {
          return (
            <div className={styles.card} key={Math.random()}>
              <p>{el.date}</p>
              <p>
                Comment:{" "}
                {el.comment.trim() === "" || el.id === editComment ? (
                  <input
                    type="text"
                    onChange={handleComment}
                    defaultValue={el.comment}
                  />
                ) : (
                  el.comment
                )}
              </p>
              <p>
                <button onClick={handleSave(ind)}>Save</button>
                <button onClick={handleEdit(el)}>Edit</button>
              </p>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
