import { useSelector, useDispatch } from "react-redux";
import { textInp, addInp } from "../libs/store/features/comment";
import classes from './Comments.module.css'

export default function Comments() {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.text);
  const arrInfo = useSelector((state) => state.comment.comments);

  const handleInp = (e) => {
    dispatch(textInp(e.target.value));
  };

  const addComment = () => {
    dispatch(addInp());
    dispatch(textInp(""));
  };


  return (
    <div>
        <div className={classes.wrapper}>
        <button disabled={comment === ''} className={classes.button} onClick={addComment}> add </button>
        <input
        type="text"
        placeholder="your comment"
        value={comment}
        onChange={handleInp}
      />
      </div>
      <ul className={classes.ulWrapper}>
        {arrInfo.map((item, i) => (
          <li className={classes.inputItem} key={i}>
                  {item.comment} ({item.date})
              </li>
        ))}
      </ul>
    </div>
  );
}