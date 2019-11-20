import React from 'react';
import './Post.css';

export default ({ post }) => {
  const { author, date, content } = post;
  const newtext = content.split('\n');
  return (
    <div className="postPrincipal">
      <div className="profileContent">
        <div className="imageAndText"></div>
        <img src={author.avatar} alt={author.avatar} />
        <div className="post">
          <strong>{author.name}</strong>
          <p>{date}</p>
        </div>
      </div>
      <p className="postText">{
          newtext.map(i=>{
            return <p>{i}</p>
          })
      }</p>
    </div>

  )
}

