import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Title</h1>
          <h2 className={styles.imgDesc}>Description</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Heading 1</h1>
          <p className={styles.descr}>Text 1</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Heading 2</h1>
          <p className={styles.descr}>Text 2</p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
