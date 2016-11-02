import React from 'react'

import HeaderContainer from './header/header_container'

const App = ({children}) => {
		return (
			<div>
				<HeaderContainer />
				<h1>App</h1>
				{children}
			</div>);
}

export default App;