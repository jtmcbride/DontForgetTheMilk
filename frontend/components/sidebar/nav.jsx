import React from 'react';
import { Link } from 'react-router';

import ListForm from '../list/list_form';


export default class SidebarNav extends React.Component {

	constructor(props) {
		super(props);
	}

	listTitles() {
		return Object.keys(this.props.lists)
			.map( listId => (
				<li key={listId}><Link to={`app/list/${listId}`} >
					{this.props.lists[listId].title}
				</Link><span className="dropdown">ege</span></li>
				)
			);
	}

	render() {
		return (
			<nav className="sidebar">
				<h3 className="logo">DON'T FORGET THE MILK</h3>
				<ul>
					<li className="list-title">Lists</li>
					<ListForm open={false} title={""} createList={this.props.createList}/>
					<ul>
						{this.listTitles()}
					</ul>
				</ul>
			</nav>
		)
	}
}