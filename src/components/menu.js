import React from "react";
import { slide as Menu } from 'react-burger-menu';

class BurgerMenu extends React.Component {
  render () {

    return (
      <Menu noOverlay right outerContainerId={ "outer-container" } pageWrapId={ "page-wrap" } className={ "burger-nav-list" }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="journal" className="menu-item" href="/journal">Journal</a>
        <a id="projects" className="menu-item" href="/projects">Projects</a>
        <a id="about" className="menu-item" href="/about">About</a>
      </Menu>
    );
  }
}

export default BurgerMenu;
