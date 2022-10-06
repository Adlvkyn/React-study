import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsArr = props.state.posts.map(p => <Post message={p.post} likes={p.likes} />)

  return (
    <div className={s.postsBlock}>
      <div>
        <div>
          <textarea />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>
        {postsArr}
      </div>
    </div>
  );
}

export default MyPosts;