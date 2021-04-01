import React from "react";
import NavBar from "../Containers/Navigation/NavBar/NavBar";
import PageRouter from "../PageRouter/PageRouter";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "../Containers/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <PageRouter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
