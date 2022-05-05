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
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import TableSearch from './search/TableSearch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import debounce from "lodash/debounce";
import { searchApi } from '../../api/user/userApi';

const ariaLabel = { 'aria-label': 'description' };

Navbar.propTypes = {
  
};

const styleSearch = {
  border: "0.01px solid #1890ff",
  boxShadow: "0.5px -0.5px #1890ff" 
}

const styleForHeader = { color: "white",
  backgroundColor: "#5c8a8a", 
  width: "100%", 
  position: "sticky",
  top: 0,
  zIndex: 2}

function Navbar(props) {
  const { Header } = Layout;

  const user = JSON.parse(localStorage['user']);
  const userId = user["_id"];

  const [styleForSearch, setStyleForSearch] = useState({});
  const [displayTable, setDisplayTable] = useState(false);
  const [searched, setSearched] = useState([]);

  const handleDisplayTableSearch = (e1) => {
    setStyleForSearch(styleSearch);
    setDisplayTable(true);
  }

  const handleCloseTableSearch = (e) => {
    setStyleForSearch({});
    setDisplayTable(false);
  }

  const handleSearchChange = (e) => {
    // setSearch(e.target.value);
    handleSearch(e.target.value);
  }

  const handleSearch = useCallback(
    debounce(async (value) => {
      const userSearched = await (await searchApi.searchUser(value)).data;
      setSearched(userSearched);
      // console.log("userSearched", userSearched);
    }, 300),
    []
  );

  return (
    <>
      <Header className="header flex" style={styleForHeader}>
        <div className='cursor-pointer mt-auto flex' style={{ height: "inherit" }}>
          <WifiOutlined className='text-3xl py-4'
          />
          <h4 className='text-white text-xl p-4'>SocialNetwork</h4>

          <div className='search-style' style={styleForSearch}>
           <div style={{lineHeight: "10px", padding: "2px"}}>
           { displayTable ? <ArrowBackIcon onClick={handleCloseTableSearch} style={{ margin: "auto", }} fontSize="small" />
            : <SearchIcon style={{ margin: "auto", }} fontSize="small" color="disabled" /> }
            <Input onFocus={handleDisplayTableSearch} onChange={handleSearchChange} className='mx-1 text-white input-style' placeholder="Search" size='small' inputProps={ariaLabel} />

           </div>
            {displayTable && 
              <div className='table-search'><TableSearch handleCloseTableSearch={handleCloseTableSearch} users={searched}/> </div>
            }
          
          </div>
        </div>

        <div className='right-nav flex'>
          <Link to="/me" className='information-user flex'>
            <Avatar className='my-auto avatar-style' alt='messi' src={
           `http://localhost:3000/file/get-avatar/${userId}`} />
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