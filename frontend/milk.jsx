import React from 'react'
import ReactDOM from 'react-dom';

import configureStore from './store/store';

import Root from './components/root';
import Modal from 'react-modal';


import {login, signup, logout } from './util/session_util';

document.addEventListener("DOMContentLoaded", () => {
	Modal.setAppElement(document.body);
	let store;
	if (window.currentUser) {
		store = configureStore({session: {currentUser: window.currentUser, errors: []}});
	} else {
		store = configureStore();
	}

	let root = document.getElementById("root");
	ReactDOM.render(<Root store={store} />, root);
});