import React, {useRef, useState} from "react";
import "./Contact.scss";
import { AiOutlineMail, AiOutlinePhone, AiFillLinkedin, AiFillGithub, AiFillTwitterCircle, AiFillMediumCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  //emailjs
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8gps3fs",
        "template_lctgvtg",
        form.current,
        "au-VBJJ7FMVOzcApK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
    );
    setMessage("Message sent!");
    e.target.reset();
  };
  return (
    <div className="container contact">
      <h3 className="contact__title">Contact me</h3>
      <div className="contact__details">
        <a
          href="mailto:xanhtham.cuc@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineMail size={30} /> xanhtham.cuc@gmail.com
        </a>
        <p>
          <AiOutlinePhone size={30} />
          020-4178-6914
        </p>
        <p>
          <GoLocation size={30} /> Auckland, New Zealand
        </p>
      </div>
      <div className="contact__icons ">
        <a
          href="https://www.linkedin.com/in/thu-giang-20b2111ba/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={30} style={{ fill: "url(#blue-gradient)" }} />
        </a>
        <a
          href="https://medium.com/@xanhtham.cuc"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillMediumCircle
            size={30}
            style={{ fill: "url(#more-blue-gradient)" }}
          />
        </a>
        <a
          href="https://twitter.com/memopussle"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle
            size={30}
            style={{ fill: "url(#purple-gradient)" }}
          />
        </a>
        <a
          href="https://github.com/memopussle"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub
            size={30}
            style={{ fill: "url(#more-purple-gradient)" }}
          />
        </a>
      </div>
      <div>
        <h4 className="email__title primary-text">
          Drop a <span className="color-orange">message</span>
        </h4>
        <form ref={form} onSubmit={sendEmail} className="email__form">
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <div>
            <button className="normal-button small-margin " type="submit">
              SEND
            </button>
          </div>
        </form>

        <p className="email__message">{message}</p>
      </div>
    </div>
  );
};

export default Contact;
