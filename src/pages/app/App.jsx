import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { ServisePage } from "../servisePage/ServisePage.jsx";
import { PortfolioPage } from "../portfolioPage/PortfolioPage.jsx";
import { ContactPage } from "../contactPage/ContactPage.jsx";
import { Layout } from "../../components/Layout.jsx";
import { HomePage } from "../homePage/HomePage.jsx";
import { AboutPage } from "../AboutPage/AboutPage.jsx";
import { gsap, ScrollTrigger, CSSPlugin, CSSRulePlugin } from "gsap/all";

function App() {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin, CSSPlugin);

  const anim = (arrayone) => {
    arrayone.forEach((item) => {
      let el = item.current;
      if (window.innerWidth > 768) {
        gsap.fromTo(
          el,
          { opacity: 0, x: -150 },
          {
            opacity: 1,
            duration: 1.3,
            x: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 750",
              end: "top",
            },
          }
        );
      }
    });
  };
  return (
    <>
      <div className={styles.page}>
        <Routes>
          <Route path="/" element={<Layout anim={anim} />}>
            <Route index element={<HomePage anim={anim} />}></Route>
            <Route
              path="/about"
              element={<AboutPage anim={anim} color={"#f7f7f7"} />}
            ></Route>
            <Route
              path="/servise"
              element={<ServisePage anim={anim} />}
            ></Route>
            <Route
              path="/portfolio"
              element={<PortfolioPage anim={anim} />}
            ></Route>
            <Route
              path="/contact"
              element={<ContactPage anim={anim} />}
            ></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
