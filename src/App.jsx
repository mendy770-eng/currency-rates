import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import HomePage from "./components/HomePage";
import CurrencyPage from "./components/CurrencyPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:currency" element={<CurrencyPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
