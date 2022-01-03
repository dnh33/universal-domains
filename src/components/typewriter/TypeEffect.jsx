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
            "Decentralized",
            "Unstoppable",
            "Freedom First",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
}
