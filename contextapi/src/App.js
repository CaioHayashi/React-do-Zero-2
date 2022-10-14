import "./styles/global.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import { NavBar } from "./components/NavBar";

//pages
import { Pag01 } from "./pages/Pag01";
import { Pag02 } from "./pages/Pag02";
import { Pag03 } from "./pages/Pag03";

function App() {
	return (
		<div className="App">
			<h1>Context API</h1>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/p1" element={<Pag01 />} />
					<Route path="/p2" element={<Pag02 />} />
					<Route path="/p3" element={<Pag03 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
