import { LOGIN, SIGNUP, LOGOUT, receiveCurrentUser, receiveErrors } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = error => dispatch(receiveErrors(error.responseJSON));

  switch(action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};