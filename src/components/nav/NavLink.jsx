import React from "react";
import { Link } from "@gatsbyjs/reach-router";

export default function NavLink({ url, children }) {
  return (
    <div>
      <Link
        to={url}
        className="text-xl py-4 px-6 text-white font-semibold hover:animate-pulse hover:from-pink-500 hover:to-yellow-500"
      >
        <span className="uppercase">{children}</span>
      </Link>
    </div>
  );
}
