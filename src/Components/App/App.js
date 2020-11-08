import NavBar from "../Navigation/NavBar/NavBar";
import PageRouter from "../Navigation/PageRouter/PageRouter";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <PageRouter />
      </Router>
    </div>
  );
}

export default App;
