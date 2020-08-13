import React from "react";
import Header from "./header";
import Footer from "./footer";


function Layout({ children }) {
  return (
    <div className="layout-container" id="outer-container">
      <Header />
      <main id="page-wrap" style={{ paddingBottom: `2.5rem` }}>
        {children}
      </main>
      <Footer />
    </div>
  )
};

export default Layout;
