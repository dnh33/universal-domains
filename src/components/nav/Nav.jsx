import React from "react";

export default function Nav({ children }) {
  return (
    <nav className="flex items-center justify-around flex-wrap p-6 mx-auto sm:w-full md:w-11/12 lg:w-4/5 xl:w-entrypoint-nav h-28 mb-4 md:mb-8 lg:mb-59 drop-shadow-lg border-solid border-b-4 border-x-4 border-opacity-10 border-black md:rounded-b-entrypoint bg-gradient-to-r from-entry-pink to-entry-purple">
      {children}
    </nav>
  );
}
