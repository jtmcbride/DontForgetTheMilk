import React from 'react';

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
				{children}
			</div>);
}

export default App;