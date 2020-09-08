import React from "react";

import footerStyles from "./footer.module.css";

function Footer() {
  return (
    <>
      <footer className={footerStyles.footerContainer}>
        <div>
          {/* Links will go here. */}
        </div>
        <div className={footerStyles.copyrightContainer}>
          <div className={footerStyles.copyright}>&copy; { new Date().getFullYear() } Cautious Guacamole </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;
