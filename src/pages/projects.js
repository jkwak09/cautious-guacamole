import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";

import Pagination from "../components/pagination";

import projectPostStyles from "./projects.module.css";

function Projects ({ data, pageContext }) {

  if (!data) return <p>No Posts found!</p>;
  return(
    <Layout>
      <>
        <Helmet title={`Projects | ${data.site.siteMetadata.title}`}/>
        <h1 className="page-title">
        Projects
        </h1>
        <h4 className={projectPostStyles.totalPosts}>{data.allMarkdownRemark.totalCount} Posts</h4>
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
              <ul className={projectPostStyles.projectTags}>
                {node.frontmatter.tags.map((tag, i) => {
                    return(
                      <Link to={`/tags/${tag}`}>
                        <li className={projectPostStyles.projectTag} key={i}>{tag}</li>
                      </Link>
                    )
                  })
                }
              </ul>
            </div>

        ))}
        </div>
        <Pagination
          currentPage={pageContext.currentPage}
          totalCount={data.allMarkdownRemark.totalCount}
          pathPrefix="/projects/"
        />
      </>
    </Layout>
  )
};

export default Projects;

export const query = graphql`
  query projectListQuery($skip: Int! = 0){
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {fileAbsolutePath: {regex: "\/projects/"}}
      limit: 12,
      skip: $skip
    ){
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
          excerpt(pruneLength: 150)
        }
      }
    }
  }
`;
