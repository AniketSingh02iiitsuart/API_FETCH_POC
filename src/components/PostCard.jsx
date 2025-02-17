import React from "react";
import "../App.css";


const PostCard = ({ title, body }) => {  
  return (
    <div className="post-card">
      <h1>{title}</h1>  
      <p>{body}</p>    
    </div>
  );
};

export default PostCard;