
import { useDispatch, useSelector } from "react-redux";
import { setValue, addComment } from "../libs/store/features/comment";


let divStyle = { display: "flex", flexDirection: "column", width: "100px" };

export default function Comment() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments)
  let input;

  const handleInput = () => {
    dispatch(setValue(input.value));
  };

  const handleClick = () => {
    dispatch(addComment(input.value))
    input.value = ""
  }
 

  return (
    <div className={divStyle}>
      <input
        onChange={handleInput}
        type="textarea"
        ref={(node) => {
          input = node;
        }}
      />
      <button onClick={handleClick}>Add comment</button>
      <div comments={comments}>
        {comments && comments.map((comment) => {
            return <li>{comment}</li>
        })}
       </div> 
    </div>
  );
}
