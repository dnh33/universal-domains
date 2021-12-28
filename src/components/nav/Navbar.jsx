import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import NavLink from "./NavLink";

export default function Navbar() {
  const url = window.location.href;
  console.log(url);
  return (
    <Nav>
      <Logo />

      <div className="md:flex content-center items-center">
        {url !== "https://naughty-bhaskara-247748.netlify.app/" ? (
          <NavLink url="/">home</NavLink>
        ) : null}

        <NavLink url="/about">about</NavLink>

        <NavLink url="/videos">videos</NavLink>

        <a
          href="https://github.com/AnEntrypoint/universal-domains/wiki"
          target="_blank"
          className="text-xl py-4 px-6 text-white font-semibold hover:animate-pulse hover:from-pink-500 hover:to-yellow-500"
        >
          <span className="uppercase shadow">wiki</span>
        </a>

        <NavLink url="/faq">faq</NavLink>
      </div>
    </Nav>
  );
}
