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

const ColumnDetails = ({ el }) => {
  return (
    <div className="column-card-query">
      <div className="plant-card">
        <div className="plant-card-header">
          <h3>{el.common_name}</h3>
          <img className="query-plant" src={el.image_url} />
        </div>
        <hr />
        <strong>Details</strong>
        <p>Seed period begins: {el.seed_period_begin}</p>
        <p>Seed period ends: {el.seed_period_end}</p>
        <p>Moisture use: {el.moisture_use}</p>
        <p>Drought tolerance: {el.drought_tolerance}</p>
        <p>ph maximum: {el.ph_maximum}</p>
        <p>ph minimum: {el.ph_minimum}</p>
        <p>Resprout ability: {el.resprout_ability}</p>
        <p>Shade tolerance: {el.shade_tolerance}</p>
        <p>Bloom period: {el.bloom_period}</p>
        <p>Commercial availability: {el.commercial_availability}</p>
        <p>Growth rate: {el.growth_rate}</p>
        <p>lifespan: {el.lifespan}</p>
        <p>Height at maturity: {el.mature_height}</p>
      </div>
    </div>
  );
};

export default ColumnDetails;
