import React from 'react';

export default class List extends React.Component {

	tasks() {
		return ["he", "ha", "Whu"].map( t => <li>{t}</li>)
	}


	// handleSubmit(e) {
	// 	e.preventDefault();
	// 	e.stopImmediatePropagation();
	// 	document.getElementById("task-input").focus();
	// }

	render() {
		return (
			<main className="list">
				<div>
					<ul className="list-tabs">
						<li>Incomplete</li>
						<li>Complete</li>
					</ul>
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