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

	handleSubmit(e) {
		e.preventDefault();
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
				<h3 className="logo">Don't Forget The Milk!</h3>
				<div className="signup-images">
					<div className="circle"><img  src="https://www.rememberthemilk.com/img/hp_person3.png"/></div>
					<div className="circle"><img  src="https://www.rememberthemilk.com/img/hp_person2.png"/></div>
					<div className="circle"><img  src="https://www.rememberthemilk.com/img/hp_person4.png"/></div>
				</div>
			</div>
			<div className="right-half">
				<form>
					<input 
						placeholder="Username" 
						onChange={this.handleChange("username")} 
						value={this.state.username} 
						className={this.props.errors["username"] ? "invalid" : null}
					/>
					<ul className="form-errors">
						{this.errors("username")}
					</ul>
					<input 
						placeholder="Email" 
						onChange={this.handleChange("email")} 
						value={this.state.email} 
						className={this.props.errors["email"] ? "invalid" : null}
					/>
					<ul className="form-errors">
						{this.errors("email")}
					</ul>
					<input
						 placeholder="Password" 
						 type="password" 
						 onChange={this.handleChange("password")} 
						 value={this.state.password} 
						 className={this.props.errors["password"] ? "invalid" : null}
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
