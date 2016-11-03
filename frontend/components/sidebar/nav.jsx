import React from 'react';
import { Link } from 'react-router';


export default class SidebarNav extends React.Component {

	constructor(props) {
		super(props);
	}

	listTitles() {
		return Object.keys(this.props.lists)
			.map( list => (
				<li key={list}>
					{this.props.lists[list].title}
				</li>
				)
			);
	}

	render() {
		return (
			<nav className="sidebar">
				<ul>
					<li>Lists</li>
					<ul>
						{this.listTitles()}
					</ul>
				</ul>
			</nav>
		)
	}
}