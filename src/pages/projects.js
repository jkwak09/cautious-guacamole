import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";

import projectPostStyles from "./projects.module.css";

function Projects ({ data }) {
  return(
    <Layout>
      <>
        <Helmet title={`Projects | ${data.site.siteMetadata.title}`}/>
        <h1>
        Projects
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <div className={projectPostStyles.projectPostsContainer}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className={projectPostStyles.projectPost}>
              <Link to={`/projects${node.fields.slug}`}>
                <img src={node.frontmatter.thumbnail}  alt={node.frontmatter.altText} className={projectPostStyles.projectPostImage} />
                <h3 className={projectPostStyles.projectPostTitle}>
                  {node.frontmatter.title}
                </h3>
                <div className={projectPostStyles.projectPostDate}>
                  {node.frontmatter.date}
                </div>
                <p className={projectPostStyles.projectPostExcerpt}>{node.excerpt}</p>
              </Link>
              <p>{node.frontmatter.tags}</p>
            </div>

        ))}
        </div>
      </>
    </Layout>
  )
};

export default Projects;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {fileAbsolutePath: {regex: "\/projects/"}}
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            thumbnail
            altText
            posttype
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
