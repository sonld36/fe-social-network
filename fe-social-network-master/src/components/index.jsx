import React from 'react';
import PropTypes from 'prop-types';
import './index.css'
import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import UserPage from './user';

Home.propTypes = {

};

function Home(props) {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/me' element={<UserPage />} />
      </Routes>
    </>
  );
}

export default Home;