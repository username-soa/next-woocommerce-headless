"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./SideMenu.module.scss";

const SideMenu = ({ handleClose, handleSearch, handleCart }) => {
  const backgroundAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        ease: [0, 1.5, 1, 1.5],
        stiffness: 300,
        damping: 30,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.3, type: "Inertia" } },
  };
  const childAnimation = {
    hidden: {
      y: "15px",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0, 1.5, 1, 1.5],
        type: "spring",
        duration: 1.25,
      },
    },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      exit="exit"
      animate="show"
      initial="hidden"
      className={styles.container}
      variants={backgroundAnimation}
    >
      <div className={styles.top}>
        <Link href={"/"}>VaseStylé</Link>
        <button onClick={handleClose} className={styles.close_btn}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L11 11M11 11L21 21M11 11L1 21M11 11L21 1"
              stroke="currentColor"
            />
          </svg>
        </button>
      </div>
      <div className={styles.content}>
        <ul className={styles.header_ul}>
          <motion.li variants={childAnimation}>
            <Link href={"/brand"} className={styles.link_hover}>
              Brand
            </Link>
          </motion.li>
          <motion.li variants={childAnimation}>
            <Link href={"/collections"} className={styles.link_hover}>
              Collections
            </Link>
          </motion.li>
          <motion.li variants={childAnimation}>
            <Link href={"/best-selling"} className={styles.link_hover}>
              Best Selling
            </Link>
          </motion.li>
          <motion.li variants={childAnimation}>
            <button
              className={styles.link_hover}
              type="button"
              title="search"
              onClick={handleSearch}
            >
              Search
            </button>
          </motion.li>
          <motion.li variants={childAnimation}>
            <button
              className={styles.link_hover}
              type="button"
              title="cart"
              onClick={handleCart}
            >
              bag [0]
            </button>
          </motion.li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <ul>
          <motion.li variants={childAnimation}>
            <Link href={`/contact`}>contact</Link>
          </motion.li>
          <motion.li variants={childAnimation}>
            <Link href={`/shipping`}>SHIPPING & RETURNS</Link>
          </motion.li>
          <ul className={styles.flex}>
            <motion.li variants={childAnimation}>
              <Link target={"_blank"} href="https://www.facebook.com/">
                facebook
              </Link>
            </motion.li>
            <motion.li variants={childAnimation}>
              <Link target={"_blank"} href="https://www.instagram.com/">
                instagram
              </Link>
            </motion.li>
          </ul>
        </ul>
        <motion.p variants={childAnimation}>
          ©{new Date().getFullYear()} VaseStylé
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SideMenu;
