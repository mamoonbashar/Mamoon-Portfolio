import React from "react";
import style from "../components/Footer.module.css";
const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.Footer__Portofolio2024}>
        <p>Portfolio 2024 </p>
      </div>
      <div className={style.Footer__OptionsContainer}>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohdmamoon480@gmail.com&su=Subject&body=Hello%20there"
  target="_blank"
  rel="noopener noreferrer">Twitter</a>
        <a href="">Instagram</a>
        <a href="">Linkdin</a>
      </div>
      <div className={style.Footer__AvailabelJobContainer}>
        <div className={style.Footer__AvailableForJob}>
          <div className={style.redCircle}></div>
          <p>AVAILABLE FOR JOB</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
