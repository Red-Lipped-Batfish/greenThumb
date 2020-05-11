/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description 
 *
 * ************************************
 */


import {SUBMIT_SELECTION} from './actionTypes.js';


export const submitSelection = (data) => {
  // console.log('actions: submitSelection - ', data)
  return {
    type: SUBMIT_SELECTION,
    payload: data }
  
}