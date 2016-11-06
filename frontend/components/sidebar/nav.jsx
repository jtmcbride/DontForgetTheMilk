import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ListForm from '../list/list_form';


class SidebarNav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			modalOpen: false,
			title: "",
			formType: "create"
		};
	}

	componentWillReceiveProps(nextProps) {
		// if (this.props.router.params.id !== nextProps.currentListId) {
		// 	this.props.router.push(`app/list/${nextProps.currentListId}`)
		// }
		this.setState({
			modalOpen: false
		});
	}

	componentDidUpdate() {
		console.log(this.props.router.params.id)
		// if (this.props.router.params.id !== this.props.currentListId) {
		// 	this.props.router.push(`app/list/${this.props.currentListId}`)
		// }
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
							<span>{this.props.lists[listId].title}</span>
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
							<li>Today</li>
						</ul>
					<li className="list-title">
						Lists
						<ListForm
							open={this.state.modalOpen} 
							updateId={this.state.updateId} 
							title={this.state.title} 
							formType={this.state.formType} 
							updateList={this.props.updateList} 
							createList={this.props.createList} 
						/>
					</li>
					<ul>
						<ReactCSSTransitionGroup
				          transitionName="title-transition"
				          transitionEnterTimeout={500}
				          transitionLeaveTimeout={300}>
							{this.listTitles()}
						</ReactCSSTransitionGroup>
					</ul>
				</ul>
			</nav>
		)
	}
}

export default withRouter(SidebarNav);
