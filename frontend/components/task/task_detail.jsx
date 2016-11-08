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
		// Object.keys(this.state).forEach(key => {
		// 	if (!this.state[key]) {
		// 		this.state[key] = ""
		// 	}
		// })

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

	// taskSummary() {
	// 	let keys = {"start_date": "Start", "due_date": "Due", "estimate": "estimate"}
	// 	let results = {};
	// 	let task  = this.props.task;
	// 	for (let key in keys) {
	// 		if (task[key]) {
	// 			results[keys[key]] = task[key];
	// 		}
	// 	}
	// 	return Object.keys(keys).map((key) => <div key={key}><span className="value-name">{keys[key]}</span><input onChange={this.handleChange(key).bind(this)} onBlur={e => console.log(e.target.value)} type={key == "estimate" ? "number" : "date"} value={this.state[key]} /></div>)
	// }


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
		              onBlur={() => {debugger;this.props.updateTask(this.state)}} 
		              type="number" 
		              value={this.state.estimate} />Minutes
		          </div>
		          <button onClick={this.handleCompletionClick.bind(this)}>Mark As{this.state.completed ? " Incomplete" : " Completed"}</button>
				</section>
			</section>
		);
	}
}
