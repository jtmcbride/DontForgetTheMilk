import React from 'react';

export default class ListDetail extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (<section className="list-detail">
					<header>
						{this.props.list.title}
					</header>
					<div className="details">
						<section className="list-summary">
							<div>
								<span>7</span>
								<span>tasks</span>
							</div>
							<div className="divider"></div>
							<div>
								0h40m <br />
								estimated
							</div>
						</section>
					</div>
				</section>)
	}
}