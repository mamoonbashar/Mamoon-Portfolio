import React from "react";
import style from "../components/Hero.module.css";
import ArrowIcon from "../assets/majesticons_arrow-up-line.svg";

const Hero = () => {
  return (
    <div className={style.cardsContainer}>
      {/* Left Side */}
      <div className={style.cardsContainer__LeftCards}>
        <div className={style.cardsContainer__Projects}></div>
        <div className={style.cardsContainer__Preview}>
          <div className={style.Preview__HeadingAndLogoContainer}>
            <div className={style.Preview__HeadingsContainer}>
              <h1>iOS Mobile app</h1>
              <p>Product Develop</p>
            </div>
            <img src={ArrowIcon} alt="logo" />
          </div>
          <div className="ImageContainer"></div>
        </div>
      </div>
      {/* Rigth Side */}
      <div className={style.cardsContainer__RightCards}>
        <div className={style.cardsContainer__ProductDesign}>
          <p>Product Design</p>
        </div>
        <div className={style.cardsContainer__ExpNocode}>
          <div className={style.cardsContainer__UserExperiance}>
            <p>UserExperience</p>
            
          </div>
          <div className={style.cardsContainer__NoCodeDevelop}>
           <p>
           No Code Develope
            </p> 
          </div>
        </div>
        <div className={style.cardsContainer__AllMusicProduct}>
          <div className={style.Preview__HeadingAndLogoContainer}>
            <div className={style.Preview__HeadingsContainer}>
              <h1>All Music Product</h1>
              <p>UX Case Study</p>
            </div>
            <img src={ArrowIcon} alt="logo" />
          </div>
          <div className="ImageContainer"></div>
        </div>
        <div className={style.cardsContianer__AllMapDesign}>
          {" "}
          <div className={style.Preview__HeadingAndLogoContainer}>
            <div className={style.Preview__HeadingsContainer}>
              <h1>All Map Design</h1>
              <p>UX Case Study</p>
            </div>
            <img src={ArrowIcon} alt="logo" />
          </div>
          <div className="ImageContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
