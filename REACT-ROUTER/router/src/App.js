import "./App.css";

// 1 - config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import NavBar from "./components/NavBar";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Info from "./Pages/Info";

function App() {
	return (
		<div className="App">
			<h1>React Router</h1>

			{/*// 2- links com react router*/}
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					{/* 4 - Rota dinâmica */}
					<Route path="/products/:id" element={<Product />} />
					{/* 6 - Nested route */}
					<Route path="/products/:id/info" element={<Info />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
