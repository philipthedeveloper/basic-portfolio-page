import React, { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../../context";

function RightContact() {
  const formRef = useRef(null);
  const {
    state: { darkmode },
  } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iff6m9u",
        "template_v8wx0b9",
        formRef.current,
        "RX-dGuQ1mEuE8ACeg"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Email Sucesffully Sent 🤗👌", { type: "success" });
        },
        (error) => {
          console.log(error.text);
          toast("An Error Occured Please Retry ❗❗", { type: "error" });
        }
      );
  };

  return (
    <>
      <section className="c-right">
        <p className="c-desc">
          <b>What's your story? </b>Get in touch. Always available for
          freelancing if the right project comes along.
        </p>
        <form action="" ref={formRef} onSubmit={handleSubmit}>
          <span className="input">
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder="Name"
              style={{
                backgroundColor: darkmode && "#333",
                color: darkmode && "#fff",
              }}
            />
          </span>
          <span className="input">
            <input
              type="text"
              name="user_subject"
              id="subject"
              placeholder="Subject"
              style={{
                backgroundColor: darkmode && "#333",
                color: darkmode && "#fff",
              }}
            />
          </span>
          <span className="input">
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="Email"
              style={{
                backgroundColor: darkmode && "#333",
                color: darkmode && "#fff",
              }}
            />
          </span>
          <textarea
            name="message"
            id="message"
            rows="5"
            style={{
              backgroundColor: darkmode && "#333",
              color: darkmode && "#fff",
            }}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </section>
    </>
  );
}

export default RightContact;
