import React from 'react'
import { Link, withRouter } from 'react-router';


const Splash = () => (
	<div>
		<h1>Milk</h1>
		<Link to='login'>Login</Link>
		<Link to='signup'>Sign Up</Link>
	</div>
	);


export default withRouter(Splash);