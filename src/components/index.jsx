import React, { useEffect, useState } from 'react';
import './index.css'
import Navbar from './Navbar/Navbar';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import UserPage from './user';
import InputPost from './InputPost/InputPost';
import Loading from "../helper/loading";
import AnotherUserPage from './user/anotherUser/anotherUserPage';

Home.propTypes = {

};

function Home(props) {
  const { user, jwt } = localStorage;

  const [inputPost, setInputPost] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  const [postStatus, setPostStatus] = useState(false);
  var redirect = false;

  if(!(user && jwt)) {
    redirect = true;
  }
  return (
    <div>
      {
        redirect ? (<Navigate replace to="/login" />) : (
          <div>
            <Navbar/>
            {inputPost ? <div className="input-post-style"><InputPost setInputPost={setInputPost} 
            setLoading={setLoading}
            postStatus={postStatus}
            setPostStatus={setPostStatus}/></div> : ""}
            {loading && <Loading />}

            <Routes>
              <Route path='/me' element={<UserPage inputPost={inputPost} setInputPost={setInputPost} postStatus={postStatus} loadingPage={loadingPage} setLoadingPage={setLoadingPage}/>} />
              <Route path="/user/profile/:id" element={<AnotherUserPage inputPost={inputPost} setInputPost={setInputPost} postStatus={postStatus} loadingPage={loadingPage} setLoadingPage={setLoadingPage}/>} />
            </Routes>  
          </div>  
        )
      }
    </div>
  );
}

export default Home;