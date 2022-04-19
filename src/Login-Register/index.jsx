import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./index.css"
import Logo from '../Logo/Logo';
import LoginForm from './LoginForm';
import SubmitButton from './submitButton';
import { Button } from '@mui/material';
import { typeOfSubmit } from '../const';
import RegisterForm from './RegisterForm';

LoginRegisterPage.propTypes = {

};

function LoginRegisterPage(props) {

  const { typeProps } = props;
  const { LOGIN, REGISTER } = typeOfSubmit;
  const [typeSubmit, setTypeSubmit] = useState(typeProps || LOGIN);

  const [form, setForm] = useState({});

  const handleChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }



  const handleChangeSubmit = (e) => {
    e.preventDefault();
    return typeSubmit === LOGIN ? setTypeSubmit(REGISTER) : setTypeSubmit(LOGIN);
  }


  return (
    <div className='container relative'>
      <div className='text-3xl absolute top-12 relative text-center'>
        <Logo />
      </div>

      <div className='inputForm'>
        <h2 className='title line'>{typeSubmit}</h2>
        <div className='form line'>
          {typeSubmit === LOGIN ? <LoginForm formLogin={form} handleChangeInput={handleChangeInput} />
            : <RegisterForm formRegister={form} handleChangeInput={handleChangeInput} />}
        </div>
        <SubmitButton typeSubmit={typeSubmit} data={form} />

        <div className='changeTypeSubmit button'>
          <span>Let's </span>
          <a onClick={handleChangeSubmit}>{typeSubmit === LOGIN ? REGISTER : LOGIN}</a>
        </div>

      </div>


    </div>

  );
}

export default LoginRegisterPage;