import React from "react";
import { Router, Link } from "@gatsbyjs/reach-router";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-red-900">Home</h1>
        <nav>
          <Link to="about">About</Link> | <Link to="explorer">Explorer</Link>
        </nav>
      </div>
    </>
  );
}
