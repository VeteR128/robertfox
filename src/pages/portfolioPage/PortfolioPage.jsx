import React from "react";
import { Portfolio } from "../app/main/portfolio/Portfolio";
import { Partners } from "../aboutPage/partners/Partners";
import { Faq } from "../servisePage/faq/Faq";
import { Work } from "../app/main/work/Work";
import styles from "./pf.module.scss";

export const PortfolioPage = (props) => {
  return (
    <main>
      <Portfolio anim={props.anim} number={"01"} />
      <Partners anim={props.anim} number={"02"} />
      <div className={styles.container}>
        <Work anim={props.anim} />
      </div>
      <Faq anim={props.anim} number={"03"} />
    </main>
  );
};
