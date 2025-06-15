import React from "react";
import Style from "./Portfolio.module.css";
const Portfolio = () => {
  return (
    <>
      <section className={Style.MyWork}>
        <h3>My Work</h3>
        <p>
          Here's a selection of projects that showcase my skills in turning{" "}
          <br />
          complex problems into beautiful and intuitive designs.
        </p>
      </section>
      <section className={Style.TilesContainer}>
        <section className={Style.TilesContainer__Tiles}><p>All</p></section>
        <section className={Style.TilesContainer__Tiles}><p>Project</p></section>
        <section className={Style.TilesContainer__Tiles}><p>User Experience</p></section>
      
      </section>
      <section className={Style.CardsContainer}>
        <section className={Style.CardsContainer__Card}>
          <section className={Style.Card__ProjectName}></section>
          <section className={Style.Card__ProjectDescription}>
            <div className={Style.Card__ProjectNameTile}></div>
            <div className={Style.Card__ProjectInformation}>
              <h4>All Music Product</h4>
              <p>
                A case study on improving discoverability in a music steaming
              </p>
            </div>
            <div className={Style.Card__ViewCaseStudy}>
              {" "}
              <p>View Case Study</p>
              <i
                className="fa-solid fa-arrow-right "
                style={{ color: "#f35034", fontSize: "10px" }}
              ></i>
            </div>
          </section>
        </section>
        <section className={Style.CardsContainer__Card}>
          <section className={Style.Card__ProjectName}></section>
          <section className={Style.Card__ProjectDescription}>
            <div className={Style.Card__ProjectNameTile}></div>
            <div className={Style.Card__ProjectInformation}>
              <h4>All Music Product</h4>
              <p>
                A case study on improving discoverability in a music steaming
              </p>
            </div>
            <div className={Style.Card__ViewCaseStudy}>
              <p>View Case Study</p>
              <i
                className="fa-solid fa-arrow-right "
                style={{ color: "#f35034", fontSize: "10px" }}
              ></i>
            </div>
          </section>
        </section>
        <section className={Style.CardsContainer__Card}>
          <section className={Style.Card__ProjectName}></section>
          <section className={Style.Card__ProjectDescription}>
            <div className={Style.Card__ProjectNameTile}></div>
            <div className={Style.Card__ProjectInformation}></div>
            <div className={Style.Card__ViewCaseStudy}></div>
          </section>
        </section>
        <section className={Style.CardsContainer__Card}>
          <section className={Style.Card__ProjectName}></section>
          <section className={Style.Card__ProjectDescription}>
            <div className={Style.Card__ProjectNameTile}></div>
            <div className={Style.Card__ProjectInformation}></div>
            <div className={Style.Card__ViewCaseStudy}></div>
          </section>
        </section>
        <section className={Style.CardsContainer__Card}>
          <section className={Style.Card__ProjectName}></section>
          <section className={Style.Card__ProjectDescription}>
            <div className={Style.Card__ProjectNameTile}></div>
            <div className={Style.Card__ProjectInformation}></div>
            <div className={Style.Card__ViewCaseStudy}></div>
          </section>
        </section>
        <section className={Style.CardsContainer__Card}>
          <section className={Style.Card__ProjectName}></section>
          <section className={Style.Card__ProjectDescription}>
            <div className={Style.Card__ProjectNameTile}></div>
            <div className={Style.Card__ProjectInformation}></div>
            <div className={Style.Card__ViewCaseStudy}></div>
          </section>
        </section>
        <section className={Style.CardsContainer__Card}>
          <section className={Style.Card__ProjectName}></section>
          <section className={Style.Card__ProjectDescription}>
            <div className={Style.Card__ProjectNameTile}></div>
            <div className={Style.Card__ProjectInformation}></div>
            <div className={Style.Card__ViewCaseStudy}></div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Portfolio;
