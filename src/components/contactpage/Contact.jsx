import React from "react";
import "./contact.scss";
import { Contactus } from "./ContactUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import CopyToClipboardButton from "./Copymail.jsx";
export const Contact = () => {
  const redirectToTwitter = () => {
    window.open("https://twitter.com/neilrosario27");
  };

  const redirectToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/neil-rosario-4455a6247/");
  };

  const redirectToGitHub = () => {
    window.open("https://github.com/neilrosario27");
  };

  return (
    <div className="contact">
      <div className="contact-lhs">
        <div className="greeting">
          <div className="greeting-text">Hi, Let's have a quick chat</div>
          <div className="link">
            <CopyToClipboardButton />
          </div>
        </div>
        <div
          className="contact-image"
          style={{ backgroundImage: 'url("./Code typing-pana.png")' }}
        ></div>
        <div className="contact-links">
          <div className="twitter">
            <FontAwesomeIcon
              icon={faTwitter}
              className="social-icon"
              onClick={redirectToTwitter}
            />
          </div>
          <div className="linkedin">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="social-icon"
              onClick={redirectToLinkedIn}
            />
          </div>
          <div className="github">
            {" "}
            <FontAwesomeIcon
              icon={faGithub}
              className="social-icon"
              onClick={redirectToGitHub}
            />
          </div>
        </div>
      </div>
      <div className="contact-rhs">
        <div className="contact-me">
          {" "}
          <p>Contact </p>
          <p>Me</p>
        </div>
        <Contactus />
      </div>
    </div>
  );
};
