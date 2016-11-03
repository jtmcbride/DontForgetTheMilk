import React from 'react';
import Modal from 'react-modal';

export default class List extends React.Component {


	constructor(props) {
		super(props);
		this.state = {modalIsOpen: false}
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	};

	componentDidMount() {
		this.props.fetchLists();
	}


	tasks() {
		return ["he", "ha", "Whu"].map( t => <li>{t}</li>)
	}


  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
					<ul className="list-tabs">
						<li className="active">Incomplete</li>
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