"use client";
import { Button } from "@/components/ui";
import styles from "@/styles/error.module.scss";

const Error = ({ error, reset }) => {
  return (
    <div className={styles.container}>
      <h2>{error.message}</h2>
      <div className={styles.errorActions}>
        <button onClick={() => reset()}>Try again</button>
        <Button href={"/"} intent="secondary" title="Go back home" />
      </div>
    </div>
  );
};

export default Error;
