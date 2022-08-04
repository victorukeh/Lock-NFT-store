import React from "react";
// import { createStore } from "redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter, Routes } from "react-router-dom";

// Reduc State Management
// let store = createStore(countReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
    <MoralisProvider serverUrl="https://xxxxx/server" appId="YOUR_APP_ID">
			<BrowserRouter>
				{/* <Routes> */}
				<App />
				{/* </Routes> */}
			</BrowserRouter>
      </MoralisProvider>
		{/* </Provider> */}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
