import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Built with ❤️ during Namaste React — &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
