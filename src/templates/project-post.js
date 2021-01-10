import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

export default function ProjectPost({ data, pageContext }) {
  const post = data.markdownRemark;
  const { next, prev } = pageContext;
  return (
    <Layout>
      <div>
        <Helmet title={`${post.frontmatter.title} | Projects | ${data.site.siteMetadata.title}`} />
        <h1>{post.frontmatter.title}</h1>
        {
          post.frontmatter.tags.map((tag, index) => {
            return (
              <span key={index}>
                <Link to={`/tags/${tag}`}>
                  <small>{tag}</small>
                </Link>
              </span>
            );
          })
        }
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>

      <div>
        {
          prev === null ? `☻`:
          <Link
          // disabled={prev.previous === null ? true : null}
          to={`${pageContext.pathPrefix}${prev.fields.slug}`}
        >
          <span>
            {prev.frontmatter.title}
          </span>
        </Link>
        }
        <span>
          |
        </span>
        {next === null ? `No more projects.` :
          <Link
          // disabled={next === null ? true : null}
          to={`${pageContext.pathPrefix}${next.fields.slug}`}
        >
          <span>
            {next.frontmatter.title}
          </span>
        </Link>
        }

      </div>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    },
    site {
      siteMetadata {
        title
      }
    }
  }
`;
