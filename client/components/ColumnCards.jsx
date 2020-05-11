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


const ColumnCards = (props) => {
  
  const columnCards = []
  for (let i = 0; i < props.columnCards.length; i++) {
    columnCards.push(
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
    )
  }

return (

  { columnCards }
  )
  
}

export default RowQueries;