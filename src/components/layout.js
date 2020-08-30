import React from "react";
import Header from "./header";
import Footer from "./footer";

import layoutStyles from "./layout.module.css";

function Layout({ children }) {
  return (
    <div className={layoutStyles.layoutContainer} id="outer-container">
      <Header />
      <main id="page-wrap" style={{ paddingBottom: `2.5rem` }}>
        {children}
      </main>
      <Footer />
    </div>
  )
};

export default Layout;
