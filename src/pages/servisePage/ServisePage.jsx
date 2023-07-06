import React from "react";
import { Service } from "../app/main/service/Service.jsx";
import { Partners } from "../aboutPage/partners/Partners.jsx";
import { Test } from "../app/main/testimotional/Test.jsx";
import { Work } from "../app/main/work/Work.jsx";
import { Faq } from "./faq/Faq.jsx";

export const ServisePage = (props) => {
  return (
    <main>
      <Service anim={props.anim} number={"01"} />
      <Partners anim={props.anim} number={"02"} />
      <Work anim={props.anim} color={"rgb(233, 213, 213)"} />
      <Test anim={props.anim} number={"03"} />
      <Faq anim={props.anim} number={"04"} />
    </main>
  );
};
