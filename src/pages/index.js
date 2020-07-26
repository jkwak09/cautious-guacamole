import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";

function Home() {
  return (
    <Layout>
      <Header />
      <div>
        <h1>Home Page</h1>
        <p>This will become the home page.</p>
      </div>
    </Layout>
    )
};

export default Home;
