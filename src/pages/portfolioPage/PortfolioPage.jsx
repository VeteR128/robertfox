import React from "react";
import { Portfolio } from "../app/main/portfolio/Portfolio";
import { Partners } from "../aboutPage/partners/Partners";
import { Faq } from "../servisePage/faq/Faq";
import { Work } from "../app/main/work/Work";
import styles from "./pf.module.scss";

export const PortfolioPage = () => {
  return (
    <main>
      <Portfolio />
      <Partners />
      <div className={styles.container}>
        <Work />
      </div>
      <Faq />
    </main>
  );
};
