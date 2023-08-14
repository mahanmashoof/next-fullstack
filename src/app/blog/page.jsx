"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testid" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/1.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>descr</p>
        </div>
      </Link>
      <Link href="/blog/testid2" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/2.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>descr</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
