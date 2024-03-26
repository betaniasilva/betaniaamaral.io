import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
// import { useRef } from 'react';
// import emailjs from 'emailjs-com'
import { contactData, contactInputs } from "../../constants/contactData";

const Contact = () => {
  const { inputs, btn } = contactInputs;
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_3fjfb17', 'template_ky1ucaz', form.current, 'user_641J0AWGxx4qcKi835yDq')

  //   e.target.reset()
  // };

  const { preTitle, title, contacts } = contactData;

  return (
    <section id="contact">
      <h5>{preTitle}</h5>
      <h2>{title}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contacts.map((item) => (
            <article className="contact__option">
              {item.title === "Email" && (
                <MdOutlineEmail className="contact__option-icon" />
              )}
              {item.title === "Instagram" && (
                <BsInstagram className="contact__option-icon" />
              )}
              {item.title === "WhatsApp" && (
                <BsWhatsapp className="contact__option-icon" />
              )}
              <h4>{item.title}</h4>
              <h5>{item.description}</h5>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.btn}
              </a>
            </article>
          ))}
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form
          // ref={form}
          // onSubmit={sendEmail}
          action="https://formspree.io/f/xyyrnzpk"
          method="POST"
        >
          {inputs.map((item) => (
            <>
              {item.type !== "textarea" && (
                <input
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                  required
                />
              )}
              {item.type === "textarea" && (
                <textarea
                  name={item.name}
                  placeholder={item.placeholder}
                  required
                />
              )}
            </>
          ))}
          <button type="submit" className="btn btn-primary">
            {btn.value}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
