import React from 'react';


export default class SidebarNav extends React.Component {

	render() {
		return (
			<nav className="sidebar">
				<ul>
					<li>Lists</li>
					<ul>
						<li>List 1</li>
					</ul>
				</ul>
			</nav>
		)
	}
}