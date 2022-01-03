import React from "react";

export default function DashboardLink({ url, children }) {
  return (
    <div>
      <a
        href={url}
        className="bg-[#7511e9] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#cb10d1]"
      >
        <span className="uppercase font-bold">{children}</span>
      </a>
    </div>
  );
}
