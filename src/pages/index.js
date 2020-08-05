import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { graphql } from "gatsby";


function Home({ data }) {
  return (
    <Layout>
      <>
        <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
        <h1>Home Page</h1>
        <p>This will become the home page.</p>
      </>
    </Layout>
    )
};

export default Home;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
