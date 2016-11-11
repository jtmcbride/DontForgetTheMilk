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
		this.setState({
			modalOpen: false
		});
	}


	handleDropdownClick(e) {
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
			if (confirm("Do you really want to delete this list? All associated tasks will also be deleted.")) {
				this.props.destroyList(id);
				this.props.router.push('/app');
			}
		}
	}

	listTitles() {
		return Object.keys(this.props.lists)
			.map( listId => (
					<li className={this.props.currentListId == listId ? "list-name active" : "list-name"} key={listId}>
						<Link to={`app/list/${listId}`} >
							<span>{this.props.lists[listId].title}</span> <span>{this.props.lists[listId].count}</span>
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

	errors() {

		let error = [];
		setTimeout(() => this.props.clearErrors(), 1500);
		return (
			<div className="errors-fade">
				{"You already have a list with that title"}
			</div>
		)

	}


	collapseList() {
		$('.collapsible-container').toggleClass('collapsed');
		$('.arrow').toggleClass('closed');

	}

	render() {
		return (
			<nav className="sidebar">
				{ this.props.errors.length > 0 ? this.errors() : null }
				<img className="logo-image" src="http://i.imgur.com/YmJW8rl.png" />
				<h3 className="logo">DON'T FORGET THE MILK</h3>
				<ul>
					<li className={this.props.currentListId == "all" ? "list-name active" : "list-name"}>
						<Link to="/app/all">All Tasks</Link>
					</li>	
					<li className={this.props.currentListId == "today" ? "list-name active" : "list-name"}>
						<Link to="/app/today">Today</Link>
					</li>	
					<li className={this.props.currentListId == "week" ? "list-name active bordered" : "list-name bordered"}>
						<Link to="/app/week">This Week</Link>
					</li>
					<li className="list-title" onClick={this.collapseList}>
						<div className="arrow open">▾ </div>Lists
						<ListForm
							open={this.state.modalOpen} 
							updateId={this.state.updateId} 
							title={this.state.title} 
							formType={this.state.formType} 
							updateList={this.props.updateList} 
							createList={this.props.createList} 
						/>
					</li>
					<div className="collapsible-container">
						<ul className="collapsible">
							<ReactCSSTransitionGroup
					          transitionName="title-transition"
					          transitionEnterTimeout={500}
					          transitionLeaveTimeout={300}>
								{this.listTitles()}
							</ReactCSSTransitionGroup>
						</ul>
					</div>
				</ul>
			</nav>
		)
	}
}

export default withRouter(SidebarNav);
