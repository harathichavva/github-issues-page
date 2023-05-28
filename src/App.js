import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import GitHubComments from "./Components/GitHubComments";

function App() {
 
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={ <GitHubComments/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
