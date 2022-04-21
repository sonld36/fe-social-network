import PublicIcon from '@mui/icons-material/Public';
import { Avatar } from '@mui/material';
import React from 'react';
import "./status.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

Status.propTypes = {

};

const buttons = [
  <Button key="like" className='button-option'>Thích</Button>,
  <Button key="comment" className='button-option'>Bình luận</Button>,
  <Button key="share" className='button-option'>Chia sẻ</Button>,
];

function Status(props) {

  const { status } = props;

  return (
    <div className='status'>
      <div className='information-status flex'>
          <Avatar className='my-auto avatar-style' alt='messi' 
          src='https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_695/MTY4MTAyNTc0NzkwMzU0MTkz/2014-0609-lionel-messi-si-cover-x158253_tk1_001covjpg.webp' />
          <div className='user-date-privacy'>
            <div className='name-user'>
              <p className=''>Le Son</p>
            </div>
            <div className='flex'>
              <p className='createdAt'>{status.createdAt}</p>
              <div className='privacy-icon'>
                <PublicIcon fontSize='15px'/>
              </div>
            </div>
          </div>
      </div>

      <div className='content-status'>
        <div className='text-content'>
          <p>{status.content}</p>
        </div>

        <div className='image-content'>
          <img className='image-content-style' src='https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_695/MTY4MTAyNTc0NzkwMzU0MTkz/2014-0609-lionel-messi-si-cover-x158253_tk1_001covjpg.webp' alt=""/>
        </div>
      </div>

      <div className='option-status'>
        <Box
        sx={{
          display: 'flex',
          '& > *': {
            m: 1,
          },
        }} className="option-status-box" >
        <ButtonGroup orientation="horizontal" aria-label="vertical contained button group" variant="text"
        >
          {buttons}
        </ButtonGroup>
      </Box>
      </div> 
    </div>
  );
}

export default Status;