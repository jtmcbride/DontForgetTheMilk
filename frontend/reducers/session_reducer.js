import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';


const SessionReducer  = (state = { currentUser: null, errors: [] }, action) => {
  Object.freeze(state);
  // console.log(action.type);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = { currentUser: action.user, errors: [] }
      return newState;
    case RECEIVE_ERRORS:
      newState = { currentUser: null, errors: action.errors };
      return newState;
    case LOGOUT:
      return { currentUser: null, errors: []};
    default:
      return state;
  }
}

export default SessionReducer;