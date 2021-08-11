import { Button, Input, Typography, Card, Container } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addComment, getInputValue } from "../libs/store/features/comments";

export default function Comments() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.comments.inputValue);
  const comments = useSelector((state) => state.comments.comments);

  const handleCommentInputValue = (e) => {
    dispatch(getInputValue(e.target.value));
  };

  const handleAddBtn = () => {
    dispatch(addComment());
  };

  return (
    <Card>
      <Input value={inputValue} onChange={handleCommentInputValue} />
      <Button variant="outlined" color="primary" onClick={handleAddBtn}>
        Add Comment
      </Button>
      {/* <ul> */}
      {comments.map((comment, idx) => (
        <Card>
          <Container>
            <Typography color="primary" key={idx}>
              {comment}
            </Typography>
          </Container>
        </Card>
      ))}
      {/* </ul> */}
    </Card>
  );
}
