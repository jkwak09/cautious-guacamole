import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";

import journalStyles from "./journal.module.css";

function Journal ({ data }) {
  console.log(data);

  return(

    <Layout>
      <>
        <Helmet title={`Journal | ${data.site.siteMetadata.title}`} />
        <h1>
        Blog posts
        </h1>

        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <div className={journalStyles.postContainer}>
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
            return(
              <>
              { index === 0
              ?
              <div key={node.id} className={journalStyles.postSticky}>
                <Link to={`/journal${node.fields.slug}`}>
                  <img src={node.frontmatter.thumbnail}  alt={node.frontmatter.altText} />
                  <p>{node.frontmatter.tags}</p>
                  <h3>
                    {node.frontmatter.title}{" "}
                    <span>
                      — {node.frontmatter.date}
                    </span>
                  </h3>
                  </Link>
                  <p>{node.excerpt}</p>
              </div>
          :
              // This is the rest of the posts
              <div key={node.id} className={journalStyles.postScroll}>
              <Link to={`/journal${node.fields.slug}`}>
                <img src={node.frontmatter.thumbnail}  alt={node.frontmatter.altText} className={journalStyles.journalPostImage} />
                <div className={journalStyles.journalPostDescription}>
                <p>{node.frontmatter.tags}</p>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
                </div>
                </Link>
            </div>
            }
            </>
            );
          }
        )}
        </div>
        </>
    </Layout>
  )
};

export default Journal;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {fileAbsolutePath: {regex: "\/blogs/"}}
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
