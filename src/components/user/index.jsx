import React, { useEffect, useState } from 'react';
import Banner from './banner/Banner';
import "./index.css"
import Profile from './profile/Profile';
import CreatePost from "./createPost/CreatePost";
import Status from '../Status/Status';
import { stateOfPage } from '../../const';
import { postApi } from '../../api/post/postApi';


const UserPage = props => {
  const { inputPost, setInputPost, postStatus } = props;
  const [titlePage, setTitlePage] = useState(stateOfPage.BAI_VIET);
  const [postedStatus, setPostedStatus] = useState([]);

  useEffect(() => {
    const fetchStatus = async () => {
      const statuses = await (await postApi.getOwnPost()).data;
      setPostedStatus(statuses);
    }

    fetchStatus();
    
  }, [postStatus]);
  

  return (
    <div className='page-style'>
      <Banner titlePage={titlePage} setTitlePage={setTitlePage}/>
      <div className='container-content'>
        <div className="profile">
          <Profile />
        </div>
        <div className='column-2'>
          <div className='create'>
            <CreatePost inputPost={inputPost} setInputPost={setInputPost}/>
          </div>
          <div className='title-page'>
          <h1 style={{fontSize: "25px"}}>{titlePage}</h1>
          </div>
          <div className='statuses'>
            {postedStatus.length > 0 && titlePage === stateOfPage.BAI_VIET 
              ? postedStatus.map(tus => {
                return <Status status={tus}/>
                // console.log(tus);
              }).reverse() : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

UserPage.propTypes = {

};

export default UserPage;