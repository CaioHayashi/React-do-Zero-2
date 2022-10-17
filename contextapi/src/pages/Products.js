// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";

const Products = () => {
	// const { counter } = useContext(CounterContext);
	const { counter } = useCounterContext();

	return (
		<div>
			<h1 className="page-title">Products</h1>
			<p>Valor do Contador: {counter}</p>
		</div>
	);
};

export default Products;
