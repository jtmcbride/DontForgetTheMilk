import React from 'react';
import { Link } from 'react-router';

import ListForm from '../list/list_form';


export default class SidebarNav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			modalOpen: false,
			title: "",
			formType: "create"
		};
	}

	componentWillReceiveProps () {
		this.setState({
			modalOpen: false
		});
	}


	handleDropdownClick(e) {
		console.log(e.target.children);
		let that = e.target.children[0];
		that.className = "list-dropdown";
		document.addEventListener("click", function hideDropdown() {
			that.className = "list-dropdown hidden";
			document.removeEventListener("click", hideDropdown);
		});
	}

	handleUpdateListClick(list) {
		return (e) => {
			e.stopPropagation();
			this.setState({modalOpen: true, title: list.title, formType: "update", updateId: list.id});
		}
	}


	handleRemoveListClick(id) {
		return (e) => {
			e.stopPropagation();
			this.props.destroyList(id)
		}
	}

	listTitles() {
		console.log(this.props.currentListId)
		return Object.keys(this.props.lists)
			.map( listId => (
				<li className={this.props.currentListId == listId ? "list-name active" : "list-name"} key={listId}>
					<Link to={`app/list/${listId}`} >
						{this.props.lists[listId].title}
					</Link>
					<span onClick={this.handleDropdownClick.bind(this)} className="list-options-dropdown">
						<ul className="list-dropdown hidden">
							<li onClick={this.handleUpdateListClick(this.props.lists[listId]).bind(this)}>Update List</li>
							<li onClick={this.handleRemoveListClick(listId)}>Remove List</li>
						</ul>
					</span>
				</li>
				)
			);
	}

	render() {
		return (
			<nav className="sidebar">
				<h3 className="logo">DON'T FORGET THE MILK</h3>
				<ul>
					<li className="list-title">All Tasks</li>
					<ul>
						{this.listTitles()}
					</ul>
					<li className="list-title">Lists</li>
					<ListForm
						open={this.state.modalOpen} 
						updateId={this.state.updateId} 
						title={this.state.title} 
						formType={this.state.formType} 
						updateList={this.props.updateList} 
						createList={this.props.createList} 
					/>
					<ul>
						{this.listTitles()}
					</ul>
				</ul>
			</nav>
		)
	}
}