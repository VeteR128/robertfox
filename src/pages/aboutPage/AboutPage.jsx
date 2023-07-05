import React from "react";
import { About } from "./about/About";
import { Skills } from "./skills/Skills";
import { Exp } from "./exp/Exp";
import { Partners } from "./partners/Partners";
import { Work } from "../app/main/work/Work";
import styles from "./ab.module.scss";

export const AboutPage = (props) => {
  return (
    <main>
      <About />
      <Skills />
      <Exp />
      <Partners />
      <div
        className={styles.container}
        style={{ background: `${props.color}` }}
      >
        <Work color={"#f7f7f7"} />
      </div>
    </main>
  );
};
