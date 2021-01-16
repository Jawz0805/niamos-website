import NavBar from "../Navigation/NavBar/NavBar";
import PageRouter from "../Navigation/PageRouter/PageRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../../Containers/Footer";
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
