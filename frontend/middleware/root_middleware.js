import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware'; 
import ListMiddleware from './list_middleware';
import TaskMiddleware from './task_middleware';

export default applyMiddleware(SessionMiddleware, ListMiddleware, TaskMiddleware);