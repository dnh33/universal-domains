import React from "react";

export default function Loading() {
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <div
          className="animate-spin m-auto rounded-full h-32 w-32 border-b-2 border-gray-900"
          role="status"
        />
      </div>
    </div>
  );
}
