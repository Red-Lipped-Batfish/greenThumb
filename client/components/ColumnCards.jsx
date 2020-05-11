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
import ColumnDetails from './ColumnCards.jsx';

const ColumnCards = props => {
  const arrayOfColumnCards = [];
  console.log('props columnCards: ', props.columnCards);
  props.columnCards.forEach((el, i) => {
    const uniqueKey = 'card' + i;
    arrayOfColumnCards.push(
      <ColumnDetails
        key={uniqueKey}
        id={uniqueKey}
        keycardDetails={props.columnCards}
      />
    );
    console.log('arrayOfColumnCards -', arrayOfColumnCards);
  });

  return { arrayOfColumnCards };
};

export default ColumnCards;

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
