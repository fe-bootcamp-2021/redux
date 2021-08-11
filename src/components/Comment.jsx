import { useSelector, useDispatch } from 'react-redux';
import { addComment, changeInput } from '../libs/store/features/comment';


export default function Comment() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments);

  const clickHandler = () => {
    dispatch(addComment());
  }

  const changeHandler = (e) => {
    dispatch(changeInput(e.target.value));
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input type="text" onChange={changeHandler} />
      <button onClick={clickHandler}>Add</button>
      <div>
        {comments.map((el) => {
          return <p key={el.id}>{el.content}</p>
        })}
      </div>
    </div>
  );
}
