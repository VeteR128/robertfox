import React from "react";

import { About } from "./about/About.jsx";
import { Places } from "./places/Places";
import { Service } from "./service/Service";
import { Portfolio } from "./portfolio/Portfolio";
import { Work } from "./work/Work";
import { Test } from "./testimotional/Test";
import { Contact } from "./contact/Contact";

export const Main = (props) => {
  return (
    <main>
      <About anim={props.anim} />
      <Places anim={props.anim} />
      <Work anim={props.anim} color={"rgb(233, 213, 213)"} />
      <Service anim={props.anim} number={"02"} />
      <Portfolio anim={props.anim} number={"03"} />
      <Test anim={props.anim} number={"04"} />
      <Contact anim={props.anim} number={"05"} color={"#111214"} />
    </main>
  );
};
