import React from 'react';
import { withRouter, Link } from 'react-router';

class SignupForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			username: "",
			email: "",
			password: ""
		}
	  this.processForm = this.props.processForm.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}


	componentDidUpdate() {
		this.redirectOnLogin();
	}

	handleChange(name) {
	  return e => this.setState({ [name]: e.target.value })
	}

	handleSubmit() {
	  this.processForm(this.state);
	}

	errors(errorType) {
		if (this.props.errors[errorType]) {
			return this.props.errors[errorType].map((error, i) => <li key={i}>{errorType + " " + error}</li>);
		}
	}

	redirectOnLogin() {
		if (this.props.loggedIn) {
			this.props.router.push("/app")
		}
	}

	render(){

	  return (
		  <div>
		  	<Link to="login"><button className="other-form">Login</button></Link>
		  	<div className="left-half">
		  		<h1 className="logo">Logo</h1>
		  	</div>
		  	<div className="right-half">
			  	<form>
					<input 
						placeholder="Username" 
						onChange={this.handleChange("username")} 
						value={this.state.username} 
					/>
					<ul className="form-errors">
						{this.errors("username")}
					</ul>
					<input 
						placeholder="Email" 
						onChange={this.handleChange("email")} 
						value={this.state.email} 
					/>
					<ul className="form-errors">
						{this.errors("email")}
					</ul>
				    <input
					     placeholder="Password" 
					     type="password" 
					     onChange={this.handleChange("password")} 
					     value={this.state.password} 
				     />
				     <ul className="form-errors">
						{this.errors("password")}
					</ul>

					<button onClick={this.handleSubmit}>Sign Up!</button>
				</form>
			</div>
		  </div>
		  )
  }
}

export default withRouter(SignupForm);
