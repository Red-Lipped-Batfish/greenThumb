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

class QueryItem extends Component {
  
  render() {


    // 
    return (
      <div style={styles.container} className='queryItem'>
        <p>{this.props.queryItem}</p>
      </div>
    );
  }
}


const styles = {
  container: {
    border: '1px solid black',
    height: 100,
    width: '100%',
    flex: 1,
  },
};

export default QueryItem;