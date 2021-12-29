import { navigate } from "@gatsbyjs/reach-router";
import React, { useState, Suspense } from "react";
import Typewriter from "../typewriter/TypeEffect";

export default function Searchbox() {
  const [exists, setExists] = useState([]);
  const [formValue, setFormValue] = useState("");

  function ClaimDomain() {
    const timer = setTimeout(
      () => navigate(`https://dashboard.entrypoint.ga/${formValue}`),
      1000
    );
  }

  async function submitHandler(e) {
    e.preventDefault();
    const data = await (
      await fetch("https://exists.entrypoint.ga/" + `${formValue}`)
    ).text();
    setExists(data);
  }

  return (
    <section className="fixed flex flex-col mx-auto left-0 right-0 md:rounded-80 h-searchbox-height sm:w-full md:w-4/5 lg:w-4/5 xl:w-searchbox-width conical-gradient border-solid border-b-4 border-x-4 border-opacity-10 border-black">
      <h1 className=".z-10 mt-entrypoint-title mx-auto text-4xl md:text-5xl lg:text-6xl xl:text-70 text-white box-shadow-custom">
        <span className="uppercase font-bold">◙universal  domains◙</span> 
      </h1>
      <h2 className=".z-20 mt-67 mx-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl text-shadow text-white font-light">
        <span className="capitalize">the </span>easiest way to get a{" "}
        <span className="relative before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-pink-600 shadow-3xl inline-block">
          <span className="relative text-white">
            <Typewriter className="laborate" />{" "}
          </span>
        </span>{" "}
        domain
      </h2>
      <div>
        <div className="container flex justify-center items-center mt-67 px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-80 bg-transparent">
            {" "}
            <form onSubmit={submitHandler}>
              <input
                type="text"
                className="z-0 h-14 sm:h-18 md:h-20 xl:h-24 md:w-searchBar-width-medium xl:w-searchBar-width text-white placeholder-white bg-gray-500 bg-opacity-40 searchBar-dropShadow rounded-80 xl:text-2xl pr-8 pl-12 font-semibold focus:shadow"
                placeholder="Search for your next domain..."
                onChange={(e) => {
                  setFormValue(e.target.value);
                }}
              />
              <div className="flex justify-end mt-1">
                <p className="text-lg font-bold text-white leading-7 text-shadow-3">
                  powered by Hypercore
                </p>
              </div>
            </form>
            {/* uDNS Domain Validator text */}
            {exists === "true" ? (
              <p className="mt-6 text-center text-shadow-2 text-white font-medium">
                This µDNS name is{" "}
                <span className="relative before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-red-700 shadow-3xl inline-block">
                  <span className="relative text-white font-bold">already</span>
                </span>{" "}
                registered
              </p>
            ) : null}
            {exists === "false" ? (
              <>
                <p className="mt-6 text-center text-shadow-2 text-white font-medium">
                  This µDNS name is{" "}
                  <span className="relative before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-green-700 shadow-3xl inline-block">
                    <span className="relative text-white font-bold">
                      not yet
                    </span>
                  </span>{" "}
                  registered
                </p>
                <center>
                  <button
                    onClick={ClaimDomain}
                    className="mt-12 bg-entry-pink hover:bg-purple-400 text-white font-bold py-4 px-8 border-b-4  border-entry-purple hover:border-blue-500 rounded"
                  >
                    <span className="capitalize">claim domain</span>
                  </button>
                </center>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <footer className="fixed md:bottom-8 xl:bottom-8 2xl:bottom-8 left-0 right-0">
        <p className="text-md text-shadow-2 text-white font-medium text-center">
          An Internet Breaking hyper dApp made w/💓.
        </p>
        <p className="md:mt-5 xl:mt-5 2xl:mt-6 text-md text-shadow-2 text-white font-medium text-center">
          ©️ 2022 ＡＮ🎙️ＥＮＴＲＹＰＯＩＮＴ
        </p>
      </footer>
    </section>
  );
}
