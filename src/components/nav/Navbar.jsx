import React from "react";
import { Link } from "@gatsbyjs/reach-router";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-around flex-wrap p-6 mx-auto sm:w-full md:w-11/12 lg:w-4/5 xl:w-3/5 h-28 drop-shadow-lg border-solid border-b-4 border-x-4 border-opacity-10 border-black md:rounded-b-entrypoint bg-gradient-to-r from-entry-pink to-entry-purple ">
      <div className="md:flex content-center items-center">
        <Link
          to="/"
          className="text-xl py-4 px-6 text-white font-semibold hover:animate-pulse"
        >
          <span className="uppercase shadow">home</span>
        </Link>
        <Link
          to="/about"
          className="text-xl py-4 px-6 text-white font-semibold hover:animate-pulse"
        >
          <span className="uppercase shadow">about</span>
        </Link>
        <Link
          to="/faq"
          className="text-xl py-4 px-6 text-white font-semibold hover:animate-pulse"
        >
          <span className="uppercase shadow">faq</span>
        </Link>
      </div>
    </nav>
  );
}
