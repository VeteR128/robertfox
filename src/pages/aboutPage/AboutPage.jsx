import React from "react";
import { About } from "./about/About";
import { Skills } from "./skills/Skills";
import { Exp } from "./exp/Exp";
import { Partners } from "./partners/Partners";
import { Work } from "../app/main/work/Work";

export const AboutPage = () => {
  return (
    <main>
      <About />
      <Skills />
      <Exp />
      <Partners />
    </main>
  );
};
