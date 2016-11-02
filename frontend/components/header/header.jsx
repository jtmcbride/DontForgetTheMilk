import React from 'react';
import { withRouter, Link } from 'react-router';


class LoginForm extends React.Component {
	
	render(){

		return (
			<header id="header" class="header">
				<div class="header-main">
					<div class="header-search">
					<input aria-label="Search Tasks" placeholder="Search Tasks" />
					<div class="search-button" id="header-search-button"></div>
					</div>
					<div class="header-settings">
						<span class="notifications"></span>
						<div class="divider"></div>
						<span class="settings"></span>
					</div>
				</div>

			</header>
		)
	}
}
