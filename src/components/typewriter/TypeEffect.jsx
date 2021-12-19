import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeEffect() {
  return (
    <>
      <Typewriter
        className="laborate"
        options={{
          strings: [
            "HyperWeb",
            "Unstoppable",
            "Decentralized",
            "HyperWeb",
            "Freedom First",
            "HyperWeb",
            "Your Own",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
}
