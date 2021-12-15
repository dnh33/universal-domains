import { Router, Link } from "@gatsbyjs/reach-router";
export default function About() {
  return (
    <>
      <div>
        <h1 className="text-red-900">About</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/explorer">Explorer</Link>
        </nav>
      </div>
    </>
  );
}
