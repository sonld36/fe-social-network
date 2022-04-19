import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../features/user/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';

SubmitButton.propTypes = {

};

function SubmitButton(props) {
  const { typeSubmit, data } = props;
  const dispatch = useDispatch();

  //xu ly api 
  const handleSubmit = async (e) => {
    try {
      const action = register(data);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      console.log("user", user);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='button line'>
      <Button variant="outlined" onClick={handleSubmit}>{typeSubmit}</Button>
    </div>
  );
}

export default SubmitButton;