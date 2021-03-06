import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ListReducer from './list_reducer'; 
import TaskReducer from './task_reducer';


export default combineReducers(
  {
    session: SessionReducer,
    list: ListReducer,
    task: TaskReducer
  }
);