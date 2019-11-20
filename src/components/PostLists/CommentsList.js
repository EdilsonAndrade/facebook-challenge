import React from 'react';
import './CommentsList.css';
export default ({ comment }) => {
  const { author, content } = comment;
  return (
    <div className="principal">
      <div className="commentContent">
        <img src={author.avatar} alt={author.avatar} />
        <span><strong>{author.name}</strong> {content}</span>
      </div>
    </div>



  )
}
