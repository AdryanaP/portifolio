import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Infos from "./components/Infos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div className="app-container text-white">
      <Nav />
      <Routes>
        <Route path="/" exact={true} element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/infos" element={<Infos />} />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
