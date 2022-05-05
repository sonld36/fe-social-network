import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField } from '@mui/material';
import { authApi } from '../api/auth/authApi';
import { useNavigate } from 'react-router-dom';


const LoginForm = props => {

  const { handleChangeInput } = props;
  const { user, jwt} = localStorage;
  const navigate = useNavigate();

  useEffect(() => {
    const checkJwt = async () => {
      if(user && jwt) {
        const resp = (await authApi.checkJwt(jwt)).data
        
        if(resp === true) {
          navigate("/");
        } else {
          navigate("/login")
        } 

      }
    }

    checkJwt();
  }, [])

  return (

    <>
      <div className='text-center'>
        <Box component="form"
          autoComplete='off'>
          <TextField label="Email"
            name='email'
            className='inputField'
            type="email"
            size='small'
            onChange={handleChangeInput}
          />
          <TextField label="Password"
            name='password'
            className='inputField'
            type="password"
            size='small'
            onChange={handleChangeInput}
          />
        </Box>
      </div>

    </>
  );
};

LoginForm.propTypes = {

};

export default LoginForm;