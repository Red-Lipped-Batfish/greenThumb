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
  const resproutAbility = document.querySelector("#resprout-ability").value;
  // const growthRate = document.querySelector("#growth-rate").value;
  // const lifespan = document.querySelector("#resprout-ability").value;
  // const bloomPeriod = document.querySelector("#bloom-period").value;
  const queryParam = `/api/getManyPlants?drought_tolerance=${waterRetention}&resprout_ability=${resproutAbility}&`;
  const data = fetch(queryParam);
  return data;
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
