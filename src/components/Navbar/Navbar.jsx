import { WifiOutlined } from '@ant-design/icons';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const ariaLabel = { 'aria-label': 'description' };

Navbar.propTypes = {

};

function Navbar(props) {
  const { Header } = Layout;

  const styleForHeader = { color: "white",
  backgroundColor: "#5c8a8a", 
  width: "100%", 
  position: "fixed",
  zIndex: 2}

  const user = JSON.parse(localStorage['user']);

  

  return (
    <>
      <Header className="header flex" style={styleForHeader}>
        <div className='cursor-pointer mt-auto flex' style={{ height: "inherit" }}>
          <WifiOutlined className='text-3xl py-4'
          />
          <h4 className='text-white text-xl p-4'>SocialNetwork</h4>

          <div className='search-style'>
            <SearchIcon style={{ margin: "auto" }} fontSize="small" color="disabled" />
            <Input className='mx-1 text-white input-style' placeholder="Search" size='small' inputProps={ariaLabel} />
          </div>
        </div>

        <div className='right-nav flex'>
          <Link to="/me" className='information-user flex'>
            <Avatar className='my-auto avatar-style' alt='messi' src='https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_695/MTY4MTAyNTc0NzkwMzU0MTkz/2014-0609-lionel-messi-si-cover-x158253_tk1_001covjpg.webp' />
            <p style={{ margin: "auto 10px", color:"white"}}>{ user['firstname'] }</p>
          </Link>
          <div className='features flex'>

            <Tooltip title="Friends">
              <div className='icon-style' >
                <PeopleIcon fontSize="small" />
              </div>
            </Tooltip>
            <Tooltip title="Message">
              <div className='icon-style' >
                <ChatIcon fontSize="small" />
              </div>
            </Tooltip>


            <Tooltip title="Notification">
              <div className='icon-style' >
                <NotificationsIcon fontSize="small" />
              </div>
            </Tooltip>

            <div className='option icon-style'>
              <ArrowDropDownIcon fontSize="small" />
            </div>
          </div>
        </div>


      </Header>
    </>
  );
}

export default Navbar;