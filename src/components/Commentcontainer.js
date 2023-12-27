
import React from 'react'
import CommentsList from './CommentsList';
import { commentsList } from '../utils/constants';

const Commentcontainer = () => {
    return (
    <div >
      <CommentsList comments={commentsList} />
  </div>
        
     );
}

export default Commentcontainer