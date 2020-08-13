import React from "react";

function Footer() {
  return (
    <>
      <footer style={{ position: `absolute`, bottom: `0`, maxWidth: `100vw`, height: `2.5rem` }}>
        <div>&copy; { new Date().getFullYear() } Cautious Guacamole</div>
      </footer>
    </>
  )
};

export default Footer;
