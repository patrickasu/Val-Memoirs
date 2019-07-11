import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
	<nav>
		<ul className="my-navbar">
			<i class="fab fa-facebook"></i>
			<i class="fab fa-twitter"></i>
			<i class="fab fa-instagram"></i>
			<i class="fab fa-google-plus-g"></i>
			<i class="fab fa-youtube"></i>
		</ul>
		<ul className="my-navbar">
			<li><NavLink className="nav-links" exact to="/">Home</NavLink></li>
			<li><NavLink className="nav-links" to="/contact">Contact Us</NavLink></li>
		</ul>
	</nav>
);

export default Navbar;

