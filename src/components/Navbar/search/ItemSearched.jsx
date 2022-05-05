import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './search.css'

ItemSearched.propTypes = {

};

function ItemSearched(props) {
  const { user } = props;
  const { firstname, lastname, _id } = user;
  return (
    <div className='item-searched'>
        <Link to= {`/user/profile/${ _id }`} className='information-user flex'>
            <Avatar className='my-auto avatar-style' alt={firstname} src={
           `http://localhost:3000/file/get-avatar/${_id}`} />
            <p style={{ margin: "auto 10px", color:"white"}}>{firstname} {lastname}</p>
        </Link>
    </div>
  );
}

export default ItemSearched;