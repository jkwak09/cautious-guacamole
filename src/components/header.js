import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} partiallyActive={true}>{props.children}</Link>
  </li>
);

function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <header>
        <Link to="/">
        <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/journal/">Journal</ListLink>
          <ListLink to="/about/">About</ListLink>
        </ul>
      </header>
    </div>
  )
};

export default Header;
