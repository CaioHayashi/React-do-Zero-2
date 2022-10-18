// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
	// const { counter } = useContext(CounterContext);

	const { counter } = useCounterContext();

	const { color } = useTitleColorContext();

	return (
		<div>
			<h1 style={{ color: color }} className="page-title">
				About
			</h1>
			<p>Valor do Contador: {counter}</p>
		</div>
	);
};

export default About;
