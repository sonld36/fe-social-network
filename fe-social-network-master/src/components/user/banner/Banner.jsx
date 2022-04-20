import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import "./banner.css"

const Banner = props => {
  return (
    <div className='relative'>
      <div id="profile-banner-image">
        <img src="https://festivalautomobile.com/wp-content/uploads/2018/01/maybach-1.jpg" alt="cover image" />
      </div>

      <div className='avatar-banner'>
        <Avatar className='avatar-style avatar-style-page' alt='messi' src='https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_695/MTY4MTAyNTc0NzkwMzU0MTkz/2014-0609-lionel-messi-si-cover-x158253_tk1_001covjpg.webp'/>
      </div>
    </div>
  );
};

Banner.propTypes = {

};

export default Banner;