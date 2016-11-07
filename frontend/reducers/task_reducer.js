import { RECEIVE_TASK, RECEIVE_TASKS, RECEIVE_TASK_ERRORS, REMOVE_TASK } from '../actions/task_actions';
import { RECEIVE_LIST } from '../actions/list_actions'
import { LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';


const TaskReducer  = (state = { tasks: {incomplete: {}, completed: {}}, task: {}, errors: [] }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_LIST:
      newState = merge({}, state);
      if (action.list.tasks) {
        newState.tasks = action.list.tasks;
      } else {
        newState.tasks = {incomplete: {}, completed: {}};
      }
      return newState;
    case RECEIVE_TASK:
      debugger
      newState = merge({}, state, { errors: [] });
      newState.task = action.task;
      newState.tasks.incomplete[action.task.id] = action.task;
      return newState;
    case RECEIVE_TASKS:
      newState = merge({}, state, { tasks: {incomplete: action.tasks.incomplete, completed: action.tasks.completed}, errors: [] });
      return newState;
    case REMOVE_TASK:
      newState = merge({}, state)
      // newState.tasks[action.id] = undefined;
      delete newState.tasks[action.id]
      return newState;
    case RECEIVE_TASK_ERRORS:
      newState = merge({}, state, { errors: action.errors });
      return newState;
    case LOGOUT:
      return { tasks: {incomplete: {}, completed: {}}, task: {}, errors: [] };
    default:
      return state;
  }
}

export default TaskReducer;