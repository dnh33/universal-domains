import React, { Suspense } from "react";
import { Router } from "@gatsbyjs/reach-router";
import Loading from "./components/loading/Loading";
const Home = React.lazy(() => import("./views/home/Home"));
const About = React.lazy(() => import("./views/about/About"));
const Faq = React.lazy(() => import("./views/faq/Faq"));
const Videos = React.lazy(() => import("./views/videos/Videos"));

import "./App.css";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Router>
          <Home path="/" />
          <About path="about" />
          <Faq path="faq" />
          <Videos path="videos" />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
