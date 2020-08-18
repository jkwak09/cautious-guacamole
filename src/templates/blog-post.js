import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <Helmet title={`${post.frontmatter.title} | Journal | ${data.site.siteMetadata.title}`} />
        <h1>{post.frontmatter.title}</h1>
        {/* This is the post */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* This will display related posts */}
        <div className="related-blog-posts">
          Related blog posts will appear here.
        </div>
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
