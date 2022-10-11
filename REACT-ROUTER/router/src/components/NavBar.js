import React from "react";
import "./NavBar.css";

// 2- links com react router
import { /* Link ,*/ NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			{/* 			<Link to="/">Home</Link>
			<Link to="/about">Sobre</Link> */}
			<NavLink
				to="/"
				end
				/* 				className={({ isActive }) => (isActive ? "isActive" : "isNotActive")} */
			>
				Home
			</NavLink>
			<NavLink to="/about">Sobre</NavLink>
		</nav>
	);
};

export default NavBar;
