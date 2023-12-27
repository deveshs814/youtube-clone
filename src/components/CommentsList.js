import React from 'react';
import Comment from './comment';
import { Paper, styled } from '@mui/material';

// Define a styled Paper component for the container
const StyledContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginLeft: theme.spacing(2),
  borderLeft: `2px solid ${theme.palette.grey[400]}`,
}));

const CommentsList = ({ comments }) => {
  // Early return
  if (!comments) return null;

  return (
    <div  style={{ margin: '10px 0' }}>
      {comments.map((comment, index) => (
        <StyledContainer key={index}>
          <Comment data={comment} />

          {/* Recursively render the comments list component if replies exist */}
          {comment?.replies && (
            <CommentsList comments={comment.replies} />
          )}
        </StyledContainer>
      ))}
    </div>
  );
};

export default CommentsList;
