import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";

import Pagination from "../components/pagination";

import plantPostStyles from "./plants.module.css";

function Plants ({ data, pageContext }) {

  if (!data) return <p>No Plants found!</p>;
  return(
    <Layout>
      <>
        <Helmet title={`Plants | ${data.site.siteMetadata.title}`}/>
        <h1 className="page-title">
        Plants
        </h1>
        <h4 className={plantPostStyles.totalPosts}>{data.allMarkdownRemark.totalCount} Posts</h4>
        <div className={plantPostStyles.plantPostsContainer}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className={plantPostStyles.plantPost}>
              <Link to={`/plants${node.fields.slug}`}>
                <img src={node.frontmatter.thumbnail}  alt={node.frontmatter.altText} className={plantPostStyles.plantpostImage} />
                <h3 className={plantPostStyles.plantPostTitle}>
                  {node.frontmatter.title}
                </h3>
                <div className={plantPostStyles.plantPostDate}>
                  {node.frontmatter.date}
                </div>
                <p className={plantPostStyles.plantPostExcerpt}>{node.excerpt}</p>
              </Link>
              <ul className={plantPostStyles.plantTags}>
                {node.frontmatter.tags.map((tag, i) => {
                    return(
                      <Link to={`/tags/${tag}`}>
                        <li className={plantPostStyles.plantTag} key={i}>{tag}</li>
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
      filter: { frontmatter: { posttype: { eq: "plants" } } },
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
