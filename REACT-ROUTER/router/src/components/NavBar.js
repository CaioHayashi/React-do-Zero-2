import React from "react";
import "./NavBar.css";

// 2- links com react router
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about">Sobre</Link>
		</nav>
	);
};

export default NavBar;
