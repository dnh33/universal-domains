import React from "react";
import Typewriter from "../typewriter/TypeEffect";

export default function Searchbox() {
  /* fetch("https://exists.entrypoint.ga/" + "jeevesistheway").then((f) =>
    f.json().then((exists) => {
      document.querySelector("body").innerHTML = exists
        ? "This µDNS name is already registered"
        : "This µDNS name is not yet registered";
    })
  ); */
  return (
    <section className="fixed flex flex-col mx-auto left-0 right-0 md:rounded-80 h-searchbox-height sm:w-full md:w-4/5 lg:w-4/5 xl:w-searchbox-width conical-gradient border-solid border-b-4 border-x-4 border-opacity-10 border-black">
      <h1 className=".z-10 mt-entrypoint-title mx-auto text-4xl md:text-5xl lg:text-6xl xl:text-70 text-white box-shadow-custom">
        <span className="uppercase font-bold">universal domains</span>
      </h1>
      <h2 className=".z-20 mt-67 mx-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl text-shadow text-white font-light">
        <span className="capitalize">the </span>easiest way to get a{" "}
        <span className="relative before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-pink-600 shadow-3xl inline-block">
          <span className="relative text-white">
            <Typewriter className="laborate" />{" "}
          </span>
        </span>{" "}
        domain
      </h2>
      <div className="">
        <div className="container flex justify-center items-center mt-67 px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-80 bg-transparent">
            {" "}
            <input
              type="text"
              className="z-0 h-24 md:w-searchBar-width-medium xl:w-searchBar-width searchBar-dropShadow rounded-80 xl:text-2xl pr-8 pl-12 font-semibold focus:shadow"
              placeholder="Search for your next domain..."
            />
          </div>
        </div>
      </div>
      <footer>
        <p className="md:mt-52 lg:mt-44 xl:mt-1440 2xl:mt-1920 text-xl text-shadow-2 text-white font-medium text-center">
          made w/💓 in ＡＮ🎙️ＥＮＴＲＹＰＯＩＮＴ
        </p>
        <p className="md:mt-5 xl:mt-5 text-lg text-shadow-2 text-white font-medium text-center">
          anEntrypoint HyperWeb Solution
        </p>
      </footer>
    </section>
  );
}

/* made w/💓 in ＡＮ🎙️ＥＮＴＲＹＰＯＩＮＴ */

/* font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 33px;
text-align: center;
 */
