import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
	return (
		<div className="flex justify-center gap-3">
			<NavLink className="p-1" end to="/">
				Home
			</NavLink>
			<NavLink className=" p-1" to="/products">
				Products
			</NavLink>
			<NavLink className="p-1" to="/about">
				About
			</NavLink>
		</div>
	);
};
