import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function ProjectPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <Helmet title={`${post.frontmatter.title} | Projects | ${data.site.siteMetadata.title}`} />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    },
    site {
      siteMetadata {
        title
      }
    }
  }
`;
