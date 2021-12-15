import { Router, Link } from "@gatsbyjs/reach-router";
export default function Explorer() {
  return (
    <>
      <div>
        <h1 className="text-red-900">Explorer</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
      </div>
    </>
  );
}
