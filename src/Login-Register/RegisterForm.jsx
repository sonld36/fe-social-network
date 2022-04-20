import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField } from '@mui/material';
import { minMaxLength, passwordStrength, validateConfirmPassword, validEmail } from '../helper/Validation';


const RegisterForm = props => {

  const { handleChangeInput, formRegister } = props;

  const [errorField, setErrorField] = useState({});

  const handleValidation = e => {
    const { name, value } = e.target;
    // console.log("value", value);

    switch (name) {
      case 'firstname':
        setErrorField({
          ...errorField,
          [name]: minMaxLength(value, 3),
        });
        break;
      case 'lastname':
        setErrorField({
          ...errorField,
          [name]: minMaxLength(value, 2),
        });
        break;

      case 'email':
        setErrorField({
          ...errorField,
          [name]: validEmail(value),
        });
        break;

      case 'password':
        setErrorField({
          ...errorField,
          [name]: passwordStrength(value),
        });
        break;

      case 'confirmPassword':
        setErrorField({
          ...errorField,
          [name]: validateConfirmPassword(formRegister.password, value, errorField),
        });
        break;

    }
  }

  return (
    <>
      <div className='text-center'>
        <Box component="form"
          autoComplete='off'
        >
          <div>
            <TextField label="First Name"
              name='firstname'
              className='inputField'
              onChange={handleChangeInput}
              onBlur={handleValidation}
              size='small'
              error={errorField.firstname}
            /> <br></br>
            {errorField.firstname ? <span className='errorMessage'>First Name is not less than 3 characters</span> : ""}
          </div>
          <div>
            <TextField label="Last Name"
              name='lastname'
              className='inputField'
              size='small'
              onChange={handleChangeInput}
              onBlur={handleValidation}
              error={errorField.lastname}
            /> <br></br>
            {errorField.lastname ? <span className='errorMessage'>Last Name is not less than 3 characters</span> : ""}
          </div>
          <div>
            <TextField label="Email"
              name='email'
              className='inputField'
              type="email"
              size='small'
              onChange={handleChangeInput}
              onBlur={handleValidation}
              error={errorField.email}
            /> <br></br>
            {errorField.email ? <span className='errorMessage'>Email is not satisfy</span> : ""}
          </div>
          <div>
            <TextField label="Password"
              name='password'
              className='inputField'
              type="password"
              size='small'
              onChange={handleChangeInput}
              onBlur={handleValidation}
              error={errorField.password}
            /> <br></br>
            {errorField.password ? <span className='errorMessage'>Password is not enough strong yet</span> : ""}
          </div>

          <div>
            <TextField label="Confirm Password"
              name='confirmPassword'
              className='inputField'
              size='small'
              type="password"
              onChange={handleChangeInput}
              onBlur={handleValidation}
              error={errorField.confirmPassword}
            /> <br></br>
            {errorField.confirmPassword ? <span className='errorMessage'>Confirmed password is not matching with password</span> : ""}
          </div>
        </Box>
      </div>

    </>
  );
};

RegisterForm.propTypes = {

};

export default RegisterForm;