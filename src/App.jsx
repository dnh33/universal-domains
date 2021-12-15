import { Router } from "@gatsbyjs/reach-router";
import "./App.css";
import About from "./views/about/About";
import Home from "./views/home/Home";
import Explorer from "./views/explorer/Explorer";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Explorer path="/explorer" />
      </Router>
    </div>
  );
}

export default App;
