import { navigate } from "@gatsbyjs/reach-router";
import React, { useState } from "react";
import Typewriter from "../typewriter/TypeEffect";
export default function Searchbox() {
  const [exists, setExists] = useState([]);
  const [formValue, setFormValue] = useState("");

  function ClaimDomain() {
    setTimeout(
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
    <section className="fixed flex flex-col mx-auto left-0 right-0 md:rounded-80 sm:w-full md:w-4/5 lg:w-4/5">
      <h1 className=".z-10 mt-entrypoint-title mx-auto text-white box-shadow-custom">
        <span className="text-5xl flex md: justify-center">µniversal</span>
        <span className="text-5xl flex md: justify-center">naming service</span>
      </h1>
      <h2 className=".z-20 mt-67 mx-auto md:block md:text-2xl lg:text-3xl xl:text-4xl text-shadow text-white font-light">
        <span className="capitalize">the </span>easiest way to get a{" "}
        <span className="relative before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-pink-600 shadow-3xl inline-block">
          <span className="relative text-white">
            <Typewriter className="laborate" />{" "}
          </span>
        </span>{" "}
        domain
      </h2>
      <div>
        <div className="flex justify-center items-center mt-67 px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-80 bg-transparent">
            {" "}
            <form onSubmit={submitHandler}>
              <input
                type="text"
                className="z-1 h-20 text-white placeholder-pink-200 bg-purple-500 bg-opacity-40 searchBar-dropShadow rounded-80 xl:text-2xl pr-8 pl-12 font-semibold focus:shadow"
                placeholder="Search for your next domain..."
                onChange={(e) => {
                  setFormValue(e.target.value);
                }}
              />
              <div className="flex justify-end pr-10 mt-5">
                <p className="font-bold text-white leading- text-shadow-3">
                  powered by{" "}
                  <a href="https://hypercore-protocol.org/">
                    Hypercore Protocol
                  </a>
                </p>
              </div>
            </form>
            {/* uDNS Domain Validator text */}
            {exists === "true" ? (
              <p className="mt-6 text-center text-shadow-2 text-white font-medium">
                This µDNS is{" "}
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
      <footer className="fixed bottom-8 md:bottom-7 xl:bottom-8 2xl:bottom-8 left-0 right-0">
        <p className="break-normal md:break-all text-shadow-2 text-white font-medium text-center">
          A{" "}
          <a href="https://twitter.com/PointOfEntry/status/1477347792821571587?s=20">
            <code className="bg-pink-600">#netBreaking</code>
          </a>{" "}
          hyper dApp made w/💓
        </p>
        <p className="break-normal md:break-all text-shadow-2 text-white font-medium text-center">
          by ＡＮ🎙️ＥＮＴＲＹＰ❍ＩＮＴ ©️ 2022
        </p>
      </footer>
    </section>
  );
}
