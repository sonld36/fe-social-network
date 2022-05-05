import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useEffect, useState } from 'react';
import "./banner.css";
import { stateOfPage } from '../../../const';
import { fileApi } from '../../../api/user/userApi';

const Input = styled('input')({
  display: 'none',
});

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});



const Banner = props => {
  const {titlePage, setTitlePage, userId, user} = props;
  
  const [bannerUpload, setBannerUpload] = useState(null);
  const [previewBannerImage, setPreviewBannerImage] = useState(null);
  // const [previewAvatarImage, setPreviewAvatarImage] = useState(null);
  // const [avatarUpload, setAvatarUpload] = useState(null);
  const [reload, setReload] = useState(false);
 
  

  const switchPage = (e) => {
    setTitlePage(e.target.textContent); 
  }

  const buttons = [
    <Button key="post" onClick={switchPage} className='button-features'>{stateOfPage.BAI_VIET}</Button>,
    <Button key="images" onClick={switchPage} className='button-features'>{stateOfPage.ANH}</Button>,
    <Button key="friends" onClick={switchPage} className='button-features'>{stateOfPage.BAN_BE}</Button>,
  ];

  const onBannerChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setPreviewBannerImage(URL.createObjectURL(file));
    setBannerUpload(file);
  }

  const onChangeAvatar = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);
    const resp = (await fileApi.postAvatar(formData)).data;
    if(resp) {
      setReload(!reload);
    }
  }

  const handleUploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("banner", bannerUpload);
    const resp = await (await fileApi.postBanner(formData)).data;
    if(resp) {
      // console.log("hahaha");
      // window.location.reload(false);
      setPreviewBannerImage(null);
      setBannerUpload(null);
      setReload(!reload);
    }
    
  }

  

  return (
    <div className='banner' style={{borderBottom: "1px solid black"}}>
      <div id="profile-banner-image">
        {previewBannerImage ? <img src={previewBannerImage} alt="preview image" /> : <img src={`http://localhost:3000/file/get-banner/${userId}?reload=${reload}`} alt="cover image" />
}
        <ThemeProvider theme={theme}>
          <label htmlFor="contained-button-file" className='button-change-banner'>
            { previewBannerImage ? (<Button onClick={handleUploadImage} variant="contained" color="neutral" component="span" size='small'>
              Xác nhận
            </Button>) 
            : (
            <div>
              <Input accept="image/*" onChange={onBannerChange} id="contained-button-file" type="file" />
              <Button variant="contained" color="neutral" component="span" size='small'>
              Thay ảnh bìa
              <IconButton color="neutral" aria-label="upload picture" component="span" 
              style={{backgroundColor:"white", width: "25px", height:"25px", marginLeft:"5px"}}>
                <PhotoCamera />
              </IconButton>
            </Button>
            </div>) }
          </label>
        </ThemeProvider>
      </div>
      
      <div className='avatar-banner'>
        <Avatar className='avatar-style avatar-style-page'
          alt='avatar' 
          src={
           `http://localhost:3000/file/get-avatar/${userId}?reload=${reload}`}
        />
        <label htmlFor="icon-button-file" className='button-change-avatar'>
          <Input accept="image/*" id="icon-button-file" type="file" onChange={onChangeAvatar} />
          <IconButton aria-label="upload picture" component="span" title='Thay avatar'>
            <PhotoCamera />
          </IconButton>
        </label>
        <div className='name-user-banner'>
          <p style={{margin: "0 auto", width: "max-content"}}>{user.firstname} {user.lastname}</p>
        </div>
      </div>

      <div className='features-user-banner'>
        <Box
        sx={{
          display: 'flex',
          '& > *': {
            m: 1,
          },
        }} className="content-features">
        <ButtonGroup orientation="horizontal" aria-label="vertical contained button group" variant="text"
        >
          {buttons}
        </ButtonGroup>
      </Box>
      </div>  

    </div>
  );
};

Banner.propTypes = {

};

export default Banner;