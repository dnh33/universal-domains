import { Router } from "@gatsbyjs/reach-router";
import "./App.css";
import About from "./views/about/About";
import Home from "./views/home/Home";
import Faq from "./views/faq/Faq";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Faq path="/faq" />
      </Router>
    </div>
  );
}

export default App;
