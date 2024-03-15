import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./base.css";
import "./components/CatFact/Fact.css";
import './components/PersoneAge/PersoneAge.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
