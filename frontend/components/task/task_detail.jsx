import React from 'react';
import merge from 'lodash/merge';


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


	handleChange(field) {
		return e => this.setState({[field]: e.target.value})
	}



	handleCompletionClick() {
		let newState = merge({}, this.state, {completed: !this.state.completed})

		this.props.updateTask(newState);
		this.setState(newState);
	}


	render() {
		return (
			<section className="task-detail detail">
				<header>
					<div className={`priority priority-${this.props.task.priority}`}></div>
					<textarea
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
		         	  className="task-input"
		              onChange={this.handleChange("priority").bind(this)} 
		              onBlur={() => this.props.updateTask(this.state)} 
		              value={this.state.priority}>
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
