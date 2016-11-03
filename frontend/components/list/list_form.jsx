import React from 'react';


this.customStyles  = {
		  content : {
		    top                   : '50%',
		    left                  : '50%',
		    right                 : 'auto',
		    bottom                : 'auto',
		    marginRight           : '-50%',
		    transform             : 'translate(-50%, -50%)'
		  }	


			<Modal
			  isOpen={this.state.modalIsOpen}
	          onAfterOpen={this.afterOpenModal}
	          onRequestClose={this.closeModal}
	          style={this.customStyles}
	          contentLabel="New List">
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