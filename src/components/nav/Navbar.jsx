import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import NavLink from "./NavLink";
import DashboardLink from "./DashboardLink";

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
        <NavLink url="/">about</NavLink>
        <br />
        <NavLink url="/">videos</NavLink>
        <br />
        <NavLink url="/">
          <span className="uppercase">wiki</span>
        </NavLink>
        <br />
        <NavLink url="/faq">faq</NavLink>
        <DashboardLink url="/">dashboard</DashboardLink>
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
              flex flex-col justify-start item-end rounded-md nav-glassmorphism bg-purple-400 text-white animate-slide-in"
          >
            <li className="text-xl w-full p-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <br />
            {url !== "https://naughty-bhaskara-247748.netlify.app/" ? (
              <NavLink url="/">home</NavLink>
            ) : null}
            <br />
            <NavLink url="/">about</NavLink>
            <br />
            <NavLink url="/">videos</NavLink>
            <br />
            <a
              href="/"
              className="text-xl px-6 text-white font-semibold hover:animate-pulse hover:from-pink-500 hover:to-yellow-500"
            >
              <span className="uppercase">wiki</span>
            </a>
            <br />
            <NavLink url="/faq">faq</NavLink>
            <br />
            <DashboardLink url="https://dashboard.entrypoint.ga/">
              dashboard
            </DashboardLink>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
