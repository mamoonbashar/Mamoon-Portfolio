import React from "react";
import styles from "./About.module.css";
import MyProfile from "../assets/ProfileImage.jpeg";
const About = () => {
  return (
    <>
      <section className={styles.About}>
        <section className={styles.About__Container}>
          <section className={styles.About__Intro}>
            <h1>
              I'm Mamoon, a Full Stack Web Developer who loves building
              intuitive and beautiful digital experiences.
            </h1>
          </section>
          <section className={styles.About__Objective}>
            <p>
              Innovative Full Stack Developer skilled in diverse programming
              languages and development tools. Experienced in agile
              methodologies, designing scalable and efficient software
              solutions.
            </p>
            <p>
              Passionate about staying updated with emerging technologies and
              collaborating across teams for cutting-edge product delivery.
            </p>
          </section>
          <section className={styles.SkillsContainer}>
            <section className={styles.Skills}>
              <section className={styles.Skills__Heading}>My Skills</section>
              <section className={styles.Skills__SkillsTiles}>
                <section className={styles.Skills__Tiles}>JavaScript</section>
                <section className={styles.Skills__Tiles}>HTML</section>
                <section className={styles.Skills__Tiles}>CSS</section>
                <section className={styles.Skills__Tiles}>MongoDB</section>
                <section className={styles.Skills__Tiles}>ReactJS</section>
                <section className={styles.Skills__Tiles}>NodeJS</section>
                <section className={styles.Skills__Tiles}>Express</section>
                <section className={styles.Skills__Tiles}>Oops</section>
                <section className={styles.Skills__Tiles}>MySQL</section>
                <section className={styles.Skills__Tiles}>Bootstrap</section>
                <section className={styles.Skills__Tiles}>Git</section>
                <section className={styles.Skills__Tiles}>jQuery</section>
              </section>
            </section>
          </section>
        </section>
        <section className={styles.About__SkillNameContainer}>
          <section className={styles.About__NameCircle}>
            <div className={styles.Circle}>
              <img src={MyProfile} alt="Photo" />
            </div>
          </section>
          <section className={styles.About__MyToolKit}>
            <section className={styles.About__MytoolKitHeading}>
              <h3>My ToolKit</h3>
              <p>The tools and technologies I use to bring ideas to life.</p>
            </section>
            <section className={styles.About__MytoolKitIcons}>
              <i
                className="fab fa-html5"
                style={{ color: "#f35034", fontSize: "42px" }}
              ></i>
              <i
                class="fa-brands fa-css3"
                style={{ color: "#f35034", fontSize: "42px" }}
              ></i>
              <i
                class="fa-brands fa-react fa-lg"
                style={{ color: "#f35034", fontSize: "42px" }}
              ></i>
              <i
                class="fa-brands fa-js"
                style={{ color: "#f35034", fontSize: "42px" }}
              ></i>
              <i
                class="fa-brands fa-node"
                style={{ color: "#f35034", fontSize: "42px" }}
              ></i>
              <i
                class="fa-brands fa-github"
                style={{ color: "#f35034", fontSize: "42px" }}
              ></i>
            </section>
          </section>
        </section>
      </section>
      {/* Skill Tiles Container */}
      {/* <section className={styles.SkillsContainer}>
        <section className={styles.Skills}>
          <section className={styles.Skills__Heading}>My Skills</section>
          <section className={styles.Skills__SkillsTiles}>
            <section className={styles.Skills__Tiles}>JavaScript</section>
            <section className={styles.Skills__Tiles}>HTML</section>
            <section className={styles.Skills__Tiles}>CSS</section>
            <section className={styles.Skills__Tiles}>MongoDB</section>
            <section className={styles.Skills__Tiles}>ReactJS</section>
            <section className={styles.Skills__Tiles}>NodeJS</section>
            <section className={styles.Skills__Tiles}>Express</section>
            <section className={styles.Skills__Tiles}>Oops</section>
            <section className={styles.Skills__Tiles}>MySQL</section>
            <section className={styles.Skills__Tiles}>Bootstrap</section>
            <section className={styles.Skills__Tiles}>Git</section>
            <section className={styles.Skills__Tiles}>jQuery</section>
          </section>
        </section>
      </section> */}

      <section className={styles.ReachOut}>
        <section className={styles.ReachOut__Heading}>
          <h4>Have a project for me?</h4>
          <p>
            I'm always excited to discuss new projects and design challenges.
            Let's create something amazing together.
          </p>
        </section>
        <section className={styles.ReachOut__GetInTouchBtn}>
          <button>Send Message</button>
        </section>
      </section>
    </>
  );
};

export default About;
