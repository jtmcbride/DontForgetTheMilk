import React from 'react';

import HeaderContainer from './header/header_container';
import List from './list/list';

const App = ({children}) => {
		return (
			<div className="app">
				<HeaderContainer />
				<List />
				{children}
			</div>);
}

export default App;