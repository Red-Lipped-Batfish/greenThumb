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
          <img src="https://i.ibb.co/G05vqqP/a011787e63ea6f6b2d1879b94ef2ca31-removebg-preview.png" />
      </section>
      <section className="title">
        <h2>Select Your Query</h2>
      </section>
      <div className="query-selections">
          <div>

            <select id="water-retention">
              <option value="" disabled>Water Retention</option>
                <option value="high">- High</option>
                <option value="medium">- Medium</option>
                <option value="low">- Low</option>
            </select>
            <select id="resprout-ability">
              <option value="" disabled>Able to Regrow</option>
                <option value="true">- True</option>
                <option value="false">- False</option>
            </select>
            {/* <select id="growth-rate">
              <option value="" disabled>Growth Rate</option>
                <option value="fast">- Fast</option>
                <option value="slow">- Slow</option>
            </select>
            <select id="lifespan">
              <option value="" disabled>Lifespan</option>
                <option value="lifespan">- Annual</option>
                <option value="lifespan">- Biannual</option>
            </select>
            <select id="bloom-period">
              <option value="" disabled>Bloom Period</option>
                <option value="bloom_period">- Early Spring</option>
                <option value="bloom_period">- Late Spring</option>
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