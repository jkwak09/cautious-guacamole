import React from "react";

import footerStyles from "./footer.module.css";

function Footer() {
  return (
    <>
      <footer className style={{ bottom: `0`, border: `5px solid green`, width: `100%`}}>
        <div>
          Links will go here.
        </div>
        <div className={footerStyles.copyright-container}>
          <div className={footerStyles.copyright}>&copy; { new Date().getFullYear() } Cautious Guacamole </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;
