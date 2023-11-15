import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import TestPage from "./components/TestPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test/:subject" element={<TestPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
