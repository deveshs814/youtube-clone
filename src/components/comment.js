import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Paper, Typography, styled } from '@mui/material';

// Define a styled Paper component
const StyledPaper = styled(Paper)(({ theme }) => ({
  margin: `${theme.spacing(2)} 0`, // Add margin to top and bottom
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[100],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

// Define a styled div for the flexRow class
const FlexRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

// Define a styled Typography for the icon and name
const StyledName = styled(Typography)({
  fontSize: '1rem',
});

// Define a styled Typography for the comment
const StyledComment = styled(Typography)({
  marginLeft: '8px', // Adjust the margin as needed
  fontSize: '0.875rem',
});

const Comment = ({ data }) => {
  return (
    <StyledPaper>
      <FlexRow>
        <AiOutlineUser style={{ fontSize: '1.5rem', marginRight: '8px' }} />
        <StyledName component="p">{data?.name}</StyledName>
      </FlexRow>
      <StyledComment component="p">{data.comment}</StyledComment>
    </StyledPaper>
  );
};

export default Comment;
