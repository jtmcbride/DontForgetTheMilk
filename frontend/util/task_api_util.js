export const createTask = (task, listId, success, error) => {
  $.ajax({
    url: `api/lists/${listId}/tasks`, 
    type: "POST",
    data: {task}, 
    success,
    error
  });
}

export const updateTask = (task, success, error) => {
  $.ajax({
    url: `api/tasks/${task.id}`, 
    type: "PATCH",
    data: {task}, 
    success,
    error
  });
};

export const destroyTask = (task, success, error) => {
  $.ajax({
    url: `api/tasks/${task.id}`, 
    type: "DELETE",
    success,
    error
  });
};

export const fetchTask = (id, success, error) => {
  $.ajax({
    url: `api/tasks/${id}`, 
    success,
    error
  });
};

export const fetchTasks = (timeFrame, success, error) => {
  $.ajax({
    url: `api/tasks`, 
    data: {timeFrame},
    success,
    error
  });
};

export const fetchSearchTasks = (query, success, error) => {
  $.ajax({
    url: `api/tasks`, 
    data: {query},
    success,
    error
  });
}