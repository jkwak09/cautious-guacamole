import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";

import Pagination from "../components/pagination";

function Journal ({ data, pageContext }) {

  return(
    <Layout>
      <>
        <Helmet title={`Projects | ${data.site.siteMetadata.title}`}/>
        <h1 className="page-title">
        Journal
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <div className="">
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className="">
              <Link to={`/journal${node.fields.slug}`}>
                <img src={node.frontmatter.thumbnail}  alt={node.frontmatter.altText} className="" />
                <h3 className="">
                  {node.frontmatter.title}
                </h3>
                <div className="">
                  {node.frontmatter.date}
                </div>
                <p className="">{node.excerpt}</p>
              </Link>
              <p>{node.frontmatter.tags}</p>
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
      limit: 3,
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
