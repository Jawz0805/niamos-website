import NavBar from "../Components/Navigation/NavBar/NavBar";
import PageRouter from "../PageRouter/PageRouter";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
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
