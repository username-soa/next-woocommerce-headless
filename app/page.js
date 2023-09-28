"use client";
import { Hero } from "@/components/cards";
import styles from "@/styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.hero}>
      <Hero />
    </div>
  );
}
