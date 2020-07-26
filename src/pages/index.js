import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";

function Home() {
  return (
    <Layout>
      <Header />
      <div style={{ color: `purple`, fontSize: `72px` }}>
        Hello Gatsby!
      </div>
    </Layout>
    )
};

export default Home;
