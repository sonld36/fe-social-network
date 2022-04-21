import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './inputpost.css'
import { Avatar, Input, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { postApi } from '../../api/post/postApi';

InputPost.propTypes = {

};

const status = {
  content : "",
  images: [],
}

function InputPost(props) {
  const {setInputPost, setLoading, postStatus, setPostStatus} = props;

  const  [contentPost, setContentPost] = useState(status);
  const [statusButton, setStatusButton] = useState(false);



  const closeInputPost = (e) => {
    setInputPost(false);
  }


  const handleChangeInput = (e) => {
    setContentPost({
      ...contentPost,
      [e.target.name]: e.target.value,
    });

    const { images } = contentPost;

    if(e.target.value.length > 0 || images.length > 0) {
      setStatusButton(true);
    } else {
      setStatusButton(false);
    }
  }

  const handleSubmitPost = async (e) => {
    setLoading(true);
    const newPost = await postApi.createPost(contentPost);
    setLoading(false);
    setInputPost(false);
    setPostStatus(!postStatus);
  }

  return (
    <div className='input-post-container'>
      <div className='input-post'>
        <div className='close-input-post' onClick={closeInputPost}>
            <CloseIcon />
          </div>
          <div className='title-input-post'>
            <p>Tạo bài viết</p>
          </div>

          <div className='information-for-post flex'>
            <Avatar className='my-auto avatar-style' alt='messi' src='https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_695/MTY4MTAyNTc0NzkwMzU0MTkz/2014-0609-lionel-messi-si-cover-x158253_tk1_001covjpg.webp' />
            <p>Le Son</p>
          </div>

          <div className='content-post'>
            <TextField
              id="standard-multiline-static"
              multiline
              placeholder="Bạn đang nghĩ gì ?"
              rows={4}
              variant="standard"
              className='text-input-style'
              name='content'
              onChange={handleChangeInput}
            />

            <div className='add-image-content'>  
              
            </div>

            <div className='submit-post'>
              <Button size='small' variant="contained" disabled={!statusButton} onClick={handleSubmitPost}>Đăng bài</Button>
            </div>

          </div>
      </div>
    </div>
  );
}

export default InputPost;