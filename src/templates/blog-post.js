import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

export default function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark;
  const { next, prev } = pageContext;
  return (
    <Layout>
      <div>
        <Helmet title={`${post.frontmatter.title} | Journal | ${data.site.siteMetadata.title}`} />
        <h1>{post.frontmatter.title}</h1>
        {/* This is the post */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* This will display related posts */}
        <div className="related-blog-posts">
          Related blog posts will appear here.
        </div>
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
          {` | `}
        </span>
        {next === null ? `No more posts.` :
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
      }
    },
    site {
      siteMetadata {
        title
      }
    }
  }
`;
