import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";

import Pagination from "../components/pagination";

import plantStyles from "./plants.module.css";

function Plants ({ data, pageContext }) {

  return(
    <Layout>
      <>
        <Helmet title={`Projects | ${data.site.siteMetadata.title}`}/>
        <h1 className="page-title">
        Plants
        </h1>
        <h4 className={plantStyles.totalPosts}>{data.allMarkdownRemark.totalCount} Plants</h4>
        <div className="">
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className={plantStyles.plantPostContainer}>
              <div className={plantStyles.plantImageContainer}>
                <Link to={`/plants${node.fields.slug}`}>
                  <img src={node.frontmatter.thumbnail}  alt={node.frontmatter.altText} className={plantStyles.plantPostImage} />
                </Link>
                <div className={plantStyles.plantPostDate}>
                  {node.frontmatter.date}
                </div>
                <ul className={plantStyles.plantTags}>
                  {node.frontmatter.tags.map((tag, i) => {
                    return(
                      <Link to={`/tags/${tag}`}>
                        <li className={plantStyles.journalTag} key={i}>{tag}</li>
                      </Link>
                    )
                  })
                  }
                </ul>
              </div>
              <div className={plantStyles.plantExcerptContainer}>
                <Link to={`/plants${node.fields.slug}`}>
                  <h3 className="">
                    {node.frontmatter.title}
                  </h3>
                </Link>
                <p className="">{node.excerpt}</p>
              </div>
              <div className={plantStyles.postDivider}></div>
            </div>

        ))}
        </div>
        <Pagination
          currentPage={pageContext.currentPage}
          totalCount={data.allMarkdownRemark.totalCount}
          pathPrefix="/plants/"
        />
      </>
    </Layout>
  )
};


export default Plants;

export const query = graphql`
  query plantListQuery($skip: Int! = 0){
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {fileAbsolutePath: {regex: "\/plants/"}}
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
