import React from "react";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css"

import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImgContainer}>
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                  ></img>
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={historyItem.organization}
                ></img>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} | ${historyItem.organization}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>{historyItem.experience.map((experience, id) => {
                    return (
                      <li key={id}>
                        {experience}
                      </li>
                    )
                  })}</ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
