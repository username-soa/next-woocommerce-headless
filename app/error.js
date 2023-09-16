"use client";
import Link from "next/link";
import styles from "@/styles/error.module.scss";

const Error = ({ error, reset }) => {
  return (
    <div className={styles.container}>
      <h2>{error.message}</h2>
      <div className={styles.errorActions}>
        <button onClick={() => reset()}>Try again</button>
        <Link href={"/"}>
          <button>Go back home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
