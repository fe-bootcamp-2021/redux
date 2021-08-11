import { useSelector, useDispatch } from "react-redux";
import { textInp, getInfo } from "../libs/store/features/comment";

export default function Comments() {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.text);
  const arrInfo = useSelector((state) => state.comment.com);

  const handleInp = (e) => {
    dispatch(textInp(e.target.value));
  };

  const addComment = () => {
    dispatch(getInfo());
    dispatch(textInp(""));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="your comment"
        value={comment}
        onChange={handleInp}
      />
      <button onClick={addComment}>add</button>
      <div>
        {arrInfo.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
}
