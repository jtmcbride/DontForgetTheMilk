import { CREATE_LIST, UPDATE_LIST, DESTROY_LIST, receiveList, receiveCreatedList, receiveLists, receiveListErrors, FETCH_LISTS, FETCH_LIST, removeList } from '../actions/list_actions';

import { createList, updateList, destroyList, fetchList, fetchLists } from '../util/list_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = list => dispatch(receiveList(list));
  const listsSuccessCallback = lists => dispatch(receiveLists(lists));
  const errorCallback = error => dispatch(receiveListErrors(error.responseJSON));

  switch(action.type) {
    case FETCH_LIST:
      fetchList(action.id, successCallback, errorCallback);
      return next(action);
    case FETCH_LISTS:
      fetchLists(listsSuccessCallback, errorCallback);
      return next(action);
    case CREATE_LIST:
      createList(action.list, list => dispatch(receiveCreatedList(list)), errorCallback);
      return next(action);
    case DESTROY_LIST:
      destroyList(action.id, () => dispatch(removeList(action.id)), error => console.log(error));
      break;
    case UPDATE_LIST:
      updateList(action.list, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};