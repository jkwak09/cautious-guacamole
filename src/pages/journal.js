import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";

function Journal () {
  return(
    <Layout>
      <Header />
      <div>
        <h1>Journal Page</h1>
        <p>This will display blog posts.</p>
      </div>
    </Layout>
  )
};

export default Journal;
