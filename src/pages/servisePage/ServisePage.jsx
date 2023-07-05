import React from "react";
import { Service } from "../app/main/service/Service.jsx";
import { Partners } from "../aboutPage/partners/Partners.jsx";
import { Test } from "../app/main/testimotional/Test.jsx";
import { Work } from "../app/main/work/Work.jsx";
import { Faq } from "./faq/Faq.jsx";
import styles from "./serv.module.scss";
export const ServisePage = () => {
  return (
    <main>
      <Service />
      <Partners />
      <Work color={"rgb(233, 213, 213)"} />
      <Test />
      <Faq />
    </main>
  );
};
