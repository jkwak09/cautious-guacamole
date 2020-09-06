import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

import recentPostStyles from "./recent-posts.module.css";

function RecentPosts () {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        },
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC },
          limit: 4
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
    `
  )
  return(
    <>
      <h2 className="page-title">Recent Posts</h2>
      <div className={recentPostStyles.recentPostsContainer}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <>
          { node.frontmatter.posttype === "project"
            ?
            <div key={node.id} className={recentPostStyles.recentPost}>
              <Link to={`/projects${node.fields.slug}`}>
                <img src={node.frontmatter.thumbnail}  alt={node.frontmatter.altText} className={recentPostStyles.recentPostImage} />
                <h3 className={recentPostStyles.recentPostTitle}>
                  {node.frontmatter.title}
                </h3>
                <div className={recentPostStyles.recentPostDate}>
                  {node.frontmatter.date}
                </div>
                <p className={recentPostStyles.recentPostExcerpt}>{node.excerpt}</p>
              </Link>
            </div>
            :
            <div key={node.id} className={recentPostStyles.recentPost}>
              <Link to={`/journal${node.fields.slug}`}>
                <img src={node.frontmatter.thumbnail}  alt={node.frontmatter.altText} className={recentPostStyles.recentPostImage} />
                <h3 className={recentPostStyles.recentPostTitle}>
                  {node.frontmatter.title}
                </h3>
                <div className={recentPostStyles.recentPostDate}>
                  {node.frontmatter.date}
                </div>
                <p className={recentPostStyles.recentPostExcerpt}>{node.excerpt}</p>
              </Link>
            </div>
          }
        </>
      ))}
      </div>
    </>
  )
};

export default RecentPosts;
