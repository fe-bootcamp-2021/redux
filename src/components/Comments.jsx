import { Button, Input, Typography, Card, Container } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addComment, getInputValue } from "../libs/store/features/comments";

export default function Comments() {
  const dispatch = useDispatch();
  const { inputValue, comments } = useSelector((state) => state.comments);

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
      {comments.map((comment, idx) => (
        <Card>
          <Container>
            <Typography color="primary" key={idx}>
              {comment}
            </Typography>
          </Container>
        </Card>
      ))}
    </Card>
  );
}
