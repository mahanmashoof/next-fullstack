import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.desc}>Turning your idea into reality</p>
        <Button text="See our work" url="/portfolio" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="main image" className={styles.img} />
      </div>
    </div>
  );
}
