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
								<span></span>
								<span></span>
							</div>
							<div className="divider"></div>
							<div>
							</div>
						</section>
					</div>
				</section>)
	}
}