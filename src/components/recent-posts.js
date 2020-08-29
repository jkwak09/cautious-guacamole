import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

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
          filter: {fileAbsolutePath: {regex: "\/blogs/"}},
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
      <div className="recent-posts-container">
      {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="recent-post">
            <Link to={`/projects${node.fields.slug}`}>
              <img src={node.frontmatter.thumbnail}  alt={node.frontmatter.altText} className="recent-post-image" />
              <h3 className="recent-post-title">
                {node.frontmatter.title}{" "}
              </h3>
              <div className="recent-post-date">
                {node.frontmatter.date}
              </div>
              <p className="recent-post-excerpt">{node.excerpt}</p>
            </Link>
              {/*
              Note to self: Check structure of tags
              */}
            <p>{node.frontmatter.tags}</p>
          </div>

      ))}
      </div>
    </>
  )
};

export default RecentPosts;

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     },
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC },
//       filter: {fileAbsolutePath: {regex: "\/blogs/"}},
//       limit: 4
//       ) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//             tags
//             thumbnail
//             altText
//             posttype
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;
