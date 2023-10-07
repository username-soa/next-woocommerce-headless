"use client";
import styles from "./Prose.module.scss";

const Prose = ({ title, content }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{title}</h1>
      <div className={styles.content}>{content}</div>
      <button
        type="button"
        title="back to top"
        className={styles.back_to_top}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        back to top
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8 5"
          class="back-to-top__svg"
        >
          <path d="M4 5 0 0l4 2.5L8 0 4 5Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Prose;
