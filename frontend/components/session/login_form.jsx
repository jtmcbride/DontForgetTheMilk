import React from 'react';
import { withRouter, Link } from 'react-router';


class LoginForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		}
	  this.processForm = this.props.processForm.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectOnLogin();
	}

	redirectOnLogin() {
		if (this.props.loggedIn) {
			this.props.router.push("/app")
		}
	}

	handleChange(name) {
	  return e => {
	  	this.setState({ [name]: e.target.value });
	  }
	}

	handleSubmit(e) {
		e.preventDefault();
		this.processForm(this.state);
	}

	errors() {
	  return this.props.errors.map((error, i) => <li key={i}>{error}</li>);
	}

	render(){

	  return (
		  <div>
		  	<Link to="signup"><button className="other-form">Sign Up</button></Link>
		  	<div className="left-half">
		  		<h1 className="logo">Logo</h1>
		  	</div>
		  	<div className="right-half">
			  	<form>
					 <ul className="form-errors">
						{this.errors()}
					</ul>
					
						<input 
							placeholder="Username" 
							onChange={this.handleChange("username")} 
							value={this.state.username} 
						/>
					    <input
						     placeholder="Password" 
						     type="password" 
						     onChange={this.handleChange("password")} 
						     value={this.state.password} 
					     />				     
						<button onClick={this.handleSubmit}>Login</button>
	
				</form>
			</div>
		  </div>
		  )
  	}
}

export default withRouter(LoginForm);


