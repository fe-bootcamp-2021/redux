import { useSelector, useDispatch } from "react-redux";
import {
  addComment,
  givValue,
  handleChangeCom,
  handleSaveChange,
  givChangeValue,
} from "../libs/store/features/comment";

export default function Comment() {
  const dispatch = useDispatch();

  const allComments = useSelector((state) => state.comment.allComment);

  const value = useSelector((state) => state.comment.inputValue);

  const handleChangeInput = (e) => {
    dispatch(givValue(e.target.value));
  };

  const handleAdd = () => {
    dispatch(addComment());
  };

  const onDoubleClick = (comment) => (ev) => {
    ev.stopPropagation();
    dispatch(handleChangeCom(comment));
  };

  const handleSave = (comment) => (ev) => {
    ev.stopPropagation();
    dispatch(handleSaveChange(comment));
  };

  const handleChangeValue = (e) => {
    dispatch(givChangeValue(e.target.value));
  };
  
  return (
    <div>
      <input
        className="border-2 border-indigo-600"
        onChange={handleChangeInput}
        value={value}
        placeholder="Add Comment"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAdd}
      >
        ADD
      </button>
      <div>
        {allComments.map((comment) => (
          <div key={comment.id} className="m-8">
            <div className={comment.class}>
              <input
                onChange={handleChangeValue}
                type="text"
                value={comment.comment}
              />
              <button
                onClick={handleSave(comment)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
            <div className="border-b-2 border-fuchsia-600">
              <div onDoubleClick={onDoubleClick(comment)}>
                {comment.comment}
              </div>
              <div>{comment.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
