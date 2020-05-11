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



const plantsReducer = (state=initialState, action) => {
  switch(action.type) {
    case SUBMIT_SELECTION:
      const arrayOfPlants = action.payload;
      // console.log('plantsReducer: arrayOfPlants - ', arrayOfPlants[0])
      return {...state, arrayOfPlants};

    default:
      return state;
  }
}

export default plantsReducer;
