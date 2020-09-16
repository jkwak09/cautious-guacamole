import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import BurgerMenu from "./menu";

import headerStyles from "./header.module.css";

const ListLink = props => (
  <li className={headerStyles.navLink} >
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
      <header className={headerStyles.headerContainer}>
        <nav className={headerStyles.navContainer}>
          <Link to="/">
          <h3 className={headerStyles.siteTitle} style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
          </Link>
          <ul className={headerStyles.navList}>
            {/* <ListLink to="/">Home</ListLink> */}
            <ListLink to="/journal/">Journal</ListLink>
            <ListLink to="/projects/">Projects</ListLink>
            <ListLink to="/about/">About</ListLink>
          </ul>
          <BurgerMenu className={headerStyles.burger} />
        </nav>
      </header>

  )
};

export default Header;
