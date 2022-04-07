import React from "react";
import { navigate } from "@gatsbyjs/reach-router";

export default function Validator(exists) {
  return () => {
    if (exists == "true") {
      return (
        <p className="mt-6 text-center text-shadow-2 text-white font-medium">
          This µDNS name is{" "}
          <span className="relative before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-red-700 shadow-3xl inline-block">
            <span className="relative text-white font-bold">already</span>
          </span>{" "}
          registered
        </p>
      );
    } else if (exists == "false") {
      return (
        <>
          <p className="mt-6 text-center text-shadow-2 text-white font-medium">
            This µDNS name is{" "}
            <span className="relative before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-green-700 shadow-3xl inline-block">
              <span className="relative text-white font-bold">not yet</span>
            </span>{" "}
            registered
          </p>
          <center>
            <button
              onClick={ClaimDomain}
              className="mt-6 bg-entry-pink hover:bg-purple-400 text-white font-bold py-4 px-8 border-b-4  border-entry-purple hover:border-blue-500 rounded"
            >
              <span className="flex flex-nowrap">
                <div className="w-6 h-6">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
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
}
