import React, { useEffect, useState } from 'react';
import Banner from './banner/Banner';
import "./index.css"
import Profile from './profile/Profile';
import CreatePost from "./createPost/CreatePost";
import Status from '../Status/Status';
import { stateOfPage } from '../../const';
import { postApi } from '../../api/post/postApi';
import Loading from '../../helper/loading';



const UserPage = props => {
  const { inputPost, setInputPost, postStatus, setLoadingPage, loadingPage } = props;
  const [titlePage, setTitlePage] = useState(stateOfPage.BAI_VIET);
  const [postedStatus, setPostedStatus] = useState([]);

  const {jwt, user} = localStorage;
  const currUser = JSON.parse(user);
  const idUser = currUser["_id"];

  console.log("currUser", currUser);


  useEffect(() => {
    const fetchStatus = async () => {
      const statuses = await (await postApi.getOwnPost(idUser)).data;
      // console.log("status", statuses);
      setPostedStatus(statuses);
      setLoadingPage(false);
    }

    fetchStatus();
    
  }, [postStatus]);

  

  return (
    <div>
      {loadingPage ? <Loading /> : (
        <div className='page-style'>
        <Banner titlePage={titlePage} setTitlePage={setTitlePage} userId={idUser} user={currUser}/>
        <div className='container-content'>
          <div className="profile">
            <Profile />
          </div>
          <div className='column-2'>
            <div className='create'>
              <CreatePost inputPost={inputPost} setInputPost={setInputPost} userId={idUser} user={currUser}/>
            </div>
            <div className='title-page'>
            <h1 style={{fontSize: "25px"}}>{titlePage}</h1>
            </div>
            <div className='statuses'>
              {postedStatus.length > 0 && titlePage === stateOfPage.BAI_VIET 
                ? postedStatus.map(tus => {
                  return <Status userId={idUser} status={tus} user={currUser}/>
                  // console.log(tus);
                }).reverse() : ""}
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

UserPage.propTypes = {

};

export default UserPage;