/**
 * ************************************
 *
 * @module  Queries.jsx
 * @author
 * @date
 * @description Users will make requests via a form and each response will render another component
 *
 * ************************************
 */

import React, { Component } from 'react';

class Queries extends Component {

  render() {

    return (
      <div>
      <section className="main-query-section">
          {/* <img src="https://i.imgur.com/0dok2AA.png" /> */}
          <img src="https://i.ibb.co/G05vqqP/a011787e63ea6f6b2d1879b94ef2ca31-removebg-preview.png" />
      </section>
      <section className="title">
        <h2>Select Your Query</h2>
      </section>
      <div className="query-selections">
          <form action="/api/query">

            <select id="query-params" name="query-params">
              <option value="" disabled>Water Retention</option>
                <option value="drought_tolerance">- High</option>
                <option value="drought_tolerance">- Medium</option>
                <option value="drought_tolerance">- Low</option>
              <option value="" disable>Able to Regrow</option>
                <option value="resprout_ability">- True</option>
                <option value="resprout_ability">- False</option>
              <option value="" disabled>Growth Rate</option>
                <option value="growth_rate">- Fast</option>
                <option value="growth_rate">- Slow</option>
              <option value="" disabled>Lifespan</option>
                <option value="lifespan">- Annual</option>
                <option value="lifespan">- Biannual</option>
              <option value="" disabled>Bloom Period</option>
                <option value="bloom_period">- Early Spring</option>
                <option value="bloom_period">- Late Spring</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
      </div>
  
      <div className="row-cards-query">
        <div className="column-card-query">
          <div className="plant-card">
            <div className="plant-card-header">
              <h3>plant name</h3>
              <img className="query-plant" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-annual-flowers-sunflowers-1521752647.jpg" />
            </div>
            <hr />
            <strong>Details</strong>
              <p>drought_tolerance</p>
              <p>resprout_ability</p>
              <p>growth_rate</p>
              <p>lifespan</p>
              <p>bloom_period</p>
          </div>
        </div>
        <div className="column-card-query">
          <div className="plant-card">
            <div className="plant-card-header">
              <h3>plant name</h3>
              <img className="query-plant" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-annual-flowers-sunflowers-1521752647.jpg" />
            </div>
            <hr />
            <strong>Details</strong>
              <p>drought_tolerance</p>
              <p>resprout_ability</p>
              <p>growth_rate</p>
              <p>lifespan</p>
              <p>bloom_period</p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Queries;