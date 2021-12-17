import React from "react";
import Searchbox from "../../components/containers/Searchbox";
import Navbar from "../../components/nav/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div className="mx-auto">
        <Searchbox />
      </div>
    </section>
  );
}
