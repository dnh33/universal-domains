import { Router } from "@gatsbyjs/reach-router";
import "./App.css";
import About from "./views/about/About";
import Home from "./views/home/Home";
import Faq from "./views/faq/Faq";
import FourOFour from "./views/404/404";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Faq path="/faq" />
        <FourOFour path="/404" />
      </Router>
    </div>
  );
}

export default App;
