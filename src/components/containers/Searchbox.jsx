import React from "react";

/* 
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 36px;
line-height: 54px;
color: #FFFFFF;
 */

export default function Searchbox() {
  return (
    <section className="fixed flex flex-col mx-auto left-0 right-0 md:rounded-80 h-entrypoint-searchbox-height sm:w-full md:w-4/5 lg:w-4/5 xl:w-entrypoint-searchbox-width conical-gradient border-solid border-b-4 border-x-4 border-opacity-10 border-black">
      <h1 className=".z-10 mt-entrypoint-title mx-auto text-4xl md:text-5xl lg:text-6xl xl:text-70 text-white">
        <span className="uppercase font-bold">universal domains</span>
      </h1>
      <h2 className=".z-20 mx-auto text-4xl md:text-5xl lg:text-6xl xl:text-70 text-white">
        <span className="uppercase font-bold">the </span>easiest way to get an
        IPFS domain
      </h2>
    </section>
  );
}
