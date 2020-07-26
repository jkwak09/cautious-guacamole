import React from "react";
import { Link } from "gatsby";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

function Header() {
  return (
    <div>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/">
        <h3 style={{ display: `inline` }}>Site Title</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
        </ul>
      </header>
    </div>
  )
};

export default Header;
