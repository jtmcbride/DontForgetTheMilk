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
			    transform             : 'translate(-50%, -50%)',
			  }	
			}
		this.state = {
			modalIsOpen: false,
			title: "",
			error: false,
			updateId: this.props.updateId
		}
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
	    this.setState({modalIsOpen: true, formType: "create"});
	}

  	afterOpenModal() {
	    this.refs.subtitle.style.color = 'black';
	}

  	closeModal() {
	    this.setState({modalIsOpen: false, error: false, title: "", formType: "create"});
	}

	handleChange(e) {
	  	this.setState({ title: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (/\S/.test(this.state.title)) {
			if (this.state.formType === "create"){
				this.props.createList({title: this.state.title});
			} else {
				this.props.updateList({title: this.state.title, id: this.state.updateId})
			}
			this.closeModal();
		} else {
			this.setState({error: true})
		}
	}

	componentWillReceiveProps(nextProps) {
		let changedProps = (nextProps.open !== this.state.modalIsOpen)
		if (changedProps) {
			this.setState({
				modalIsOpen: true,
				title: nextProps.title,
				formType: nextProps.formType,
				updateId: nextProps.updateId
			});
		}
	}



	error() {
		if (this.state.error) {
			return <p className="form-errors">Title can't be blank.</p>
		}
	}



	render() {
			return (
			<span className="modal-form-button">	
				<button onClick={this.openModal}>
				</button>
				<Modal
				  isOpen={this.state.modalIsOpen}
		          onAfterOpen={this.afterOpenModal}
		          onRequestClose={this.closeModal}
		          style={this.customStyles}
		          contentLabel="New List">
				  <h2 ref="subtitle">{this.state.formType === "create" ? "Create List" : "Update List"}</h2>
		          <button onClick={this.closeModal}>Close</button>
		          <form className="modal-form">
			          <label>
				           Title: <br />
				           <input className={this.state.error ? "invalid" : null} value={this.state.title} onChange={this.handleChange.bind(this)}/>
				           
		              </label>
		           	 <button onClick={this.handleSubmit.bind(this)}>Submit</button>
		           	 {this.error()}
		          </form>

				</Modal>
			</span>)
	}


}