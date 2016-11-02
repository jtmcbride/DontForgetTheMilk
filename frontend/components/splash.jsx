import React from 'react'
import { Link, withRouter } from 'react-router';


const Splash = () => (
	<div>
		<header className="splash-header">
			<h1 className="logo">Don't Forget The Milk</h1>
			<div className="splash-header-links">
				<Link to='login'>Login</Link>
				<Link to='signup'>Sign Up</Link>
			</div>
		</header>
		<main className="splash">
			<Link to="signup"><button>Sign Up</button></Link>
			<div><img src="https://www.rememberthemilk.com/img/hp_steve_3.png" /></div>
			<div className="logo">Get More Done!</div>
		</main>
		<footer className="splash-footer">
			<a href="#">Github</a>
			<a href="#">LinkedIn</a>
			<a href="#">Shtuff</a>
		</footer>
	</div>
	);


export default withRouter(Splash);