import React, { useEffect, useState } from 'react';
import Banner from '../banner/Banner';
import "../index.css"
import Profile from '../profile/Profile';
import CreatePost from "../createPost/CreatePost";
import Status from '../../Status/Status';
import { stateOfPage } from '../../../const';
import { postApi } from '../../../api/post/postApi';
import { useParams } from 'react-router-dom';
import { userApi } from '../../../api/user/userApi';
import Loading from "../../../helper/loading";



const AnotherUserPage = props => {
  const { inputPost, setInputPost, postStatus, setLoadingPage, loadingPage } = props;
  const [titlePage, setTitlePage] = useState(stateOfPage.BAI_VIET);
  const [postedStatus, setPostedStatus] = useState([]);
  const { id } = useParams();
  const [userId, setUserId] = useState();
  
  console.log("id", id);
  const [user, setUser] = useState(); 
  
  


  useEffect(() => {
    if(id != userId) {
      setUserId(id);
    }

    const fetchUser = async () => {
      const userGot = (await userApi.getUser(userId)).data;
      // console.log("user another pages", userGot);
      setLoadingPage(false);
      setUser(userGot);
    }

    const fetchStatus = async () => {
      const statuses = await (await postApi.getOwnPost(userId)).data;
      setPostedStatus(statuses);
      // console.log("user another page", user);
    }

    fetchStatus();
    fetchUser();
    
  }, [postStatus, userId]);

  

  return (
    <div>
        {loadingPage ? (<Loading />) : (
            <div className='page-style'>
            <Banner titlePage={titlePage} setTitlePage={setTitlePage} userId={userId} user={user}/>
            <div className='container-content'>
              <div className="profile">
                <Profile />
              </div>
              <div className='column-2'>
                <div className='create'>
                  <CreatePost inputPost={inputPost} setInputPost={setInputPost} userId={userId} user={user}/>
                </div>
                <div className='title-page'>
                <h1 style={{fontSize: "25px"}}>{titlePage}</h1>
                </div>
                <div className='statuses'>
                  {postedStatus.length > 0 && titlePage === stateOfPage.BAI_VIET 
                    ? postedStatus.map(tus => {
                      return <Status status={tus} userId={userId} user={user}/>
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

AnotherUserPage.propTypes = {

};

export default AnotherUserPage;