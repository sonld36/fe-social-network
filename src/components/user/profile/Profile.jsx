import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import "./profile.css"

const Profile = props => {
  return (
    <div className='profile-container'>
      <h2 className='profile-title'>Giới thiệu</h2>
      
      <div className='education flex line-information'>
      <SchoolIcon />
      <p className='ml-2'>Học tại trường đại học bách khoa hà nội</p>
      </div>

      <div className='address-current flex line-information'>
        <HomeIcon />
        <p className='ml-2'>Đang ở Hà Nội</p>
      </div>
 
      <div className='come-from flex line-information'>
        <LocationOnIcon />
        <p className='ml-2'>Đến từ Thanh Hóa</p>
      </div>

      <div className='created-at flex line-information'>
        <WatchLaterIcon />
        <p className='ml-2'>Tham gia vào ngày 20/4/2022</p>
      </div>
    </div>
  );
};

Profile.propTypes = {

};

export default Profile;