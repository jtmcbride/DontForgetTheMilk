
import React from 'react';
import { Provider } from 'react-redux';

// router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// components
import Splash from './splash'
import App from './app'
import SignupFormContainer from "./session/signup_container";
import LoginFormContainer from "./session/login_container";
import ListContainer from './list/list_container';
import TaskDetailContainer from './task/task_detail_container';

import { fetchList } from '../actions/list_actions';

const Root = ({ store }) => {

	const _redirectIfLoggedIn = (nextState, replace) => {
		if (store.getState().session.currentUser) {
			replace("app");
		};
	}

	const _ensureLoggedIn = (nextState, replace) => {
	    const currentUser = store.getState().session.currentUser;
	    if (!currentUser) {
	      replace('/login');
	    }
  	};

  	const setCurrentList = (nextState, replace) => {
  		store.dispatch(fetchList(nextState.params.id))
  	};

	return (
	  <Provider store={store}>
	    <Router history={hashHistory} >
	    	<Route path="/" onEnter={_redirectIfLoggedIn} component={Splash} />
	    	<Route path="signup" onEnter={_redirectIfLoggedIn}  component={SignupFormContainer} />
	    	<Route path="login" onEnter={_redirectIfLoggedIn} component={LoginFormContainer} />
	    	<Route path="app" onEnter={_ensureLoggedIn} component={App}>
	    		<IndexRoute component={ListContainer} />
	    		<Route path="/app/list/:id" onEnter={setCurrentList}>
	    			<Route path="/app/list/:id/task/:taskId" component={TaskDetailContainer} />
    			</Route>
	    	</Route>
	    </Router>
	  </Provider>
	);
}

export default Root;