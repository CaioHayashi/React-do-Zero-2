import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
	return (
		<div className="NavBar">
			<NavLink to="/p1"> Página 01 </NavLink>
			<NavLink to="/p2"> Página 02 </NavLink>
			<NavLink to="/p3"> Página 03 </NavLink>
		</div>
	);
};
