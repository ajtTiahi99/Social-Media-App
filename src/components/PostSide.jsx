import React from 'react';
import Posts from './Posts/Posts';
import PostShareSection from './PostShareSection/PostShareSection';
import './PostSide.css';

const PostSide = () => {
  return (
    <div className="PostSide">
        <PostShareSection/>
        <Posts/>
    </div>
  )
}

export default PostSide