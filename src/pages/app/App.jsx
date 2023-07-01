import React from "react";
import { Header } from "./header/Header.jsx";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.scss";
import { ServisePage } from "../servisePage/ServisePage.jsx";
import { PortfolioPage } from "./portfolioPage/PortfolioPage.jsx";
import { ContactPage } from "../contactPage/ContactPage.jsx";
import { Layout } from "../../components/Layout.jsx";
import { HomePage } from "../homePage/HomePage.jsx";
import { AboutPage } from "../AboutPage/AboutPage.jsx";

function App() {
  return (
    <>
      <div className={styles.page}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/servise" element={<ServisePage />}></Route>
            <Route path="/portfolio" element={<PortfolioPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
