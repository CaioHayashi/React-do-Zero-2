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
	const { color, dispatch } = useTitleColorContext();

	// 6 - alterando contexto complexo
	const setTitleColor = (color) => {
		dispatch({ type: color });
	};

	console.log(color);

	return (
		<div>
			<h1 style={{ color: color }} className="page-title">
				Home
			</h1>
			<p>Valor do Contador: {counter}</p>
			<ChangeCounter />
			{/* 6 - alterando contexto complexo*/}
			<div>
				<button className="bg-red-600 p-2" onClick={() => setTitleColor("RED")}>
					Vermelho
				</button>
				<button
					className="bg-blue-600 p-2"
					onClick={() => setTitleColor("BLUE")}
				>
					Azul
				</button>
			</div>
		</div>
	);
};

export default Home;
