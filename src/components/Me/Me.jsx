import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Me.module.css'

const Me = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.hello}>Hello</h2>
        <h1 className={styles.im}>I'm <span className={styles.name}>Ariel</span></h1>
        <p className={styles.description}>
          Full-Stack developer with experience using React and NodeJS.
          Reach out if you'd like to learn more!
        </p>
        <a className={styles.contactBtn}  href="mailto:ariel_salcito@live.com">Contact me</a>
      </div>
      <img className={styles.profile} src={getImageUrl('me/profile.png')} alt="Profile Image"></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Me;
