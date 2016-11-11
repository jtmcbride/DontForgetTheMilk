import { CREATE_TASK, UPDATE_TASK, DESTROY_TASK, receiveTask, receiveUpdatedTask, receiveCreatedTask, receiveTasks, receiveTaskErrors, FETCH_TASKS, FETCH_SEARCH_TASKS, FETCH_TASK, RECEIVE_UPDATED_TASK, removeTask } from '../actions/task_actions';

import { createTask, updateTask, destroyTask, fetchTask, fetchTasks, fetchSearchTasks } from '../util/task_api_util';
import { fetchList } from '../actions/list_actions';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = task => {dispatch(receiveTask(task))};
  const tasksSuccessCallback = tasks => {dispatch(receiveTasks(tasks))};
  const errorCallback = error => dispatch(receiveTaskErrors(error.responseJSON));
  switch(action.type) {
    case FETCH_TASK:
      fetchTask(action.id, successCallback, errorCallback);
      return next(action);
    case FETCH_TASKS:
      fetchTasks(action.timeFrame, tasksSuccessCallback, errorCallback);
      return next(action);
    case FETCH_SEARCH_TASKS:
      fetchSearchTasks(action.query, tasksSuccessCallback, errorCallback);
      return next(action);
    case CREATE_TASK:
      createTask(action.task, action.listId, task => dispatch(receiveCreatedTask(task)), errorCallback);
      return next(action);
    case DESTROY_TASK:
      destroyTask(action.task, () => dispatch(removeTask(action.task)), error => console.log(error));
      return next(action);
    case UPDATE_TASK:
      updateTask(action.task, task => dispatch(receiveUpdatedTask(task)), errorCallback);
      return next(action);
    case RECEIVE_UPDATED_TASK:
      if (action.task.list_id !== getState().list.list.id) {
        dispatch(fetchList(getState().list.list.id))
      }
    default:
      return next(action);
  }
};
