import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";

function About({ data }) {
  return (
    <Layout>
      <>
        <Helmet title={`About | ${data.site.siteMetadata.title}`} />
        <h1>About {data.site.siteMetadata.title}</h1>
        <div className="about-body">
        <div className="about-image">
        <Img fixed={data.file.childImageSharp.fixed} alt="me" className="profile-picture" />
        </div>
        <div className="about-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec. Dui faucibus in ornare quam. Proin nibh nisl condimentum id venenatis a. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Eget gravida cum sociis natoque penatibus et magnis. Pulvinar sapien et ligula ullamcorper malesuada. Sagittis purus sit amet volutpat consequat mauris nunc. Sit amet est placerat in egestas erat. Commodo quis imperdiet massa tincidunt. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Adipiscing enim eu turpis egestas pretium. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Iaculis nunc sed augue lacus viverra. Sit amet dictum sit amet justo donec enim diam. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec. Dui faucibus in ornare quam. Proin nibh nisl condimentum id venenatis a. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Eget gravida cum sociis natoque penatibus et magnis. Pulvinar sapien et ligula ullamcorper malesuada. Sagittis purus sit amet volutpat consequat mauris nunc. Sit amet est placerat in egestas erat. Commodo quis imperdiet massa tincidunt. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Adipiscing enim eu turpis egestas pretium. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Iaculis nunc sed augue lacus viverra. Sit amet dictum sit amet justo donec enim diam. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus.</p>


        </div>
        </div>
      </>
    </Layout>
  )
};

export default About;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
