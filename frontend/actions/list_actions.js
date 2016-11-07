export const CREATE_LIST = "CREATE_LIST";
export const FETCH_LIST = "FETCH_LIST";
export const FETCH_LISTS = "FETCH_LISTS";
export const DESTROY_LIST = "DESTROY_LIST";
export const UPDATE_LIST = "UPDATE_LIST";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const RECEIVE_CREATED_LIST = "RECEIVE_CREATED_LIST";
export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";
export const REMOVE_LIST = "REMOVE_LIST";

export const createList = list => ({
  type: CREATE_LIST,
  list
});

export const destroyList = id => ({
  type: DESTROY_LIST,
  id
});

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const receiveCreatedList = list => ({
  type: RECEIVE_CREATED_LIST,
  list
});

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

export const receiveListErrors = errors => ({
  type: RECEIVE_LIST_ERRORS,
  errors
});

export const fetchLists = () => ({
  type: FETCH_LISTS,
});

export const fetchList = id => ({
  type: FETCH_LIST,
  id
});

export const removeList = id => ({
  type: REMOVE_LIST,
  id
});

export const updateList = list => ({
  type: UPDATE_LIST,
  list
});


