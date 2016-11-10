import React from 'react';
import merge from 'lodash/merge';
import {hashHistory } from 'react-router';
import moment from 'moment';

import DatePicker from 'react-datepicker';


export default class TaskDetail extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			id: this.props.task.name ? this.props.task.name : "",
			name: this.props.task.name ? this.props.task.name : "",
			estimate: this.props.task.estimate ? this.props.task.estimate : "",
			start_date: this.props.task.start_date ? moment(this.props.task.start_date) : null,
			due_date: this.props.task.due_date ? moment(this.props.task.due_date) : null,
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
			// if (task.due_date === "") {task.due_date = moment()}
			// if (task.start_date === "") {task.start_date = moment()}
			this.setState(task);
		}
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.escapeClose);
	}


	handleChange(field) {
		return e => this.setState({[field]: e.target.value})
	}

	handleDateChange(type) {
		return (date) => {
			this.setState({[type]: date ? date._d : date}, () => {this.props.updateTask({id: this.state.id, [type]: this.state[type]})})
		}
	}

	handlePriorityChange(e) {
		this.setState({priority: e.target.value}, () => {$('#task-priority').blur()})
	}


	handleCompletionClick() {
		let newState = merge({}, this.state, {completed: !this.state.completed})

		this.props.updateTask(newState);
		this.setState(newState);
	}

	handleBlur(type) {
		return () => {
			this.props.updateTask({id: this.state.id, [type]: this.state[type] ? this.state[type] : null});
		}
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
		            <DatePicker 
		              className="task-input datepicker"
		              onChange={this.handleDateChange("start_date").bind(this)} 
		              onBlur={this.handleBlur("start_date").bind(this)}
		              isClearable={true}
		              placeholderText="No Start Date"
		              selected={this.state.start_date ? moment(this.state.start_date) : null} />
		          </div>
		          <div>
		            <span className="value-name">Due</span>
		            <DatePicker 
		              className="task-input datepicker"
		              onChange={this.handleDateChange("due_date").bind(this)} 
		              onBlur={this.handleBlur("due_date").bind(this)}
		              isClearable={true}
		              placeholderText="No Due Date"
		              selected={this.state.due_date ? moment(this.state.due_date) : null} />
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
