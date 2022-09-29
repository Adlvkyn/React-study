import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://tengrinews.kz/userdata/news/2022/news_471474/thumb_m/photo_399549.jpeg" />
      </div>
      <div>
        <img src="https://img.asmedia.epimg.net/resizer/DpjTeFwaaW159RxV_W-O_3t3TSs=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YO3EXANZVFB6RBQVH5AT4NSTTY.png" />
      </div>
      <MyPosts/>
    </div>
  );
}

export default Profile;