import React from 'react';
import { hashHistory } from 'react-router';

export default class TaskForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			name: ""
		}
		console.log();
	}

	handleChange(e) {
	  this.setState({ name: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault();
		if (hashHistory.getCurrentLocation().pathname.startsWith("/app/today") ||
				hashHistory.getCurrentLocation().pathname.startsWith("/app/week")) {
			this.props.submitTask({ name: this.state.name, due_date: new Date })
		} else {
			this.props.submitTask(this.state, this.props.listId);
		}
		this.setState({name: ""})
	}

	render() {
		return (
			<form className="task-form">
					<input id="task-input" 
						placeholder="Add A Task..." 
						value={this.state.name} 
						onChange={this.handleChange.bind(this)}
					/>
					<button 
						disabled={this.state.name === ""} 
						className="add-task" 
						onClick={this.handleSubmit.bind(this)}>
							Add Task
					</button>
				</form>
			)
	}
}