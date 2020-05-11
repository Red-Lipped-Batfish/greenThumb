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
import { connect } from 'react-redux';
import { submitSelection } from '../actions/actions';
import { RowQueries } from './RowQueries';


const mapStateToProps = state =>({
  listofPlants: state.plantsReducer.arrayOfPlants
  // state here
})

const mapDispatchToProps = dispatch => ({
  // add dispatchers here
  submitSelection: () => dispatch(submitSelection())
})

class Queries extends Component {

  render() {
    // separate by 2
    const rowQueries = [];
    for (let i = 0; i < this.props.listofPlants.length; i+2) {
      const individualRow = [];
      individualRow.push(this.props.listofPlants[i])
      individualRow.push(this.props.listofPlants[i+1])
      rowQueries.push(<RowQueries columnCards={individualRow} />);
    }

    return (
      <div>
      <section className="main-query-section">
          {/* <img src="https://i.imgur.com/0dok2AA.png" /> */}
          {/* <img src="https://i.ibb.co/G05vqqP/a011787e63ea6f6b2d1879b94ef2ca31-removebg-preview.png" /> */}
          <img src="https://i.ibb.co/2cQQMjz/a011787e63ea6f6b2d1879b94ef2ca31-removebg-preview-1.png" />
      </section>
      <section className="title">
        <h2>Find Your Perfect Plant</h2>
      </section>
      <div className="query-selections">
          <div>
            <label htmlFor="water-retention">Water Retention</label>
            <select id="water-retention">
              <option value="" disabled>Water Retention</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <label htmlFor="resprout-ability">Resprout Ability</label>
            <select id="resprout-ability">
              <option value="" disabled>Resprout Ability</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
            {/* <label htmlFor="growth-rate">Growth Rate</label>
            <select id="growth-rate">
              <option value="" disabled>Growth Rate</option>
                <option value="fast">Fast</option>
                <option value="slow">Slow</option>
            </select>
            <label htmlFor="lifespan">Lifespan</label>
            <select id="lifespan">
              <option value="" disabled>Lifespan</option>
                <option value="lifespan">Annual</option>
                <option value="lifespan">Biannual</option>
            </select>
            <label htmlFor="bloom-period">Bloom Period</label>
            <select id="bloom-period">
              <option value="" disabled>Bloom Period</option>
                <option value="bloom_period">Early Spring</option>
                <option value="bloom_period">Late Spring</option>
                <option value="bloom_period">Early Summer</option>
                <option value="bloom_period">Late Summer</option>
                <option value="bloom_period">Early Fall</option>
                <option value="bloom_period">Late Fall</option>
                <option value="bloom_period">Early Winter</option>
                <option value="bloom_period">Late Winter</option>
            </select> */}
            <input type="submit" value="Submit" onClick={() => this.props.submitSelection()} />
          </div>
      </div>  
  
      
      {rowQueries}



      {/* <div className="row-cards-query">
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
      </div> */}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Queries);