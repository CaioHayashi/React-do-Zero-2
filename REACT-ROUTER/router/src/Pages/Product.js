import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
	// 4 - rota dinâmica
	const { id } = useParams();

	// 5 carregamento dado individual
	const url = "http://localhost:3000/products/" + id;

	const { data: product, loading, error } = useFetch(url);

	console.log(product);

	return (
		<>
			{error && <p>Ocorreu um erro...</p>}
			{loading && <p>Carregando...</p>}
			{product && (
				<div>
					<h2>{product.name}</h2>
					<p>R$ {product.price}</p>
					<Link to={`/products/${product.id}/info`}>Mais informações</Link>
				</div>
			)}
			<Link to="/">Voltar</Link>
		</>
	);
};

export default Product;
