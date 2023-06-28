import React from "react";
import styles from "./main.module.scss";
import { About } from "./about/About.jsx";
import { Places } from "./places/Places";
import { Service } from "./service/Service";
import { Portfolio } from "./portfolio/Portfolio";
import { Work } from "./work/Work";
import { Test } from "./testimotional/Test";
import { Contact } from "./contact/Contact";

export const Main = () => {
  return (
    <main>
      <About />
      <Places />
      <Work />
      <Service />
      <Portfolio />
      <Test />
      <Contact />
    </main>
  );
};
