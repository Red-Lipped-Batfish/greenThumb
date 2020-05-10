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
  constructor(props) {
    super(props);
    this.state = {
      queryResults: [
      {plant_name: "blackwood", drought_tolerance: "high", bloom_period: "winter"},
      {plant_name: "spring onion", drought_tolerance: "low", bloom_period: "spring"}]
    }
  }

  // function that will fetch request --> componentDidMount

  // componentDidMount () {
  //   // console.log('mounting')
  //   fetch('https://curriculum-api.codesmith.io/messages')
  //     .then(res => res.json())
  //     .then(res => this.setState({ queryResults: res }))
  //     .then(console.log('data fetched!'))
  // }

  
  
  render() {
    // for each object in the array, 
    const queryResults = [];
    // this.state.queryResults.forEach(query => {
    //   queryResults.push(query)
    // })
    this.state.queryResults.forEach(query => {
      queryResults.push(<p>{query["plant_name"]}</p>)
    })
    // console.log('queryResults', queryResults)

    return <div>
      { queryResults }
    </div>
  }




}

export default Queries;