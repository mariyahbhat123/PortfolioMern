import React, { useRef } from "react";
import "../Styles/EmailPortfolio.css";
import emailjs from "@emailjs/browser";

export default function EmailPortfolio() {
  const emailRef = useRef();
  const msgRef = useRef();
  const nameRef = useRef();

  const emailService = process.env.REACT_APP_EMAIL_SERVICE;

  const emailTemplate = process.env.REACT_APP_EMAIL_TEMPLATE;
  const emailPublicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        emailService,
        emailTemplate,
        {
          name: nameRef.current.value,
          emailfrom: emailRef.current.value,
          message: msgRef.current.value,
        },
        emailPublicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
        },
        (error) => {
          console.log(error.text);
          console.log("error sending message, try again!");
        }
      );
  };
  return (
    <div>
      <div>
        <p className="ques">How can you communicate?</p>
        <h1 className="contact">Contact Me</h1>
      </div>
      <div className="formParentContainer">
        <div className="formContainer">
          <form action="">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="inputFormContainer">
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Your Name"
                  className="nameInput"
                  name="name"
                />
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="Enter Email"
                  className="emailInput"
                  name="email_from"
                />
              </div>
              <textarea
                ref={msgRef}
                name="message"
                id=""
                placeholder="Write Something"
                className="textInput"
              />
              <div className="btnContainer">
                <button className="btnMessage" onClick={sendEmail}>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
