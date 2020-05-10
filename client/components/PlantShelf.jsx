/**
 * ************************************
 *
 * @module  PlantShelf.jsx
 * @author
 * @date
 * @description Users can view their stored favorites
 *
 * ************************************
 */

import React, { Component } from 'react';

class PlantShelf extends Component {
  
  render() {
    return (

      <div className="container">

      <section className="title">
        <h1>Red-lipped Batfish's Plant Shelf</h1>
      </section>
      <section className="main-query-section">
          <img src="https://i.ibb.co/gmys07P/WLK3-WGs-removebg-preview-1.png" />
      </section>
   
      <section className="title">
        <h2>Review a selection of your finest plants</h2>
      </section>
  
      <div className="row-cards-fav">
        <div className="column-card-fav">
          <div className="plant-card">
            <div className="plant-card-header">
              <h3>plant name</h3>
              <img className="fav-plant" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-annual-flowers-sunflowers-1521752647.jpg" />
            </div>
            <hr />
            <strong>Details</strong>
              <p>drought_tolerance</p>
              <p>resprout_ability</p>
              <p>growth_rate</p>
              <p>lifespan</p>
              <p>bloom_period</p>
            <hr />
            <strong>Personal Notes</strong>
            <p>This plant was super easy to grow. Really fast growth so probably don't need to buy as many seedlings next time (2-3 packets?). Would grow again! </p>
          </div>
        </div>
        <div className="column-card-fav">
          <div className="plant-card">
            <div className="plant-card-header">
              <h3>plant name</h3>
              <img className="fav-plant" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-annual-flowers-sunflowers-1521752647.jpg" />
            </div>
            <hr />
            <strong>Details</strong>
              <p>drought_tolerance</p>
              <p>resprout_ability</p>
              <p>growth_rate</p>
              <p>lifespan</p>
              <p>bloom_period</p>
            <hr />
            <strong>Personal Notes</strong>
            <p>Plant was kind of annoying - thought I could make it work but it really requires too much maintenance. Note to self: Don't attempt it again!</p>
          </div>
        </div>
        <div className="column-card-fav">
          <div className="plant-card">
            <div className="plant-card-header">
              <h3>plant name</h3>
              <img className="fav-plant" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-annual-flowers-sunflowers-1521752647.jpg" />
              </div>
            <hr />
            <strong>Details</strong>
              <p>drought_tolerance</p>
              <p>resprout_ability</p>
              <p>growth_rate</p>
              <p>lifespan</p>
              <p>bloom_period</p>
            <hr />
            <strong>Personal Notes</strong>
            <p>Currently have three growing in the garden on left side. Waiting for results - looks promising so far!</p>
          </div>
        </div>
      </div>

    </div>






      

    )
  }
}

export default PlantShelf;