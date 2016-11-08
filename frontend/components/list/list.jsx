import React from 'react';
import TaskForm from '../task/task_form'; 
import Task from '../task/task'

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
		if (!this.state.complete) {
			return Object.keys(this.props.tasks.incomplete)
				.map( taskId => (
					<Task key={taskId} 
						task={this.props.tasks.incomplete[taskId]} 
						currentTask={this.props.currentTask.id == taskId}/>
					)
				);
		} else {
			return Object.keys(this.props.tasks.completed).map( taskId => <Task key={taskId} task={this.props.tasks.completed[taskId]} />)
		}
	}


	listTabs() {
		if (this.state.complete) {
			
			return (<ul className="list-tabs">
						<li className="inactive" onClick={this.handleTabClick.bind(this)}>Incomplete</li>
						<li className="active">Completed</li>
					</ul>)
		} else {
			return (<ul className="list-tabs">
						<li className="active">Incomplete</li>
						<li className="inactive" onClick={this.handleTabClick.bind(this)}>Completed</li>
					</ul>)
		}
	}


	handleTabClick() {
		this.setState({complete: !this.state.complete})
	}

	render() {
		if (this.state.complete){
			return (
				<main className="list">
					<div className="tabs">
						{this.listTabs()}
					</div>
					<ul className="tasks">
						{this.tasks()}
					</ul>
				</main>

			)
		} else {
			return (
				<main className="list">
					<div className="tabs">
						{this.listTabs()}
					</div>
					<TaskForm submitTask={this.props.submitTask} listId={this.props.list.id} />
					<ul className="tasks">
						{this.tasks()}
					</ul>
				</main>

			)
		}
	}
}