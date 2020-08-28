import React from "react";

function Footer() {
  return (
    <>
      <footer className style={{ bottom: `0`, border: `5px solid green`, width: `100%`}}>
        <div>
          Links will go here.
        </div>
        <div className="copyright-container">
          <div className="copyright">&copy; { new Date().getFullYear() } Cautious Guacamole </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;
