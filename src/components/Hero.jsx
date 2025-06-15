import React from "react";
import style from "../components/Hero.module.css";
import ArrowIcon from "../assets/majesticons_arrow-up-line.svg";
import iPhoneSpaceGray from "../assets/iPhoneSpaceGray.png";
import { Link } from "react-router-dom";
import  webSiteImage  from "../assets/MobileViewWebsite.png";

const Hero = () => {
  return (
    <div className={style.cardsContainer}>
      {/* Left Side */}
      <div className={style.cardsContainer__LeftCards}>
        <div className={style.cardsContainer__Projects}>
          <ul className={style.Projects__RecentWork}>
            <li>Recent Work</li>
          </ul>
          <section className={style.ProjectsContainer}>
            <section className={style.Projects}>
              <div className={style.ProjectNameDate}>
                <h4>E-commerce Organic Store</h4>
                <p>02-03-2025</p>
              </div>
              <div className={style.web}>Web App</div>
            </section>
            <section className={style.Projects}>
              <div className={style.ProjectNameDate}>
                <h4>OTT Web App </h4>
                <p>On Going</p>
              </div>
              <div className={style.web}>Web App</div>
            </section>
            <section className={style.Projects}>
              <div className={style.ProjectNameDate}>
                <h4>Social Media Blogging App</h4>
                <p>02-03-2025 - On Going</p>
              </div>
              <div className={style.web}>Web App</div>
            </section>
          </section>
        </div>
        <div className={style.cardsContainer__Preview}>
          <div className={style.Preview__HeadingAndLogoContainer}>
            <div className={style.Preview__HeadingsContainer}>
              <h1>Preview of Projects</h1>
              <p>Product Develop</p>
            </div>
            <img src={ArrowIcon} alt="logo" />
          </div>
          <div className={style.ImageContainer}>
            <img src={iPhoneSpaceGray} alt="iphone" />
            <div className={style.ImageSlider}>
              <img src={webSiteImage} alt="WebAppPreview" />
            </div>
          </div>
        </div>
      </div>
      {/* Rigth Side */}
      <div className={style.cardsContainer__RightCards}>
        <Link to="/about" className={style.customLink}>
          <div className={style.cardsContainer__ProductDesign}>
            <p>Skills</p>
          </div>
        </Link>

        <div className={style.cardsContainer__ExpNocode}>
          <div className={style.cardsContainer__UserExperiance}>
            <p>Certifications</p>
            {/* <div className={style.UserExperiance__Certifications}> */}
            <ul className={style.CertificatesContainer}>
              <li>
                <i
                  className="fa-regular fa-circle fa-2xs"
                  style={{ color: "#f35034", marginRight: "8px" }}
                ></i>
                Backend Development by Coding Ninjas
              </li>
              <li>
                {" "}
                <i
                  className="fa-regular fa-circle fa-2xs"
                  style={{ color: "#f35034", marginRight: "8px" }}
                ></i>
                Frontend Development by Coding Ninjas
              </li>
              <li>
                {" "}
                <i
                  className="fa-regular fa-circle fa-2xs"
                  style={{ color: "#f35034", marginRight: "8px" }}
                ></i>
                Introduction to JAVA by Coding Ninjas
              </li>
              <li>
                {" "}
                <i
                  className="fa-regular fa-circle fa-2xs"
                  style={{ color: "#f35034", marginRight: "8px" }}
                ></i>
                Quantum Computing (Q#) by Udemy
              </li>
              <li>
                {" "}
                <i
                  className="fa-regular fa-circle fa-2xs"
                  style={{ color: "#f35034", marginRight: "8px" }}
                ></i>
                Microsoft Technology Associate in Python Programming and
                Artificial Intelligence
              </li>
              <li>
                {" "}
                <i
                  className="fa-regular fa-circle fa-2xs"
                  style={{ color: "#f35034", marginRight: "8px" }}
                ></i>
                Automobile and Electric Vehicles by EIsystems in IIT
              </li>
              <li>
                {" "}
                <i
                  className="fa-regular fa-circle fa-2xs"
                  style={{ color: "#f35034", marginRight: "8px" }}
                ></i>
                AutoCAD and CATIA by CADD Centre
              </li>
              <li>
                {" "}
                <i
                  className="fa-regular fa-circle fa-2xs"
                  style={{ color: "#f35034", marginRight: "8px" }}
                ></i>{" "}
                Northern Railway Carriage and Wagon Workshop
              </li>
              <li>
                {" "}
                <i
                  className="fa-regular fa-circle fa-2xs"
                  style={{ color: "#f35034", marginRight: "8px" }}
                ></i>
                Soft skill training programme by Hablar
              </li>
            </ul>
            {/* </div> */}
          </div>
          <div className={style.cardsContainer__NoCodeDevelop}>
            <p>Education</p>
            <ul className={style.CertificatesContainer}>
              <li>
                <i
                  className="fa-regular fa-circle fa-2xs"
                  style={{ color: "#f35034", marginRight: "8px" }}
                ></i>
                Coding Ninjas <br />
                2022-Ongoing
              </li>
              <li>
                {" "}
                <i
                  className="fa-regular fa-circle fa-2xs"
                  style={{ color: "#f35034", marginRight: "8px" }}
                ></i>
                SRMGPC, Lucknow(B.TECH) in Mechanical Engineering (62%) <br />
                2017-2021
              </li>
              <li>
                {" "}
                <i
                  className="fa-regular fa-circle fa-2xs"
                  style={{ color: "#f35034", marginRight: "8px" }}
                ></i>
                Kingson Inter College, <br />
                Intermediate(65%) <br /> 2017
              </li>{" "}
              <li>
                {" "}
                <i
                  className="fa-regular fa-circle fa-2xs"
                  style={{ color: "#f35034", marginRight: "8px" }}
                ></i>
                Kingson Inter College,
                <br />
                High School (71%) <br /> 2015
              </li>
            </ul>
          </div>
        </div>
        <div className={style.cardsContainer__AllMusicProduct}>
          <div className={style.Preview__HeadingAndLogoContainer}>
            <div className={style.Preview__HeadingsContainer}>
              <h1>All UI Projects</h1>
            </div>
            <img src={ArrowIcon} alt="logo" />
          </div>
          <div className="ImageContainer"></div>
        </div>
        <div className={style.cardsContianer__AllMapDesign}>
          {" "}
          <div className={style.Preview__HeadingAndLogoContainer}>
            <div className={style.Preview__HeadingsContainer}>
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
