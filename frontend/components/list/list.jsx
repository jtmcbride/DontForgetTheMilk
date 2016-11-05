import React from 'react';
import TaskForm from '../task/task_form'; 

export default class List extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			complete: false
		}
	};

	componentDidMount() {
		this.props.fetchLists();
	}


	tasks() {
		return Object.keys(this.props.tasks).map( taskId => <li key={taskId}>{this.props.tasks[taskId].name}</li>)
	}


	listTabs() {
		if (this.state.complete) {
			
			return (<ul className="list-tabs">
						<li className="inactive" onClick={this.handleTabClick.bind(this)}>Incomplete</li>
						<li className="active">Complete</li>
					</ul>)
		} else {
			return (<ul className="list-tabs">
						<li className="active">Incomplete</li>
						<li className="inactive" onClick={this.handleTabClick.bind(this)}>Complete</li>
					</ul>)
		}
	}


	handleTabClick() {
		this.setState({complete: !this.state.complete})
	}


  

	// handleSubmit(e) {
	// 	e.preventDefault();
	// 	e.stopImmediatePropagation();
	// 	document.getElementById("task-input").focus();
	// }

	render() {
		return (
			<main className="list">
				<div className="tabs">
					{this.listTabs()}
				</div>
				<TaskForm submitTask={this.props.submitTask} />
				<ul className="tasks">
					<span className="priority"/>
					{this.tasks()}
				</ul>
			</main>

			)
	}
}