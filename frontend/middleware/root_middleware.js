import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware'; 
import ListMiddleWare from './list_middleware';

export default applyMiddleware(SessionMiddleware, ListMiddleWare);