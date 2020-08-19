import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";

function Projects ({ data }) {
  // console.log(data);
  return(
    <Layout>
      <>
        <Helmet title={`Projects | ${data.site.siteMetadata.title}`}/>
        <h1>
        Projects
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <div className="project-posts-container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className="project-post">
              <Link to={`/projects${node.fields.slug}`}>
                <img src={node.frontmatter.thumbnail}  alt={node.frontmatter.altText} />
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
                {/*
                Note to self: Check structure of tags
                */}
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
