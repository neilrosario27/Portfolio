import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const CopyToClipboardButton = () => {
  const emailToCopy = "rosariodenver27@gmail.com";
  const emailRef = useRef(null);

  const copyToClipboard = () => {
    emailRef.current.select();
    document.execCommand("copy");
  };

  return (
    <div>
      <input
        ref={emailRef}
        type="text"
        value={emailToCopy}
        readOnly
        style={{ position: "absolute", left: "-9999px" }}
      />
      <button onClick={copyToClipboard} className="mail-button">
        <FontAwesomeIcon icon={faCopy} style={{ marginRight: "5px" }} />
        Copy Email
      </button>
    </div>
  );
};

export default CopyToClipboardButton;
