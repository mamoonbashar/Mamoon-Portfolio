import React from "react";
import style from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <section className={style.FormContainer}>
        <section className={style.Form__Heading}>
          <h3>Get In Touch</h3>
          <p>
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </section>
        <form  className={style.Form__Container}>
          <section className={style.Form__InlineInputs}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </section>
          <section className={style.Form__ColumnInputs}>
            <input
              type="text"
              id={style.Email}
              placeholder=" Write Your Email"
            />
            <textarea
              id={style.Message}
              placeholder="Write Your Message"
            ></textarea>
          </section>
          <section className={style.Form__SendMessageBtnContainer}>
            <button type="submit" className={style.SendMessage}>Send Message</button>
          </section>
        </form>
      </section>
      <section className={style.SocialMediaIconsContainer}>
        {/* <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /> */}
      </section>
    </>
  );
};

export default Contact;
