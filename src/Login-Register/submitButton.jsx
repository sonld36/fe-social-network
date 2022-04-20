import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login, register } from '../features/user/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { typeOfNoti, typeOfSubmit } from '../const';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';


SubmitButton.propTypes = {

};

function SubmitButton(props) {
  const { typeSubmit, data, setLoading } = props;
  const { REGISTER, LOGIN } = typeOfSubmit;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //xu ly api 
  const handleSubmit = async () => {
    setLoading(true);
    var action = undefined;
    var noti = undefined;
    if(typeSubmit == REGISTER) {
      action = register(data);
      noti = typeOfNoti.REGISTER;
    } else {
      action = login(data);
      noti = typeOfNoti.LOGIN;
    }

    try {
      const resultAction = await dispatch(action);
      
      const user = unwrapResult(resultAction);
      console.log(user);
      if(user) {
        setLoading(false);
        navigate("/");
      } else {
          setLoading(false);
          notification.error({...noti.error, duration:2});
      }
    } catch (err) {
      
    }
  }

  return (
    <div className='button line'>
      <Button variant="outlined" onClick={handleSubmit}>{typeSubmit}</Button>
    </div>
  );
}

export default SubmitButton;