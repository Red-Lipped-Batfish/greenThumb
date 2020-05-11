/**
 * ************************************
 *
 * @module  plantsReducer
 * @author
 * @date
 * @description reducer for plant data
 *
 * ************************************
 */



import * as actions from '../actions/actions';
import { SUBMIT_SELECTION } from '../actions/actionTypes';

const initialState = {
  name: "Keri",
  arrayOfPlants: []
}

const fetchData = () => {
  const waterRetention = document.querySelector("#water-retention").value;
  console.log('value of waterRetention is: ',waterRetention);
  const resproutAbility = document.querySelector("#resprout-ability").value;
  console.log('value of resproutAbility is: ', resproutAbility);
  // const growthRate = document.querySelector("#growth-rate").value;
  // const lifespan = document.querySelector("#resprout-ability").value;
  // const bloomPeriod = document.querySelector("#bloom-period").value;
  const url = `/api/getManyPlants?drought_tolerance=${waterRetention}&resprout_ability=${resproutAbility}`;
  // growth_rate=${growthRate}&bloom_period=${bloomPeriod}
  console.log('url is: ', url)
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log('data is: ', data);
      return data;
    })
}


const plantsReducer = (state=initialState, action) => {
  switch(action.type) {
    case SUBMIT_SELECTION:
      const arrayOfPlants = fetchData();
      return {...state, arrayOfPlants};

    default:
      return state;
  }
}

export default plantsReducer;
