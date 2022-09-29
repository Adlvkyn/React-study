import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div>
        <Post message={"Hello, it's my first post"} likes={"51"}/>
        <Post message={"My name is Nurgissa, i am from Almaty"} likes={"29"}/>
      </div>
    </div>
  );
}

export default MyPosts;