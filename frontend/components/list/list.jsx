import React from 'react';
import Modal from 'react-modal';

export default class List extends React.Component {


	constructor(props) {
		super(props);
		this.state = {modalIsOpen: false}
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.customStyles  = {
		  content : {
		    top                   : '50%',
		    left                  : '50%',
		    right                 : 'auto',
		    bottom                : 'auto',
		    marginRight           : '-50%',
		    transform             : 'translate(-50%, -50%)'
		  }
	};

	}

	tasks() {
		return ["he", "ha", "Whu"].map( t => <li>{t}</li>)
	}


  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
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
				<button onClick={this.openModal}>Open Modal</button>
				<Modal
				  isOpen={this.state.modalIsOpen}
		          onAfterOpen={this.afterOpenModal}
		          onRequestClose={this.closeModal}
		          style={this.customStyles}
		          contentLabel="New List"
				>
					<h2 ref="subtitle">Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
				</Modal>
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