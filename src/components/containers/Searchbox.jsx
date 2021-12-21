import React, { useState } from "react";
import Typewriter from "../typewriter/TypeEffect";

export default function Searchbox() {
  const [exists, setExists] = useState([]);
  const [formValue, setFormValue] = useState("");
  async function submitHandler(e) {
    e.preventDefault();
    const data = await (
      await fetch("https://exists.entrypoint.ga/" + `${formValue}`)
    ).text();
    console.log(formValue);
    console.log(data);
    setExists(data);
  }

  const getText = () => {
    if (exists == "true") {
      return (
        <p className="mt-6 text-center text-shadow-2 text-white font-medium">
          This µDNS name is{" "}
          <span className="relative before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-red-600 shadow-3xl inline-block">
            <span className="relative text-white underline">already </span>
          </span>{" "}
          registered
        </p>
      );
    } else if (exists == "false") {
      return (
        <>
          <p className="mt-6 text-center text-shadow-2 text-white font-medium">
            This µDNS name is{" "}
            <span className="relative before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-green-600 shadow-3xl inline-block">
              <span className="relative text-white underline">not yet </span>
            </span>{" "}
            registered
          </p>
          <center>
            <button className="mt-6 bg-entry-pink hover:bg-purple-400 text-white font-bold py-4 px-8 border-b-2 border-b-4 border-entry-purple hover:border-blue-500 rounded">
              <span className="flex flex-nowrap">
                <div className="w-6 h-6">
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
                Claim Domain
              </span>
            </button>
          </center>
        </>
      );
    }
  };

  return (
    <section className="fixed flex flex-col mx-auto left-0 right-0 md:rounded-80 h-searchbox-height sm:w-full md:w-4/5 lg:w-4/5 xl:w-searchbox-width conical-gradient border-solid border-b-4 border-x-4 border-opacity-10 border-black">
      <h1 className=".z-10 mt-entrypoint-title mx-auto text-4xl md:text-5xl lg:text-6xl xl:text-70 text-white box-shadow-custom">
        <span className="uppercase font-bold">universal domains</span>
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
      <div className="">
        <div className="container flex justify-center items-center mt-67 px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-80 bg-transparent">
            {" "}
            <form onSubmit={submitHandler}>
              <input
                type="text"
                className="z-0 h-24 md:w-searchBar-width-medium xl:w-searchBar-width searchBar-dropShadow rounded-80 xl:text-2xl pr-8 pl-12 font-semibold focus:shadow"
                placeholder="Search for your next domain..."
                onChange={(e) => {
                  setFormValue(e.target.value);
                }}
              />
              {getText()}
            </form>
            {/* {exists ? (
              <p>This µDNS name is already registered</p>
            ) : (
              <p>This µDNS name is not yet registered</p>
            )} */}
          </div>
        </div>
      </div>
      <footer>
        <p className="md:mt-52 lg:mt-44 xl:mt-1440 2xl:mt-1920 text-xl text-shadow-2 text-white font-medium text-center">
          made w/💓 in ＡＮ🎙️ＥＮＴＲＹＰＯＩＮＴ
        </p>
        <p className="md:mt-5 xl:mt-5 2xl:mt-10 text-lg text-shadow-2 text-white font-medium text-center">
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
