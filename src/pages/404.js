import React from "react";

// Components
import Header from "../components/header";
import Layout from "../components/layout";

function NotFound() {
  return (
    <Layout>
      <div>
        <Header />
        <h1>Page Not Found</h1>
        <p>Oops, we couldn't find this page!</p>
      </div>
    </Layout>
  )
};

export default NotFound;
