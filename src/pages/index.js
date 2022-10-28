import React from "react";
import Layout from "../components/layout";
import Carousel from "../components/carousel";
import RecentPosts from "../components/recent-posts"
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import homeStyles from "./index.module.css";

function Home({ data }) {
  return (
    <>
    <Layout>
      <>
        <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
        <div className={homeStyles.homeCarousel}>
          <Carousel />
        </div>
        <div className={homeStyles.homeRecentPosts}>
          <RecentPosts />
        </div>
        <div className={homeStyles.homeRecentPosts}>
          <i>PLACEHOLDER</i>
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
