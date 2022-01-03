import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import NavLink from "./NavLink";

const Navbar = () => {
  const url = window.location.href;
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log(url);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {url !== "https://naughty-bhaskara-247748.netlify.app/" ? (
          <NavLink url="/">home</NavLink>
        ) : null}
        <br />
        <NavLink url="/about">about</NavLink>
        <br />
        <NavLink url="/videos">videos</NavLink>
        <br />
        <a
          href="https://github.com/AnEntrypoint/universal-domains/wiki"
          target="_blank"
          rel="noopener"
          className="text-xl px-6 text-white font-semibold hover:animate-pulse hover:from-pink-500 hover:to-yellow-500"
        >
          <span className="uppercase">wiki</span>
        </a>
        <br />
        <NavLink url="/faq">faq</NavLink>
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Dashboard
        </li>
      </ul>
      {/* BURGER MENU START HERE */}
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -left-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
              flex flex-col justify-start item-end rounded-md nav-glassmorphism bg-pink-600 text-white animate-slide-in"
          >
            <li className="text-xl w-full p-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <br />
            {url !== "https://naughty-bhaskara-247748.netlify.app/" ? (
              <NavLink url="/">home</NavLink>
            ) : null}
            <br />
            <NavLink url="/about">about</NavLink>
            <br />
            <NavLink url="/videos">videos</NavLink>
            <br />
            <a
              href="https://github.com/AnEntrypoint/universal-domains/wiki"
              target="_blank"
              rel="noopener"
              className="text-xl px-6 text-white font-semibold hover:animate-pulse hover:from-pink-500 hover:to-yellow-500"
            >
              <span className="uppercase">wiki</span>
            </a>
            <br />
            <NavLink url="/faq">faq</NavLink>
            <br />
            <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
              Dashboard
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
