import React from "react";
import { Link } from "@gatsbyjs/reach-router";

{
  /* <Link to="/">Home</Link> | <Link to="/about">About</Link> */
}

export default function Navbar() {
  return (
    /* Navbar goes here */
    <nav class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
              >
                <span className="capitalize">home</span>
              </Link>
              <Link
                to="/about"
                className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
              >
                <span className="capitalize">about</span>
              </Link>
              <Link
                to="/faq"
                className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
              >
                <span className="capitalize">faq</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
