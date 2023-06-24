import React from "react";
import styles from "./main.module.scss";
import { About } from "./about/About.jsx";
import { Places } from "./places/Places";
import { Service } from "./service/Service";
import { Portfolio } from "./portfolio/Portfolio";
import { Test } from "./testimotional/Test";
export const Main = () => {
  return (
    <main>
      <About />
      <Places />
      <Service />
      <Portfolio />
      <Test />
    </main>
  );
};
