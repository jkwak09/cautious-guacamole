import React from "react";
import Layout from "../components/layout";
import Carousel from "../components/carousel";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

function Home({ data }) {
  return (
    <>
    <Layout>
      <>
        <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
        <div className="home-carousel">
          <Carousel />
        </div>
        <div className="home-recent-posts">
          <i>PLACEHOLDER FOR RECENT POSTS</i>
        </div>
      </>
    </Layout>
    </>
    )
};

export default Home;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
