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
import RowQueries from './RowQueries.jsx';


const mapStateToProps = state => ({
  listofPlants: state.plantsReducer.arrayOfPlants
  // state here
})

const mapDispatchToProps = dispatch => ({
  // add dispatchers here
  submitSelection: (data) => {
    // console.log('Queries: mapDispatchToProps, submitSelection, data[0] - ', data[0])
    dispatch(submitSelection(data))
  }
})



class Queries extends Component {

  render() {
    const fetchData = () => {
      const waterRetention = document.querySelector("#water-retention").value;
      // console.log('value of waterRetention is: ',waterRetention);
      const resproutAbility = document.querySelector("#resprout-ability").value;
      // console.log('value of resproutAbility is: ', resproutAbility);
      // const growthRate = document.querySelector("#growth-rate").value;
      // const lifespan = document.querySelector("#resprout-ability").value;
      // const bloomPeriod = document.querySelector("#bloom-period").value;
      const url = `/api/getManyPlants?drought_tolerance=${waterRetention}&resprout_ability=${resproutAbility}`;
      console.log('url is: ', url)
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const limitedData = data.slice(0, 50)
          console.log('Queries: fetch(url)  : ', limitedData);
          this.props.submitSelection(limitedData)
          return;
        })
    }

    
    // separate by 2
    const rowQueries = [];
    for (let i = 0; i < this.props.listofPlants.length; i += 2) {
      const individualRow = [];
      individualRow.push(this.props.listofPlants[i])
      individualRow.push(this.props.listofPlants[i+1])
      rowQueries.push(<RowQueries key={'row' + i} columnCards={individualRow} />);
    }

    return (
      <div>
      <section className="main-query-section">
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
            <input type="submit" value="Submit" onClick={() => fetchData()} />
          </div>
      </div>  
  
      
      {rowQueries}

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Queries);