/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING, SUCCESS, FAILURE, ADDING_SUCCESS, ADDING, ADDING_FAILURE } from '../actions';

//  Your initial/default state for this project could *Although does not have to* look a lot like this
 
const initialState = {
   smurfs: [],
   fetching: false,
   adding: false,
   updating: false,
   deleting: false,
   error: ''
 }


const rootReducer = (state=initialState, action) => {
  

  switch(action.type){

    case FETCHING:
      return {
        ...state,
        fetching: true,
        error: ''
      }

    case SUCCESS:
        return {
          ...state,
          fetching: false,
          error: '',
          smurfs: action.payload
        }

    case FAILURE:
        return {
          ...state,
          error: 'Error fetching smurfs',
          fetching: false
        }
    
    case ADDING:
      return {
        ...state,
        adding: true,
        error: ''
      }

      case ADDING_SUCCESS:
        return {
          ...state,
          adding: false,
          smurfs: [...state.smurfs, action.payload] 
        }
    default: 
      return{
        ...state
      }
  }


}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default rootReducer;
