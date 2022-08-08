import React, { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./layouts/SideBar";
import Dashboard from "./layouts/routes/Dashboard";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { useMoralis, useMoralisQuery } from "react-moralis";

const {
	authenticate,
	isAuthenticated,
	enableWeb3,
	Moralis,
	user,
	isWeb3enabled,
} = useMoralis;

function App() {
	const [username, setUsername] = useState("");
	const [nickname, setNickname] = useState("");

	useEffect(() => {
		(async () => {
			if (!isAuthenticated) {
				const currentUsername = await user?.get("nickname");
				setUsername(currentUsername);
			}
		})();
	}, [isAuthenticated, user, username]);
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
