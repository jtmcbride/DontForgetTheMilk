import React from 'react';
import Modal from 'react-modal';

export default class ListForm extends React.Component {

	constructor(props) {
		super(props);
		this.customStyles  = {
			  content : {
			    top                   : '50%',
			    left                  : '50%',
			    right                 : 'auto',
			    bottom                : 'auto',
			    marginRight           : '-50%',
			    transform             : 'translate(-50%, -50%)'
			  }	
			}
		this.state = {modalIsOpen: false}
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
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

	render() {
			return (
			<span className="modal-form-button">	
				<button onClick={this.openModal}></button>
				<Modal
				  isOpen={this.state.modalIsOpen}
		          onAfterOpen={this.afterOpenModal}
		          onRequestClose={this.closeModal}
		          style={this.customStyles}
		          contentLabel="New List">
				  <h2 ref="subtitle">Create List</h2>
		          <button onClick={this.closeModal}>close</button>
		          <form>
			          <label>
				           Title:
				           <input />
		              </label>
		           	 <button>Submit</button>
		          </form>

				</Modal>
			</span>)
	}


}