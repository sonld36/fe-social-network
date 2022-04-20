import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Banner from './banner/Banner';

const UserPage = props => {
  return (
    <div className='page-style'>
      <Banner />
    </div>
  );
};

UserPage.propTypes = {

};

export default UserPage;