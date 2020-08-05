import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import { Link, graphql } from "gatsby";

function Journal ({ data }) {
  // console.log(data);
  return(
    <Layout>
      <Header />
      <div>
        <h1>
        Blog posts
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={`/journal${node.fields.slug}`}>
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
    </Layout>
  )
};

export default Journal;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
`
