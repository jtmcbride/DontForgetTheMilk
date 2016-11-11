import React from 'react';
import { withRouter, Link } from 'react-router';


class Header extends React.Component {

	constructor(props) {
		super(props)
		this.username = this.props.user ? this.props.user.username : null;
	}

	componentDidUpdate() {
		if (!this.props.user) {
			this.props.router.replace("login");
		}
	}

	handleLogout() {
		this.props.logout();
	}

	handleSearch(e) {
		e.preventDefault();
		this.props.search($("#search").val());
		$("#search").val()
		this.props.router.push("app/search");
	}

	
	render(){

		return (
			<header id="header" className="header">
				<div className="header-main">
					<form className="header-search">
						<input id="search" aria-label="Search Tasks" placeholder="Search Tasks" />
						<button className="search-button" id="header-search-button" onClick={this.handleSearch.bind(this)} />
					</form>
					<div className="header-settings">
						
						<div className="divider"></div>
						<span className="settings">
							<ul className="dropdown">
								<li>{this.username}</li>
								<li onClick={this.handleLogout.bind(this)}>Logout</li>
							</ul>
						</span>
					</div>
				</div>
			</header>
		)
	}
}

export default withRouter(Header);


