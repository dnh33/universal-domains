import { Router } from "@gatsbyjs/reach-router";
import "./App.css";
import About from "./views/about/About";
import Home from "./views/home/Home";
import Faq from "./views/faq/Faq";
import NotFound from "./views/404/NotFound";
import Videos from "./views/videos/Videos";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <About path="about" />
        <Faq path="faq" />
        <Videos path="videos" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
