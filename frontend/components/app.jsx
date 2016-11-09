import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import HeaderContainer from './header/header_container';
import ListContainer from './list/list_container';
import ListDetailContainer from './list/list_detail_container';
import SidebarContainer from './sidebar/sidebar_container';
import ListForm from './list/list_form';


const App = ({children}) => {
		return (
			<div className="app clearfix">
				<HeaderContainer />
				<SidebarContainer />
				<ListContainer />
				<ListDetailContainer />
				<ReactCSSTransitionGroup
		          transitionName="task-detail-transition"
		          transitionEnterTimeout={2000}
		          transitionLeaveTimeout={0}>
					{children}
				</ReactCSSTransitionGroup>
			</div>);
}

export default App;