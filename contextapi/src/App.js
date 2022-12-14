import "./styles/global.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import { NavBar } from "./components/NavBar";

//pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
	return (
		<div className="App">
			<h1 className="font-bold text-3xl m-10">Context API</h1>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
