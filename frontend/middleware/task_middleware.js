import { CREATE_TASK, UPDATE_TASK, DESTROY_TASK, receiveTask, receiveCreatedTask, receiveTasks, receiveTaskErrors, FETCH_TASKS, FETCH_TASK, removeTask } from '../actions/task_actions';

import { createTask, updateTask, destroyTask, fetchTask, fetchTasks } from '../util/task_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = task => {debugger;dispatch(receiveTask(task))};
  const tasksSuccessCallback = tasks => {dispatch(receiveTasks(tasks))};
  const errorCallback = error => dispatch(receiveTaskErrors(error.responseJSON));
  switch(action.type) {
    case FETCH_TASK:
      debugger
      fetchTask(action.id, successCallback, errorCallback);
      return next(action);
    case FETCH_TASKS:
      fetchTasks(action.timeFrame, tasksSuccessCallback, errorCallback);
      return next(action);
    case CREATE_TASK:
      createTask(action.task, action.listId, task => dispatch(receiveCreatedTask(task)), errorCallback);
      return next(action);
    case DESTROY_TASK:
      destroyTask(action.id, () => dispatch(removeTask(action.id)), error => console.log(error));
      break;
    case UPDATE_TASK:
      updateTask(action.task, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};