import React from 'react';

import HeaderContainer from './header/header_container';
import List from './list/list';
import ListDetailContainer from './list/list_detail_container';
import SidebarContainer from './sidebar/sidebar_container';

const App = ({children}) => {
		return (
			<div className="app">
				<HeaderContainer />
				<SidebarContainer />
				<List />
				<ListDetailContainer />
				{children}
			</div>);
}

export default App;