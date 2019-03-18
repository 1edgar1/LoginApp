import React, { Component } from 'react';
import {Link} from "react-router-dom";
import usericon from "../person-icon.png"
import lock from "../lock.png"
import logo from "../logo.png"
import logowhite from "../logo-white.png"
import '../App.css';

class Login extends Component {

  
  render() {
    
    return (
      <div className="body">

      <section className="form">

        <form className="login">

          <div className="logo">
              <img src={logo} alt="headshot" />
          </div>


          <div className="inputfield" data-validate="Enter Username">
            <input className="namehere" type="text" placeholder="Username"></input>
            <span className="icon" >
            <img src={usericon} alt="usericon" />
            </span>
          </div>

          <div className="inputfield" data-validate="Enter Password">
            <input className="passwordhere" type="text" placeholder="Password"></input>
            <span className="icon">
            <img src={lock} alt="lock" />
            </span>
          </div>

          <div className="rememberme">
            <input className="checkbox" type="checkbox" ></input>
            <label className="labelbox">
              Remember Me
            </label>
          </div>

          
          <div className="loginfield">  
          <Link to = "/Home">
            <button className="loginbutton">
              Log In
            </button>
          </Link>
          </div>

          <div className="forgotpassword">
            <a href="app.js">
              Forgot Password
            </a>
          </div>

          <div className="logowhite">
            <img src={logowhite} alt="logotwhite"/>
          </div>

        </form>

      </section>

      </div>
    );
  }
}

export default Login;
