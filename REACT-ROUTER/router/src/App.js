import "./App.css";

// 1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//components
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Info from "./Pages/Info";
import NoFound from "./Pages/NoFound";
import Search from "./Pages/Search";

function App() {
	return (
		<div className="App">
			<h1>React Router</h1>

			{/*// 2- links com react router*/}
			<BrowserRouter>
				<NavBar />
				{/*  9 - Search Form */}
				<SearchForm />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					{/* 4 - Rota dinâmica */}
					<Route path="/products/:id" element={<Product />} />
					{/* 6 - Nested route */}
					<Route path="/products/:id/info" element={<Info />} />
					{/* Search */}
					<Route path="/search" element={<Search />} />
					{/* 10 - Redirect */}
					<Route path="/company" element={<Navigate to="/about" />} />
					{/*  7 - no match route */}
					<Route path="*" element={<NoFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
