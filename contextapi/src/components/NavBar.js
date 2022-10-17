import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
	return (
		<div className="flex justify-evenly bg-zinc-800 text-white my-3">
			<NavLink className="font- font-semibold py-1 px-5" end to="/">
				Home
			</NavLink>
			<NavLink className="font-semibold p-1 px-5" to="/products">
				Products
			</NavLink>
			<NavLink className="font-semibold p-1 px-5" to="/about">
				About
			</NavLink>
		</div>
	);
};
