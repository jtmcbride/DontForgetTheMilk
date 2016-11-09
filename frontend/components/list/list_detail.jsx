import React from 'react';

export default class ListDetail extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		console.log(this.props)
		return (<section className="list-detail detail">
					<header>
						{this.props.list.title}
					</header>
						<section className="list-summary">
							<div>
								<div className="num-tasks">
									<span>{this.props.numTasks}</span>
									<span>tasks</span>
								</div>
								<div className="divider"></div>
								<div>{Math.floor(this.props.time/ 60)}hrs {this.props.time % 60}mins</div>
							</div>
							
							<div className="overdue">
								<span>{this.props.overdue}</span> 
								<span>overdue</span>
							</div>
							<div className="completed">
								<span>{this.props.numCompletedTasks}</span> 
								<span>completed</span>
							</div>
						</section>
				</section>)
	}
}