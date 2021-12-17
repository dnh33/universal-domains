import { Router, Link } from "@gatsbyjs/reach-router";
import Navbar from "../../components/nav/Navbar";
export default function About() {
  return (
    <>
      <Navbar />
      <div className="text-center">this is the About page</div>
    </>
  );
}
