import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

import React from "react";

const ChangeCounter = () => {
	const { counter, setCounter } = useContext(CounterContext);

	return (
		<div>
			<button
				className="bg-black text-white px-3 py-1 m-3 hover:bg-zinc-700"
				onClick={() => setCounter(counter + 1)}
			>
				Add value to counter
			</button>
		</div>
	);
};

export default ChangeCounter;
