import React from "react";
import Features from "../features/Features";
import styles from "./whatgpt3.module.css";
const WhatGPT3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Features
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          flex="flex"
          width
        />
      </div>
      <div className={styles.title}>
        <h1>
          The possibilities are beyond <br /> your imagination
        </h1>
      </div>
      <div className={styles.desc}>
        <Features
          title="Chatbots"
          text="We so opinion friends me message as  delight. Whole front do of plate heard oh ought."
         
        />
        <Features
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b "
         
        />
        <Features
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
         
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
