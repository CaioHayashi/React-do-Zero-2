// import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
// import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";

//5 - contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
	// const { counter } = useContext(CounterContext);
	const { counter } = useCounterContext();

	//5 - contexto mais complexo
	const { color } = useTitleColorContext;

	console.log(color);

	return (
		<div>
			<h1 style={{ color: color }} className="page-title">
				Home
			</h1>
			<p>Valor do Contador: {counter}</p>
			<ChangeCounter />
		</div>
	);
};

export default Home;
