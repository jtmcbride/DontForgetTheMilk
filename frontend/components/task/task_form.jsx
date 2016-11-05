import React from 'react';

export default class TaskForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			name: ""
		}
	}

	handleChange(e) {
	  this.setState({ name: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.submitTask(this.state);
	}

	render() {
		return (
			<div className="task-form">
					<input id="task-input" placeholder="Add A Task..." value={this.state.name} onChange={this.handleChange.bind(this)}/>
					<button className="add-task" onClick={this.handleSubmit.bind(this)}>
						Add Task
					</button>
				</div>
			)
	}
}