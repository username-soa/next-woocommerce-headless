"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Contact.module.scss";

// export const metadata = {
//   title: "Contact",
//   description: "Contact page.",
// };

const Contact = () => {
  const data = {
    email: "vasestylé@gmail.com",
    phone: "+212 626734899",
  };
  const variants = {
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        ease: [0, 1.5, 1, 1.5],
        stiffness: 300,
        damping: 30,
        delay: 0.15,
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
    exit: {
      opacity: 0,
    },
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
      className={styles.grid}
      variants={variants}
    >
      <div className={styles.content}>
        <motion.h6 variants={childAnimation}>Contact US</motion.h6>
        <motion.h1 variants={childAnimation}>SAY HI!</motion.h1>
        <motion.p variants={childAnimation}>
          We&apos;d love to hear from you! Get in touch and our team will be
          with you as soon as possible.
        </motion.p>
      </div>
      <div className={styles.links_wrp}>
        <motion.div variants={childAnimation}>
          <Link href={"/"} className={styles.custom_link}>
            <div className={styles.link_top}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
              >
                <path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.070312 4.3222656 L 8.8730469 15.521484 C 7.0935305 16.919676 6 19.100391 6 21.400391 L 6 40.5 C 6 41.133333 6.2367979 41.80711 6.7148438 42.285156 C 7.1928895 42.763202 7.8666667 43 8.5 43 L 18.5 43 C 19.133333 43 19.80711 42.763202 20.285156 42.285156 C 20.763202 41.80711 21 41.133333 21 40.5 L 21 30.5 C 21 30.218182 21.218182 30 21.5 30 L 26.5 30 C 26.781818 30 27 30.218182 27 30.5 L 27 40.5 C 27 41.133333 27.236798 41.80711 27.714844 42.285156 C 28.19289 42.763202 28.866667 43 29.5 43 L 39.5 43 C 40.133333 43 40.80711 42.763202 41.285156 42.285156 C 41.763202 41.80711 42 41.133333 42 40.5 L 42 21.400391 C 42 19.155946 41.012069 16.901298 39.087891 15.490234 L 24.929688 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.271484 17.876953 A 1.50015 1.50015 0 0 0 37.3125 17.910156 C 38.388318 18.699095 39 20.044835 39 21.400391 L 39 40 L 30 40 L 30 30.5 C 30 28.581818 28.418182 27 26.5 27 L 21.5 27 C 19.581818 27 18 28.581818 18 30.5 L 18 40 L 9 40 L 9 21.400391 C 9 20.100391 9.7060794 18.680715 10.726562 17.878906 A 1.50015 1.50015 0 0 0 10.728516 17.876953 L 24 7.4101562 z"></path>
              </svg>
              <p>Home</p>
            </div>
            <svg
              className={styles.share_svg}
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 0.5V3H21.2375L0.5 23.7375L2.2625 25.5L23 4.7625V20.5H25.5V0.5H5.5Z"></path>
            </svg>
          </Link>
        </motion.div>
        <motion.div variants={childAnimation}>
          <Link
            variants={childAnimation}
            href={`mailto:${data.email}`}
            className={styles.custom_link}
          >
            <div className={styles.link_top}>
              <svg
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M35 8H5C4.33696 8 3.70107 8.26339 3.23223 8.73223C2.76339 9.20107 2.5 9.83696 2.5 10.5V30.5C2.5 31.163 2.76339 31.7989 3.23223 32.2678C3.70107 32.7366 4.33696 33 5 33H35C35.663 33 36.2989 32.7366 36.7678 32.2678C37.2366 31.7989 37.5 31.163 37.5 30.5V10.5C37.5 9.83696 37.2366 9.20107 36.7678 8.73223C36.2989 8.26339 35.663 8 35 8ZM32.25 10.5L20 18.975L7.75 10.5H32.25ZM5 30.5V11.6375L19.2875 21.525C19.4967 21.6702 19.7453 21.7479 20 21.7479C20.2547 21.7479 20.5033 21.6702 20.7125 21.525L35 11.6375V30.5H5Z"></path>
              </svg>
              <p>{data.email}</p>
            </div>
            <svg
              className={styles.share_svg}
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 0.5V3H21.2375L0.5 23.7375L2.2625 25.5L23 4.7625V20.5H25.5V0.5H5.5Z"></path>
            </svg>
          </Link>
        </motion.div>
        <motion.div variants={childAnimation}>
          <Link
            variants={childAnimation}
            href={`tel:${data.phone}`}
            className={styles.custom_link}
          >
            <div className={styles.link_top}>
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32.5002 36.25H32.2877C7.72519 34.8375 4.23769 14.1125 3.75019 7.7875C3.71091 7.29573 3.76905 6.80103 3.92128 6.33176C4.07351 5.8625 4.31685 5.42788 4.63733 5.05282C4.95782 4.67775 5.34917 4.36961 5.78895 4.14605C6.22873 3.92249 6.7083 3.7879 7.20019 3.75H14.0877C14.5884 3.74952 15.0777 3.89939 15.4922 4.1802C15.9068 4.46102 16.2274 4.85984 16.4127 5.325L18.3127 10C18.4956 10.4544 18.541 10.9526 18.4432 11.4326C18.3455 11.9126 18.1088 12.3533 17.7627 12.7L15.1002 15.3875C15.5161 17.7509 16.6479 19.9296 18.3426 21.6287C20.0372 23.3278 22.2129 24.4654 24.5752 24.8875L27.2877 22.2C27.6396 21.8577 28.0844 21.6266 28.5668 21.5354C29.0492 21.4443 29.5477 21.4972 30.0002 21.6875L34.7127 23.575C35.1708 23.7661 35.5617 24.0893 35.8355 24.5033C36.1094 24.9174 36.2537 25.4036 36.2502 25.9V32.5C36.2502 33.4946 35.8551 34.4484 35.1518 35.1517C34.4486 35.8549 33.4948 36.25 32.5002 36.25ZM7.50019 6.25C7.16867 6.25 6.85072 6.3817 6.6163 6.61612C6.38188 6.85054 6.25019 7.16848 6.25019 7.5V7.6C6.82519 15 10.5127 32.5 32.4252 33.75C32.5894 33.7601 32.754 33.7378 32.9096 33.6842C33.0651 33.6306 33.2086 33.5468 33.3317 33.4376C33.4548 33.3285 33.5551 33.1961 33.6269 33.048C33.6987 32.9 33.7406 32.7393 33.7502 32.575V25.9L29.0377 24.0125L25.4502 27.575L24.8502 27.5C13.9752 26.1375 12.5002 15.2625 12.5002 15.15L12.4252 14.55L15.9752 10.9625L14.1002 6.25H7.50019Z"></path>
              </svg>
              <p>{data.phone}</p>
            </div>
            <svg
              className={styles.share_svg}
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 0.5V3H21.2375L0.5 23.7375L2.2625 25.5L23 4.7625V20.5H25.5V0.5H5.5Z"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
