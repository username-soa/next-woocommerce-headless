"use client";
import { cx } from "@/utils/functions";
import styles from "./Accordion.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ i, expand, setExpand, question, answer }) => {
  const isOpen = i === expand;
  return (
    <>
      <button
        type="button"
        className={styles.accordion_btn}
        onClick={() => setExpand(isOpen ? false : i)}
      >
        {question}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8 5"
          class={cx(styles.accordion_svg, { [styles.rotate_svg]: isOpen })}
        >
          <path d="M4 5 0 0l4 2.5L8 0 4 5Z"></path>
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: "auto",
                transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] },
              },
              collapsed: {
                opacity: 0,
                height: 0,
                transition: { duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] },
              },
            }}
          >
            <motion.div
              className={styles.rich_text}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
