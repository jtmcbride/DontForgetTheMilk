import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Splash from './splash'
import App from './app'
// import SessionFormContainer from "./session_form_container";

const Root = ({ store }) => {
	// const _redirectIfLoggedIn = (nextState, replace) => {
	// 	if (store.getState().session.currentUser) {
	// 		replace("/");
	// 	};<Route path="signup"  component={SignupFormContainer} />
	    	//<Route path="login"  component={LoginFormContainer} />
	// }
// 	onEnter={_redirectIfLoggedIn}
// onEnter={_redirectIfLoggedIn}
	return (
	  <Provider store={store}>
	    <Router history={hashHistory} >
	    	<Route path="/" component={Splash} />
		    	<Route path="app" component={App}>

		    	</Route>
	    </Router>
	  </Provider>
	);
}

export default Root;