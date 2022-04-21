import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import React from 'react';
import "./banner.css";
import { stateOfPage } from '../../../const';

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
  const {titlePage, setTitlePage} = props;

  const switchPage = (e) => {
    setTitlePage(e.target.textContent); 
  }

  const buttons = [
    <Button key="post" onClick={switchPage} className='button-features'>{stateOfPage.BAI_VIET}</Button>,
    <Button key="images" onClick={switchPage} className='button-features'>{stateOfPage.ANH}</Button>,
    <Button key="friends" onClick={switchPage} className='button-features'>{stateOfPage.BAN_BE}</Button>,
  ];

  

  return (
    <div className='banner' style={{borderBottom: "1px solid black"}}>
      <div id="profile-banner-image">
        <img src="https://festivalautomobile.com/wp-content/uploads/2018/01/maybach-1.jpg" alt="cover image" />

        <ThemeProvider theme={theme}>
          <label htmlFor="contained-button-file" className='button-change-banner'>
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" color="neutral" component="span" size='small'>
              Thay ảnh bìa
              <IconButton color="neutral" aria-label="upload picture" component="span" 
              style={{backgroundColor:"white", width: "25px", height:"25px", marginLeft:"5px"}}>
                <PhotoCamera />
              </IconButton>
            </Button>
          </label>
        </ThemeProvider>
      </div>
      
      <div className='avatar-banner'>
        <Avatar className='avatar-style avatar-style-page' alt='messi' src='https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_695/MTY4MTAyNTc0NzkwMzU0MTkz/2014-0609-lionel-messi-si-cover-x158253_tk1_001covjpg.webp'/>
        <label htmlFor="icon-button-file" className='button-change-avatar'>
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton aria-label="upload picture" component="span" title='Thay avatar'>
            <PhotoCamera />
          </IconButton>
        </label>
        <div className='name-user-banner'>
          <p style={{margin: "0 auto"}}>Le Son</p>
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