import { useRef } from "react";
import emailjs from "@emailjs/browser";

const MyContact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4jqr6pe",
        "template_df5ov0d",
        form.current,
        "YgYT3YEfhbwGlof85",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <section className="contactSection" id="contact">
      <div className="contact-box">
        <div className="leftSiteForm"></div>
        <div className="rightSiteForm">
          <h3>CONTACT ME</h3>
          <p>
            Dont hesitate to reach out. Im enthusiastic about the opportunity to
            become a valuable member of your team!
          </p>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="field"
              placeholder="Your Name"
              name="from_name"
              required
            />
            <input
              type="email"
              className="field"
              placeholder="Your Email"
              name="from_email"
              required
            />
            <textarea
              className="msg field"
              name="message"
              rows="4"
              placeholder="Write a Message"
              required
            ></textarea>
            <button type="submit" value="Send" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return <MyContact />;
};

export { Contact };
