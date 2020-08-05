import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem`,  position: `relative`,
    minHeight: `100vh` }}>
      <Header />
      <div style={{ paddingBottom: `2.5rem` }}>
        {children}
      </div>
      <Footer />
    </div>
  )
};

export default Layout;
