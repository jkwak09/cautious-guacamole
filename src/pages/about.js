import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import { graphql } from "gatsby";

function About({ data }) {
  return (
    <Layout>
      <div>
        <Header />
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>This will become the about page.</p>
      </div>
    </Layout>
  )
};

export default About;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
