import React from 'react';
import TaskForm from '../task/task_form'; 
import Task from '../task/task'

export default class List extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			complete: false,
			sort: ""
		}
	}

	componentDidMount() {
		this.props.fetchLists();
	}

	sortTasks() {
		let tasks = this.props.tasks[this.state.completed ? "completed" : "incomplete"];
		let taskIds = Object.keys(tasks);
		if (this.state.sort === "estimate") {
			return taskIds.sort((t1, t2) => tasks[t2].estimate - tasks[t1].estimate);
		} else if (this.state.sort === "due_date" || this.state.sort === "start_date") {
			return taskIds.sort((t1, t2) => {
				let date1 = tasks[t1][this.state.sort] ? new Date(tasks[t1][this.state.sort]) : new Date(9999999999999)
				let date2 = tasks[t2][this.state.sort] ? new Date(tasks[t2][this.state.sort]) : new Date(9999999999999)
				return date1 - date2;
			});
		} else if(this.state.sort === "priority"){
			return taskIds.sort((t1, t2) => tasks[t1].priority - tasks[t2].priority);
		} else {
			return taskIds;
		}

	}


	tasks() {
		let keys;
		if (this.state.sort) {
			keys = this.sortTasks()
		} else {
			keys = Object.keys(this.props.tasks.incomplete)
		}
		if (!this.state.complete) {
			return keys
				.map( taskId => (
					<Task key={taskId} 
						task={this.props.tasks.incomplete[taskId]} 
						currentTask={this.props.currentTask.id == taskId}/>
					)
				);
		} else {
			return Object.keys(this.props.tasks.completed)
				.map( taskId => (
					<Task key={taskId} 
						task={this.props.tasks.completed[taskId]}/>
					)
				);
		}
	}


	listTabs() {
		if (this.state.complete) {
			return (
				<div className="tabs">
					<ul className="list-tabs">
						<li className="inactive" onClick={this.handleTabClick.bind(this)}>Incomplete</li>
						<li className="active">Completed</li>
						<li>
							<select className="sort-select" value={this.state.sort} onChange={e => this.setState({sort: e.target.value})}>
								<option disabled value="">Sort by...</option>
								<option value="">Time Created</option>
								<option value="due_date">Due Date</option>
								<option value="priority">Priority</option>
								<option value="start_date">Start Date</option>
								<option value="estimate">Estimate</option>
							</select>
						</li>
					</ul>
				</div>
			)
		} else {
			return (
				<div className="tabs">
					<ul className="list-tabs">
						<li className="active">Incomplete</li>
						<li className="inactive" onClick={this.handleTabClick.bind(this)}>Completed</li>
						<li>
							<select className="sort-select" value={this.state.sort} onChange={e => this.setState({sort: e.target.value})}>
								<option disabled value="">Sort by...</option>
								<option value="">Time Created</option>
								<option value="due_date">Due Date</option>
								<option value="priority">Priority</option>
								<option value="start_date">Start Date</option>
								<option value="estimate">Estimate</option>
							</select>
						</li>
					</ul>
					
				</div>
			)
		}
	}


	handleTabClick() {
		this.setState({complete: !this.state.complete})
	}

	render() {
		if (this.state.complete){
			return (
				<main className="list">
					{this.listTabs()}
					<ul className="tasks">
						{this.tasks()}
					</ul>
				</main>
			)
		} else {
			return (
				<main className="list">
						{this.listTabs()}
					<TaskForm submitTask={this.props.submitTask} listId={this.props.list.id} />
					<ul className="tasks">
						{this.tasks()}
					</ul>
				</main>

			)
		}
	}
}