export const CREATE_TASK = "CREATE_TASK";
export const FETCH_TASK = "FETCH_TASK";
export const FETCH_TASKS = "FETCH_TASKS";
export const DESTROY_TASK = "DESTROY_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";
export const REMOVE_TASK = "REMOVE_TASK";

export const createTask = (task, listId) => ({
  type: CREATE_TASK,
  task,
  listId
});

export const destroyTask = id => ({
  type: DESTROY_TASK,
  id
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});

export const receiveTaskErrors = errors => ({
  type: RECEIVE_TASK_ERRORS,
  errors
});

export const fetchTasks = () => ({
  type: FETCH_TASKS
});

export const fetchTask = id => ({
  type: FETCH_TASK,
  id
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const updateTask = task => ({
  type: UPDATE_TASK,
  task
});
