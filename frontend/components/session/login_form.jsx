import React from 'react';
import { withRouter, Link } from 'react-router';


class LoginForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};

	    this.processForm = this.props.processForm.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleDemo = this.handleDemo.bind(this);
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

	handleDemo(e) {
		e.preventDefault();
		this.processForm({
			username: "guest",
			password: "password"
		});
	}

	errors(errorType) {
		if (this.props.errors[errorType]) {
			return (<ul className="form-errors">
				{this.props.errors[errorType].map((error, i) => <li key={i}>
					{error}
				</li>)}
			</ul>)
		}
	}

	render(){

	  return (
		  <div>
		  	<Link to="signup"><button className="other-form">Sign Up</button></Link>
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
			  		<h3>Welcome Back!</h3>
					 
						{this.errors("login")}
					
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
						<button onClick={this.handleDemo}>Demo Login</button>
	
				</form>
			</div>
		  </div>
		  )
  	}
}

export default withRouter(LoginForm);


