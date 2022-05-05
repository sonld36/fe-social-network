import { Avatar } from '@mui/material';
import React from 'react';
import "./createpost.css";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

CreatePost.propTypes = {

};

function CreatePost(props) {
  const { setInputPost, user, userId } = props;

  const handleDisplayInputPost = (e) => {
    setInputPost(true)
  }

  return (
    <div className='create-post'>
      <div className='button-create flex'>
        <Avatar className='avatar-style' alt='messi' src={`http://localhost:3000/file/get-avatar/${userId}`}/>
        <div class="status-control" role="button" onClick={handleDisplayInputPost}>
                <span>Bạn đang nghĩ gì ?</span>
          </div>
      </div>
      <div className='option-status flex'>
        <div className='add-image flex icon-option'>
          <CameraAltIcon />
          <p className='mb-0' style={{height:"fit-content"}}>Ảnh/Video</p>
        </div>

        <div className='tag-friend flex icon-option'>
          <LocalOfferIcon />
          <p className='mb-0' style={{height:"fit-content"}}>Gắn thẻ bạn bè</p>
        </div>
      </div>

    </div>
  );
}

export default CreatePost;