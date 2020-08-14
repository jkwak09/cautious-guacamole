import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";

function About({ data }) {
  return (
    <Layout>
      <>
        <Helmet title={`About | ${data.site.siteMetadata.title}`} />
        <h1>About {data.site.siteMetadata.title}</h1>
        <Img fixed={data.file.childImageSharp.fixed} alt="me" className="profile-picture" />
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
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
