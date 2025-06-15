import React from "react";
import style from "../components/Banner.module.css";
import PlusIcon from "../assets/ic_round-plus.svg";
import CopyIcon from "../assets/ph_copy.svg";
import Profile from '../assets/ProfileImage.jpeg'
const Banner = () => {
  return (
    <div className={style.Banner}>
      {/* my name and button contianer  */}
      <div className={style.Banner__NameContainer}>
        <div className={style.Banner__ProfessionContainer}>
          <p>UI/UX Designer</p>
        </div>
        <div className={style.Banner__NameAndBio}>
          <h3>I'm Mamoon</h3>
          <p>I design digital products with great experience.</p>
        </div>
        <div className={style.Banner__ButtonsContainer}>
          <a id={style.Banner__HireMe}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mohdmamoon480@gmail.com&su=Hire%20Me&body=Hi%2C%20I%20am%20interested%20in%20working%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
          >
          
              Hire me <span className={style.divider}></span>
              <img src={PlusIcon} alt="logo" />
            
          </a>
          <button id={style.Banner__CopyEmail}>
            Copy Email <span className={style.divider}></span>
            <img src={CopyIcon} alt="logo" />
          </button>
        </div>
      </div>

      {/* DP container */}
      <div className={style.Banner__ProfileContainer}>
        <div className={style.Banner__AvailableForJob}>
          <div className={style.redCircle}></div>
          <p>AVAILABLE FOR JOB</p>
        </div>
        <div className={style.Banner__ProfileImageContainer}>
          <div className={style.Banner__ImageBackground}>
            <img src={Profile} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
