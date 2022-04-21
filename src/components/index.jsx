import React, { useState } from 'react';
import './index.css'
import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import UserPage from './user';
import InputPost from './InputPost/InputPost';
import Loading from "../helper/loading";

Home.propTypes = {

};

function Home(props) {
  const [inputPost, setInputPost] = useState(false);
  const [loading, setLoading] = useState(false);
  const [postStatus, setPostStatus] = useState(false);

  return (
    <div>
      <Navbar/>
      {inputPost ? <div className="input-post-style"><InputPost setInputPost={setInputPost} 
      setLoading={setLoading}
      postStatus={postStatus}
      setPostStatus={setPostStatus}/></div> : ""}
      {loading && <Loading />}

      <Routes>
        <Route path='/me' element={<UserPage inputPost={inputPost} setInputPost={setInputPost} postStatus={postStatus}/>} />
      </Routes>
    </div>
  );
}

export default Home;