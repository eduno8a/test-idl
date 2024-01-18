import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import logo from '../assets/logoibl.png'


function Headerr() {
  // const [contador, setContador] = useState(0);
  const [dataValue, setDatos] = useState({email:'',pass:''})

  function handleChange(event) {
    setDatos({
      ...dataValue,
      [event.target.name]: event.target.value
    })
  }
  function formSubmit(){
    window.location.href = '/dashboard'
  }
  const validateEmail = (email) => {
    var valEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

     const validate = {email};
    if(valEmail.test(email)){
      return true
    }else{
      return false
    }
  }
  return (
    <div className='login_container'>
      <div className='login_form_container'>
          <img className='login_logo' src={logo}/>
          <h2>LOGIN</h2>
          <TextField
            required
            id="outlined-required"
            label="Email"
            name="email"
            onChange={handleChange}
            defaultValue={dataValue.email}
          />
          <div className='separatorTB10'></div>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name="pass"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <div className='separatorTB10'></div>
          <button className="btn1" disabled={!validateEmail(dataValue.email) ||  dataValue.pass == '' ? true : false} onClick={() => formSubmit()}>LOGIN</button>
      </div>
    </div>
  );
}

export default Headerr