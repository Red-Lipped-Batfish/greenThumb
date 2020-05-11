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
import ColumnCards from './ColumnCards.jsx'


const RowQueries = (props) => {

  return (
  <div className="row-cards-query">
    <ColumnCards columnCards={props.columnCards} />
  </div>
    )
}

export default RowQueries;