import React from 'react'
import { Link, withRouter } from 'react-router';


const Splash = () => (
	<div>
		<header className="splash-header">
			<span>
				<img className="logo-image" src="http://i.imgur.com/YmJW8rl.png" />
				<h3 className="logo">DON'T FORGET THE MILK</h3>
			</span>
			<div className="splash-header-links">
				<Link to='login'>Login</Link>
				<Link to='signup'>Sign Up</Link>
			</div>
		</header>
		<main className="splash">
			<Link to="login"><button>Login</button></Link>
			<div><img src="https://www.rememberthemilk.com/img/hp_steve_3.png" /></div>
			<div className="logo">Get More Done!</div>
		</main>
		<footer className="splash-footer">
			<a href="https://github.com/jtmcbride" className="github-link fa"></a>
			<a href="https://linkedin.com" className="linkedin-link fa"></a>
		</footer>
	</div>
	);


export default withRouter(Splash);