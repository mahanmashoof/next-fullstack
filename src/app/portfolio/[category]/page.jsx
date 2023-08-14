import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const page = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Descr</p>
          <Button url="#" text="See more" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} alt="" src="/1.png" fill={true} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Descr</p>
          <Button url="#" text="See more" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} alt="" src="/1.png" fill={true} />
        </div>
      </div>
    </div>
  );
};

export default page;
