import { RECEIVE_LIST, RECEIVE_LISTS, RECEIVE_LIST_ERRORS, REMOVE_LIST } from '../actions/list_actions';
import merge from 'lodash/merge';


const ListReducer  = (state = { lists: {}, list: {}, tasks: {}, errors: [] }, action) => {
  Object.freeze(state);
  console.log(action.type);
  let newState;
  switch(action.type) {
    case RECEIVE_LIST:
      newState = merge({}, state, { list: action.list, tasks: action.tasks, errors: [] });
      newState.lists[action.list.id] = action.list;
      return newState;
    case RECEIVE_LISTS:
      newState = merge({}, state, { lists: action.lists, errors: [] });
      return newState;
    case REMOVE_LIST:
      debugger;
      newState = merge({}, state)
      // newState.lists[action.id] = undefined;
      delete newState.lists[action.id]
      return newState;
    case RECEIVE_LIST_ERRORS:
      newState = merge({}, state, { errors: action.errors });
      return newState;
    default:
      return state;
  }
}

export default ListReducer;