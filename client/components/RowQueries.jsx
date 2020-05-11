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

const RowQueries = props => {
  console.log('props ', props);
  return (
    <div className="row-cards-query">
      <div className="column-card-query">
        <div className="plant-card">
          <div className="plant-card-header">
            <h3>{props.columnCards.common_name}</h3>
            <img className="query-plant" src={props.columnCards.image_url} />
          </div>
          <hr />
          <strong>Details</strong>
          <p>Seed period begins: {props.columnCards.seed_period_begin}</p>
          <p>Seed period ends: {props.columnCards.seed_period_end}</p>
          <p>Moisture use: {props.columnCards.moisture_use}</p>
          <p>Drought tolerance: {props.columnCards.drought_tolerance}</p>
          <p>ph maximum: {props.columnCards.ph_maximum}</p>
          <p>ph minimum: {props.columnCards.ph_minimum}</p>
          <p>Resprout ability: {props.columnCards.resprout_ability}</p>
          <p>Shade tolerance: {props.columnCards.shade_tolerance}</p>
          <p>Bloom period: {props.columnCards.bloom_period}</p>
          <p>
            Commercial availability: {props.columnCards.commercial_availability}
          </p>
          <p>Growth rate: {props.columnCards.growth_rate}</p>
          <p>lifespan: {props.columnCards.lifespan}</p>
          <p>Height at maturity: {props.columnCards.mature_height}</p>
        </div>
      </div>
    </div>
  );
};

export default RowQueries;
