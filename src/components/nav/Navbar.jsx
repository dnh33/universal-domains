import React from "react";
import { Link } from "@gatsbyjs/reach-router";
import Logo from "./Logo";

export default function Navbar() {
  const url = window.location.href;
  console.log(url);
  return (
    <nav className="flex items-center justify-around flex-wrap p-6 mx-auto sm:w-full md:w-11/12 lg:w-4/5 xl:w-entrypoint-nav h-28 mb-4 md:mb-8 lg:mb-59 drop-shadow-lg border-solid border-b-4 border-x-4 border-opacity-10 border-black md:rounded-b-entrypoint bg-gradient-to-r from-entry-pink to-entry-purple">
      <Logo />
      <div className="md:flex content-center items-center">
        {url !== "https://naughty-bhaskara-247748.netlify.app/" ? (
          <Link
            to="/"
            className="text-xl py-4 px-6 text-white font-semibold hover:animate-pulse hover:from-pink-500 hover:to-yellow-500"
          >
            <span className="uppercase shadow">home</span>
          </Link>
        ) : null}
        <Link
          to="/about"
          className="text-xl py-4 px-6 text-white font-semibold hover:animate-pulse hover:from-pink-500 hover:to-yellow-500"
        >
          <span className="uppercase shadow">about</span>
        </Link>
        <Link
          to="/videos"
          className="text-xl py-4 px-6 text-white font-semibold hover:animate-pulse hover:from-pink-500 hover:to-yellow-500"
        >
          <span className="uppercase shadow">videos</span>
        </Link>
        <a
          href="https://github.com/AnEntrypoint/universal-domains/wiki"
          target="_blank"
          className="text-xl py-4 px-6 text-white font-semibold hover:animate-pulse hover:from-pink-500 hover:to-yellow-500"
        >
          <span className="uppercase shadow">wiki</span>
        </a>
        <Link
          to="/faq"
          className="text-xl py-4 px-6 text-white font-semibold hover:animate-pulse hover:from-pink-500 hover:to-yellow-500"
        >
          <span className="uppercase shadow">faq</span>
        </Link>
      </div>
    </nav>
  );
}
