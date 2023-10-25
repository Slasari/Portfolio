import React from 'react'

import styles from './Contact.module.css'

import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt='Email Icon'></img>
                <a href='mailto:ariel_salcito@live.com'>ariel_salcito@live.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt='Linkedin Icon'></img>
                <a href='https://www.linkedin.com/in/ariel-salcito-290088249/'>linkedin.com/ariel-salcito</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt='Github Icon'></img>
                <a href='https://github.com/Xalivre'>github.com/Xalivre</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact