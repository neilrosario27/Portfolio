import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

export const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jhqusg7",
        "template_yqf8e9i",
        form.current,
        "xvNk5bS8csErDbm0r"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mail">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-input">
          <input type="text" name="user_name" placeholder="Name" />
        </div>
        <div className="mail-input">
          <input type="email" name="user_email" placeholder="Email" />
        </div>
        <div className="message-input">
          <textarea name="message" placeholder="Message" />
        </div>
        <input className="send-button" type="submit" value="Send" />
      </form>
    </div>
  );
};
