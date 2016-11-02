import React from 'react'
import ReactDOM from 'react-dom';

import configureStore from './store/store';

import Root from './components/root'


import {login, signup, logout } from './util/session_util';
window.l = login;
window.sig = signup;
window.out = logout;

document.addEventListener("DOMContentLoaded", () => {
	let store;
	if (window.currentUser) {
		store = configureStore({session: {currentUser: window.currentUser, errors: []}});
	} else {
		store = configureStore();
	}
	window.s  = store;
	let root = document.getElementById("root");
	ReactDOM.render(<Root store={store} />, root);
});