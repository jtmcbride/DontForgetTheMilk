export const CREATE_TASK = "CREATE_TASK";
export const FETCH_TASK = "FETCH_TASK";
export const FETCH_TASKS = "FETCH_TASKS";
export const FETCH_SEARCH_TASKS = "FETCH_SEARCH_TASKS";
export const DESTROY_TASK = "DESTROY_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const RECEIVE_UPDATED_TASK = "RECEIVE_UPDATED_TASK";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const RECEIVE_CREATED_TASK = "RECEIVE_CREATED_TASK";
export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";
export const REMOVE_TASK = "REMOVE_TASK";

export const createTask = (task, listId) => ({
  type: CREATE_TASK,
  task,
  listId
});

export const destroyTask = task => ({
  type: DESTROY_TASK,
  task
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const receiveCreatedTask = task => ({
  type: RECEIVE_CREATED_TASK,
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

export const fetchTasks = timeFrame => ({
  type: FETCH_TASKS,
  timeFrame
});

export const fetchSearchTasks = query => ({
  type: FETCH_SEARCH_TASKS,
  query
});

export const fetchTask = id => ({
  type: FETCH_TASK,
  id
});

export const removeTask = task => ({
  type: REMOVE_TASK,
  task
});

export const updateTask = task => ({
  type: UPDATE_TASK,
  task
});

export const receiveUpdatedTask = task => ({
  type: RECEIVE_UPDATED_TASK,
  task
});
