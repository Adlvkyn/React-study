import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.profileWall}>
        <img src="https://tengrinews.kz/userdata/news/2022/news_471474/thumb_m/photo_399549.jpeg" />
      </div>
      <div className={s.profileInfo}>
        <img src="https://img.asmedia.epimg.net/resizer/DpjTeFwaaW159RxV_W-O_3t3TSs=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YO3EXANZVFB6RBQVH5AT4NSTTY.png" />
      </div>
    </div>
  );
}

export default ProfileInfo;