import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

// import Image from "../components/image.js"

import aboutStyles from "./about.module.css";

function About({ data }) {
  return (
    <Layout>
      <>
        <Helmet title={`About | ${data.site.siteMetadata.title}`} />
        {/* <h1 className="page-title">About {data.site.siteMetadata.title}</h1>
        <div className={aboutStyles.aboutBody}>
        <div className={aboutStyles.aboutImage}>
        <Image alt="me" class={aboutStyles.profilePicture} filename="me.jpg" />
        </div>
        <div className={aboutStyles.aboutText}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec. Dui faucibus in ornare quam. Proin nibh nisl condimentum id venenatis a. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Eget gravida cum sociis natoque penatibus et magnis. Pulvinar sapien et ligula ullamcorper malesuada. Sagittis purus sit amet volutpat consequat mauris nunc. Sit amet est placerat in egestas erat. Commodo quis imperdiet massa tincidunt. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Adipiscing enim eu turpis egestas pretium. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Iaculis nunc sed augue lacus viverra. Sit amet dictum sit amet justo donec enim diam. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec. Dui faucibus in ornare quam. Proin nibh nisl condimentum id venenatis a. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Eget gravida cum sociis natoque penatibus et magnis. Pulvinar sapien et ligula ullamcorper malesuada. Sagittis purus sit amet volutpat consequat mauris nunc. Sit amet est placerat in egestas erat. Commodo quis imperdiet massa tincidunt. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Adipiscing enim eu turpis egestas pretium. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Iaculis nunc sed augue lacus viverra. Sit amet dictum sit amet justo donec enim diam. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus.</p>
        <h3>My Hobbies</h3>
        <p>List hobbies here </p>
        <h3>About this site</h3>
        <p>Created using: </p>
        </div>
        </div> */}

        <div class={aboutStyles.parallax}>

          <div class={`${aboutStyles.parallaxGroup} ${aboutStyles.group1}`}>
            <div class={`${aboutStyles.parallaxBase} ${aboutStyles.group1Base} ${aboutStyles.parallaxLayer}`}>
              <div class={aboutStyles.pText}>About {data.site.siteMetadata.title} ↓</div>
            </div>
          </div>

          <div class={`${aboutStyles.parallaxGroup} ${aboutStyles.group2}`}>
            <div class={`${aboutStyles.parallaxBase} ${aboutStyles.parallaxLayer}`}>
              <div class={aboutStyles.pText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div class={`${aboutStyles.parallaxBack} ${aboutStyles.group2Back} ${aboutStyles.parallaxLayer}`}>
              <div class={aboutStyles.pTextBack}> {data.site.siteMetadata.title}</div>
            </div>
          </div>

          <div class={`${aboutStyles.parallaxGroup} ${aboutStyles.group3}`}>
            <div class={`${aboutStyles.parallaxBase} ${aboutStyles.group3Base} ${aboutStyles.parallaxLayer}`}>
              <div class={aboutStyles.pText}>Suspendisse potenti. Cras sagittis ipsum eu tempor aliquet. Etiam ac congue turpis. Curabitur et bibendum odio. Etiam blandit magna sed augue scelerisque convallis.</div>
            </div>
          </div>

          <div class={`${aboutStyles.parallaxGroup} ${aboutStyles.group4}`}>
            <div class={`${aboutStyles.parallaxBase} ${aboutStyles.parallaxLayer}`}>
              <div class={aboutStyles.pText}> Ut id facilisis enim. Etiam cursus mi quam, et pellentesque magna blandit non. Maecenas vulputate erat nisl, in hendrerit turpis convallis in. Morbi facilisis, nisi a vestibulum dapibus, quam urna pretium urna, quis aliquam nisl libero et metus.</div>
            </div>
            <div class={`${aboutStyles.parallaxBack} ${aboutStyles.group4Back} ${aboutStyles.parallaxLayer}`}>
              <div class={aboutStyles.pTextBack}>TESTING</div>
            </div>
          </div>

          <div class={`${aboutStyles.parallaxGroup} ${aboutStyles.group5}`}>
            <div class={`${aboutStyles.parallaxBase} ${aboutStyles.group5Base} ${aboutStyles.parallaxLayer}`}>
              <div class={aboutStyles.pText}>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus sodales vehicula finibus. Suspendisse ultricies pretium rutrum.</div>
            </div>
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
  }
`;
