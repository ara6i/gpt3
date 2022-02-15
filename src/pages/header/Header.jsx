import React from "react";
import styles from "./header.module.css";
import ai from "../../assest/images/Illustration.png";
import people from "../../assest/images/Group 81.png"
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>
            Let&apos;s Build Something <br /> amazing with GPT-3 <br /> OpenAI
          </h1>
        </div>
        <div>
          <p className={styles.description}>
            Yet bed any for travelling assistance indulgence unpleasing. <br />{" "}
            Not thoughts all exercise blessing. Indulgence way <br /> everything
            joy alteration boisterous the attachment. Party <br /> we years to
            order allow asked of
          </p>
        </div>
        <div className={styles.email}>
          <div className={styles.inpt}>
            <input className={styles.input} type="text" placeholder="Your Email Adress" />
          </div>
          <div className={styles.btn}>
            <button className={styles.button}>Get Started</button>
          </div>
        </div>
        <div className={styles.people}>
          <img src={people} alt="people" />
          <p className={styles.p}>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className={styles.bg}>
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
