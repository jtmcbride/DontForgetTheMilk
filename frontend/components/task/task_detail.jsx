import React from 'react';

export default class TaskDetail extends React.Component {

	constructor(props) {
		super(props);
		console.log("deratils", props);
	}


	render() {
		return (
			<section className="task-detail detail">
				<header>
					<div className={`priority priority-${this.props.task.priority}`}></div>
					{this.props.task.name}
				</header>
				<div className="details">
					<section className="task-summary">
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