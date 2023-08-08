import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>copyright 2023</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          className={styles.icon}
          alt="fb"
          height={15}
          width={15}
        />
        <Image
          src="/2.png"
          className={styles.icon}
          alt="insta"
          height={15}
          width={15}
        />
        <Image
          src="/3.png"
          className={styles.icon}
          alt="x"
          height={15}
          width={15}
        />
        <Image
          src="/4.png"
          className={styles.icon}
          alt="youtube"
          height={15}
          width={15}
        />
      </div>
    </div>
  );
};

export default Footer;
