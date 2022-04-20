import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField } from '@mui/material';


const LoginForm = props => {

  const { handleChangeInput } = props;


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