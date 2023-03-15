import React, { useState, useRef } from "react";
import "./Login.scss";
import footballIcon from '../../assets/img/fifa.jpg'
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';

export const Login = () => {

 
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
        <SportsSoccerOutlinedIcon className="logo"></SportsSoccerOutlinedIcon>
        </div>
      </div>
      <div className="container">
       <form action="">
        <h1>Sign In</h1>
        <input type="email"  placeholder="email or phone number"/>
        <input type="password" placeholder="Passoword"/>
        <button className="loginButton">
          Sign In
        </button>
        <span>
          New to Footflix? <b>Sign Up Now</b>
        </span>
        <small>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn More</b>.
        </small>
       </form>
      </div>
    </div>
  );
};
