import React from 'react';

import HeaderContainer from './header/header_container';
import List from './list/list';
import ListDetailContainer from './list/list_detail_container';
import SidebarNav from './sidebar/nav'

const App = ({children}) => {
		return (
			<div className="app">
				<HeaderContainer />
				<SidebarNav />
				<List />
				<ListDetailContainer />
				{children}
			</div>);
}

export default App;