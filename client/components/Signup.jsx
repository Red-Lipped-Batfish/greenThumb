/**
 * ************************************
 *
 * @module  Signup.jsx
 * @author
 * @date
 * @description Sign up page. Allows users to add plants to view. 
 *
 * ************************************
 */

 import React, { Component } from 'react';

 class Signup extends Component {

  render(){
    return (
      <div className="container">
        <div className="vertical-center-body-container">
          <div className="signup-inner-body">
            <h2 align="left">Sign up</h2>
            <p align="left">Create a shelf of all the plants you are looking after!</p>
            <p></p>
          
            <label htmlFor="name"><strong>Name</strong></label>
            <br />
            <input className="signup" type="text" required />
            <p></p>
            <label htmlFor="email"><strong>Email Address</strong></label>
            <br />
            <input className="signup" type="text" required />
            <p></p>
            <label htmlFor="username"><strong>Username</strong></label>
            <br />
            <input className="signup" type="text" required /> 
            <p></p>
            <label htmlFor="password"><strong>Password</strong></label>
            <br />
            <input className="signup" type="text" required />
            <p></p>
          <button>Sign up</button>

          </div> 
        </div>
      </div>
    )
  }

 }

 export default Signup; 