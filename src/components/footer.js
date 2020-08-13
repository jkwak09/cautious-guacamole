import React from "react";

function Footer() {
  return (
    <>
      <footer style={{ bottom: `0`, width: `100%`, height: `2.5rem` }}>
  <p>&copy; { new Date().getFullYear() } Cautious Guacamole</p>
      </footer>
    </>
  )
};

export default Footer;
