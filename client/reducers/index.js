import { combineReducers } from 'redux';
import plantsReducer from './plantsReducer';

  // reducers go here, currently in destructured format
  const reducers = combineReducers({
    plantsReducer
  });

export default reducers