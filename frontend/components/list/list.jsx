import React from 'react';
import Modal from 'react-modal';

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
		return ["he", "ha", "Whu"].map( t => <li>{t}</li>)
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
				<div className="task-form">
					<input id="task-input" placeholder="Add A Task..."/>
					<button className="add-task">
						Add Task
					</button>
				</div>
				<ul className="tasks">
					<span className="priority"/>
					{this.tasks()}
				</ul>
			</main>

			)
	}
}