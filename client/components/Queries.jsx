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
          <img src="https://i.imgur.com/0dok2AA.png" />
      </section>

      <section className="query-selections">
        <h2>Choose Your Query</h2>
      </section>
      <div className="query-selections">
          <form action="/api/query">

            <select id="query-params" name="query-params">
              <option value="drought_tolerance">Water Retention</option>
              <option value="resprout_ability">Able to Regrow</option>
              <option value="growth_rate">Growth Rate</option>
              <option value="lifespan">Lifespan</option>
              <option value="bloom_period">Bloom Period</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
      </div>
  
      <div className="row-cards">
        <div className="column-card">
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
          </div>
        </div>
        <div className="column-card">
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
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Queries;