/**
 * ************************************
 *
 * @module  Homepage.jsx
 * @author
 * @date
 * @description Landing page
 *
 * ************************************
 */

 import React, { Component } from 'react';

 class Homepage extends Component {
  render(){
    return(
      <div className="container">
      <div className="vertical-center-body-container">
        <div className="homepage-inner-body-container">
          <div className="homepage-inner-body-landing-img">
            {/* image goes here */}
           
          </div>
          <div className="homepage-inner-body-text">
            <h1>Welcome to GREEN THUMBERY! </h1>
            Have you wondered what sorts of plants to grow in your humble abode, but find it too tedious to search for every single plant on Google? No problemo, we've got you covered! There are plants for all levels of enthusiasts, from low-maintenance leafers to ones that will fruit and much more. 
            <p></p>
            After searching for a plant you're interested in caring for, sign up to save them in your plant shelf! You'll get to see all the plants you own and you'll be able to save notes about your experience caring for them. What are you waiting for? Check it out!
            <p></p>
            <center><button className="homepage-btn">Find Your Friendly Plant</button></center>
          </div>     
        </div> 
      </div>
    </div>
    )
  }
 }

 export default Homepage;
