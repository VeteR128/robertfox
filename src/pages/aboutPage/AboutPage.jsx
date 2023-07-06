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
      <About anim={props.anim} />
      <Skills anim={props.anim} />
      <Exp anim={props.anim} />
      <Partners anim={props.anim} number={"04"} />
      <div
        className={styles.container}
        style={{ background: `${props.color}` }}
      >
        <Work anim={props.anim} color={"#f7f7f7"} />
      </div>
    </main>
  );
};
