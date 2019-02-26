import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerHeaderContainer">
        <div className="footerHeader">
          The Ultimate Cheatsheet for Critical Thinking
        </div>
        <div className="footerParagraph">
          Want to exercise critical thinking skills? Ask these questiosn
          whenever you discover or discuss new information. These are broad and
          versatile questions that have limitless applications.
        </div>
        <a
          className="footerLink"
          rel="noopener noreferrer"
          target="_blank"
          href="https://globaldigitalcitizen.org/"
        >
          Global Digital Citizen Foundation
        </a>
      </div>
    </footer>
  );
};

export default Footer;
