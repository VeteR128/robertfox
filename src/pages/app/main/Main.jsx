import React from "react";
import styles from "./main.module.scss";
import { About } from "./about/About.jsx";
import { Places } from "./places/Places";
import { Service } from "./service/Service";
export const Main = () => {
  return (
    <main>
      <About />
      <Places />
      <Service />
    </main>
  );
};
