export const createList = (list, success, error) => {
  $.ajax({
    url: "api/lists", 
    type: "POST",
    data: {list}, 
    success,
    error
  });
}

export const updateList = (list, success, error) => {
  console.log(list);
  $.ajax({
    url: `api/lists/${list.id}`, 
    type: "PATCH",
    data: {list}, 
    success,
    error
  });
};

export const destroyList = (id, success, error) => {
  $.ajax({
    url: `api/lists/${id}`, 
    type: "DELETE",
    success,
    error
  });
};

export const fetchList = (id, success, error) => {
  $.ajax({
    url: `api/lists/${id}`, 
    success,
    error
  });
};

export const fetchLists = (success, error) => {
  $.ajax({
    url: `api/lists`, 
    success,
    error
  });
};