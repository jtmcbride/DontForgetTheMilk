import { RECEIVE_LIST, RECEIVE_CREATED_LIST, RECEIVE_LISTS, RECEIVE_LIST_ERRORS, REMOVE_LIST, RECEIVE_PSEUDO_LIST } from '../actions/list_actions';
import { RECEIVE_CREATED_TASK } from '../actions/task_actions';
import { LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';


const ListReducer  = (state = { lists: {}, list: {}, errors: [] }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_LIST:
      newState = merge({}, state, { list: action.list.list, errors: [] });
      newState.lists[action.list.list.id] = action.list.list;
      newState.lists[action.list.list.id].count = action.list.count
      return newState;
    case RECEIVE_CREATED_LIST:
      newState = merge({}, state);
      newState.lists[action.list.id] = action.list;
      newState.lists[action.list.id].count = 0;
      return newState;
    case RECEIVE_PSEUDO_LIST:
      newState = merge({}, state, { list: action.list.list, errors: [] });
      return newState;
    case RECEIVE_LISTS:
      newState = merge({}, state, { lists: action.lists, errors: [] });
      return newState;
    case REMOVE_LIST:
      newState = merge({}, state)
      // newState.lists[action.id] = undefined;
      delete newState.lists[action.id]
      return newState;
    case RECEIVE_LIST_ERRORS:
      newState = merge({}, state, { errors: action.errors });
      return newState;
    case RECEIVE_CREATED_TASK:
      if (action.task.list_id === 0) {return state;}
      newState = merge({}, state)
      newState.lists[action.task.list_id].count++;
      return newState;
    case LOGOUT:
      return { lists: {}, list: {}, errors: [] };
    default:
      return state;
  }
}

export default ListReducer;