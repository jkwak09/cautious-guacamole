import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";

import Pagination from "../components/pagination";

import journalStyles from "./journal.module.css";

function Journal ({ data, pageContext }) {

  return(
    <Layout>
      <>
        <Helmet title={`Projects | ${data.site.siteMetadata.title}`}/>
        <h1 className="page-title">
        Journal
        </h1>
        <h4 className={journalStyles.totalPosts}>{data.allMarkdownRemark.totalCount} Posts</h4>
        <div className="">
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className={journalStyles.journalPostContainer}>
              <div className={journalStyles.journalImageContainer}>
                <Link to={`/journal${node.fields.slug}`}>
                  <img src={node.frontmatter.thumbnail}  alt={node.frontmatter.altText} className={journalStyles.journalPostImage} />
                </Link>
                <div className={journalStyles.journalPostDate}>
                  {node.frontmatter.date}
                </div>
                <ul className={journalStyles.journalTags}>
                  {node.frontmatter.tags.map((tag, i) => {
                    return(
                      <Link to={`/tags/${tag}`}>
                        <li className={journalStyles.journalTag} key={i}>{tag}</li>
                      </Link>
                    )
                  })
                  }
                </ul>
              </div>
              <div className={journalStyles.journalExcerptContainer}>
                <Link to={`/journal${node.fields.slug}`}>
                  <h3 className="">
                    {node.frontmatter.title}
                  </h3>
                </Link>
                <p className="">{node.excerpt}</p>
              </div>
              <div className={journalStyles.postDivider}></div>
            </div>

        ))}
        </div>
        <Pagination
          currentPage={pageContext.currentPage}
          totalCount={data.allMarkdownRemark.totalCount}
          pathPrefix="/journal/"
        />
      </>
    </Layout>
  )
};


export default Journal;

export const query = graphql`
  query blogListQuery($skip: Int! = 0){
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {fileAbsolutePath: {regex: "\/blogs/"}}
      limit: 12,
      skip: $skip
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
