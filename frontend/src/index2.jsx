import React from "react";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import App2 from "./App2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App2 />
      </Router>
    </AuthProvider>
  </React.StrictMode>
);