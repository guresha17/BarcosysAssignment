import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Front from "./components/front";
import Smt from "./components/smt";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/smt" element={<Smt />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
