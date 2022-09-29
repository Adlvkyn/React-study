import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://img.asmedia.epimg.net/resizer/DpjTeFwaaW159RxV_W-O_3t3TSs=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YO3EXANZVFB6RBQVH5AT4NSTTY.png" />
      {props.message}
      <div>
        <span>{props.likes} likes</span>
      </div>
    </div>
  );
}

export default Post;