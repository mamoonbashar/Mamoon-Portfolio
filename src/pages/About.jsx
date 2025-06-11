import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <>
      <div className={styles.About}>
        <div className={styles.About__Container}></div>
        <div className={styles.About__SkillNameContainer}>
          <div className={styles.About__NameCircle}></div>
          <div className={styles.About__MyToolKit}>
            <div className={styles.About__MytoolKitHeading}></div>
            <div className={styles.About__MytoolKitIcons}></div>
          </div>
        </div>
      </div>

      <div className={styles.Skills}>
        <div className={styles.Skills__Heading}></div>
        <div className={styles.Skills__SkillsTiles}>
          <div className={styles.Skills__Tiles}></div>
          <div className={styles.Skills__Tiles}></div>
          <div className={styles.Skills__Tiles}></div>
          <div className={styles.Skills__Tiles}></div>
          <div className={styles.Skills__Tiles}></div>
          <div className={styles.Skills__Tiles}></div>
          <div className={styles.Skills__Tiles}></div>
          <div className={styles.Skills__Tiles}></div>
          <div className={styles.Skills__Tiles}></div>
          <div className={styles.Skills__Tiles}></div>
          <div className={styles.Skills__Tiles}></div>
          <div className={styles.Skills__Tiles}></div>
          <div className={styles.Skills__Tiles}></div>
        </div>
      </div>

      <div className={styles.ReachOut}>
        <div className={styles.ReachOut__Heading}></div>
        <div className={styles.ReachOut__GetInTouchBtn}></div>
      </div>
    </>
  );
};

export default About;
