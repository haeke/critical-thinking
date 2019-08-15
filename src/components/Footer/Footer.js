import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerHeaderContainer">
        <h1 className="footerHeader">
          The Ultimate Cheatsheet Critical Thinking 
        </h1>
        <p className="footerParagraph">
          Want to exercise critical thinking skills? Ask these questions
          whenever you discover or discuss new information. These are broad and
          versatile questions that have limitless applications.
        </p>
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
