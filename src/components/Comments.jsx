import { useDispatch, useSelector } from "react-redux";
import { getInputValue, addBtn } from "../libs/store/features/comments";

export default function Comments() {
  const dispatch = useDispatch();
  const { commentData, inputValue } = useSelector((state) => state.comments);

  const handleInput = (e) => {
    dispatch(getInputValue(e.target.value));
  };
  const handleAddBtn = () => {
    dispatch(addBtn());
  };
  console.log(commentData);
  return (
    <div>
      <input value={inputValue} type="text" onChange={handleInput} />
      <button onClick={handleAddBtn}>Add comment</button>

      <ul>
        {commentData.map((comment, index) => {
          return <li key={index}>{comment}</li>;
        })}
      </ul>
    </div>
  );
}
