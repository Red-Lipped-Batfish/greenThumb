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
  
  const arrayOfColumnCards = []
  props.columnCards.forEach(el => arrayOfColumnCards.push(
    <div className="column-card-query">
    <div className="plant-card">
      <div className="plant-card-header">
        <h3>{el["common_name"]}</h3>
        <img className="query-plant" src={el["image_url"]} />
      </div>
      <hr />
      <strong>Details</strong>
        <p>Seed period begins: {el["seed_period_begin"]}</p>
        <p>Seed period ends: {el["seed_period_end"]}</p>
        <p>Moisture use: {el["moisture_use"]}</p>
        <p>Drought tolerance:  {el["drought_tolerance"]}</p>
        <p>ph maximum: {el["ph_maximum"]}</p>
        <p>ph minimum: {el["ph_minimum"]}</p>
        <p>Resprout ability: {el["resprout_ability"]}</p>
        <p>Shade tolerance: {el["shade_tolerance"]}</p>
        <p>Bloom period: {el["bloom_period"]}</p>
        <p>Commercial availability: {el["commercial_availability"]}</p>
        <p>Growth rate: {el["growth_rate"]}</p>
        <p>lifespan: {el["lifespan"]}</p>
        <p>Height at maturity: {el["mature_height"]}</p>
    </div>
  </div>

  ))

  // for (let i = 0; i < props.columnCards.length; i++) {
  //   columnCards.push(
  //   <div className="column-card-query">
  //         <div className="plant-card">
  //           <div className="plant-card-header">
  //             <h3>plant name</h3>
  //             <img className="query-plant" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-annual-flowers-sunflowers-1521752647.jpg" />
  //           </div>
  //           <hr />
  //           <strong>Details</strong>
  //             <p>Seed period begins: </p>
  //             <p>Seed period ends: </p>
  //             <p>Moisture use: </p>
  //             <p>Drought tolerance: </p>
  //             <p>PH maximum: </p>
  //             <p>PH minimum: </p>
  //             <p>Resprout ability: </p>
  //             <p>Shade tolerance: </p>
  //             <p>Bloom period: </p>
  //             <p>Commercial availability: </p>
  //             <p>Growth rate: </p>
  //             <p>lifespan: </p>
  //             <p>Mature height: </p>
  //         </div>
  //       </div>
  //   )
  // }

return (

  { columnCards }
  )
  
}

export default RowQueries;