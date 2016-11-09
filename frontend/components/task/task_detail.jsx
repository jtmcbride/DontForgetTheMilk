import React from 'react';
import merge from 'lodash/merge';
import {hashHistory } from "react-router";


export default class TaskDetail extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			id: this.props.task.name ? this.props.task.name : "",
			name: this.props.task.name ? this.props.task.name : "",
			estimate: this.props.task.estimate ? this.props.task.estimate : "",
			start_date: this.props.task.start_date ? this.props.task.start_date : "",
			due_date: this.props.task.due_date ? this.props.task.due_date : "",
			priority: this.props.task.priority ? this.props.task.priority : "",
			completed: this.props.task.completed ? this.props.task.completed : false,
		};
		this.escapeClose = (e) => {
			if (e.key === "Escape") {
				let location = hashHistory.getCurrentLocation().pathname;
				location = location.slice(0, location.indexOf("/task"));
				hashHistory.push(location);
				document.removeEventListener("keydown", this.escapeClose);
			}
		}
	}

	componentDidMount() {
		document.addEventListener("keydown", this.escapeClose);
	}

	componentWillReceiveProps(nextProps) {
		let task = {};
		if (nextProps.task.id){
			Object.keys(nextProps.task).forEach(key => {
				if (nextProps.task[key]) {
					task[key] = nextProps.task[key];
				} else {
					task[key] = "";
				}
			});
			if (task.completed === "") {task.completed = false}
			this.setState(task);
		}
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.escapeClose);
	}


	handleChange(field) {
		return e => this.setState({[field]: e.target.value})
	}

	handlePriorityChange(e) {
		this.setState({priority: e.target.value}, () => {$('#task-priority').blur()})
	}


	handleCompletionClick() {
		let newState = merge({}, this.state, {completed: !this.state.completed})

		this.props.updateTask(newState);
		this.setState(newState);
	}


	render() {
		return (
			<section className="task-detail detail">
				<div className="close" onClick={() => {
					let location = hashHistory.getCurrentLocation().pathname;
					location = location.slice(0, location.indexOf("/task"));
					hashHistory.push(location);
				}}
				>Close <span>X</span></div>
				<header>
					<div className={`priority priority-${this.props.task.priority}`}></div>
					<input
					  className="task-input"
		              onChange={this.handleChange("name").bind(this)} 
		              onBlur={() => this.props.updateTask(this.state)}
		              value={this.state.name} />
				</header>
				<section className="task-summary">
		          <div>
		            <span className="value-name">Start</span>
		            <input
		         	  className="task-input"
		              onChange={this.handleChange("start_date").bind(this)} 
		              onBlur={() => this.props.updateTask(this.state)} 
		              type="date" 
		              value={this.state.start_date} />
		          </div>
		          <div>
		            <span className="value-name">Due</span>
		            <input 
		              className="task-input"
		              onChange={this.handleChange("due_date").bind(this)} 
		              onBlur={() => this.props.updateTask(this.state)} 
		              type="date" 
		              value={this.state.due_date} />
		          </div>
		          <div>
		            <span className="value-name">Estimate</span>
		            <input
		              className="task-input estimate"
		              onChange={this.handleChange("estimate").bind(this)} 
		              onBlur={() => {this.props.updateTask(this.state)}} 
		              type="number" 
		              value={this.state.estimate} />Minutes
		          </div>
		           <div>
		            <span className="value-name">Priority</span>
		            <select
		              id="task-priority"
		         	  className="task-input"
		              onChange={this.handleChange("priority").bind(this)} 
		              onBlur={() => this.props.updateTask(this.state)} 
		              value={this.state.priority} 
		              onChange={this.handlePriorityChange.bind(this)}>
		              	<option value={null}>0</option>
		              	<option>1</option>
		              	<option>2</option>
		              	<option>3</option>
		              </select>
		          </div>
		          <button onClick={this.handleCompletionClick.bind(this)}>
		          	Mark As{this.state.completed ? " Incomplete" : " Completed"}
		          </button>
				</section>
			</section>
		);
	}
}
