import React from "react";
import { useParams } from "react-router-dom";

const Info = () => {
	const { id } = useParams();

	return (
		<div>
			<h2> Mais informações sobre o produto: {id}</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima non
				tenetur, cupiditate architecto obcaecati cum ab asperiores quia modi
				eligendi omnis consequatur vel alias illo explicabo magni! Fugiat, culpa
				quam.
			</p>
		</div>
	);
};

export default Info;
