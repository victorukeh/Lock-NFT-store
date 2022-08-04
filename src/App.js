import "./App.css";
import SideBar from "./layouts/SideBar";
import Dashboard from "./layouts/routes/Dashboard";
// import { Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<SideBar className="sidebar" />
				<Routes>
					<Route path="/" element={<Dashboard className="main" />} />
				</Routes>
			</div>
		</Provider>
	);
}

export default App;
