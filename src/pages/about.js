import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

function About({ data }) {
  return (
    <Layout>
      <>
        <Helmet title={`About | ${data.site.siteMetadata.title}`} />
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>This will become the about page.</p>
      </>
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
