"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import useBodyLockScroll from "@/hooks/useBodyLockScroll";
import useScrollIndicator from "@/hooks/useScrollIndicator";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
import { Cart, Portal, Search } from "@/components/ui";

// TODO fix scroll based animations
const Header = () => {
  const y = useMotionValue(0);
  const { scrollYProgress, scrollY } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest * 10);
    y.set(latest * 10);
  });
  const opacity = useTransform(
    y,
    // Map x from these values:
    [0, 30],
    // Into these values:
    [0, 1]
  );
  console.log("opacity is: ", opacity);
  const [popovers, setPopovers] = useState({ cart: false, search: false });
  useEffect(() => {
    console.log("popovers state changed : ", popovers);
  }, [popovers]);
  // useBodyLockScroll(popovers.cart || popovers.search);
  // const { scrollY } = useScroll();
  // const x = useMotionValue(scrollY);
  // const opacity = useTransform(
  //   x,
  //   // Map x from these values:
  //   [0, 600],
  //   // Into these values:
  //   [0, 1]
  // );

  // console.log(opacity);
  // useMotionValueEvent(scrollY, "change", (latest) => {
  // console.log("Page scroll: ", latest);
  // });
  // const { padding, boxShadow } = useScrollIndicator();
  return (
    <header className={styles.container}>
      <motion.nav
        animate={{
          opacity: y,
          // borderRadius: y * 10,
          // paddingTop: `${y}px`,
          // paddingBottom: `${y / 2}px`,
          // borderBottom: `2px solid rgb(0 0 0 / ${y})`,
          // boxShadow: `rgb(0 0 0 / ${y}) 0px 0px 20px 6px`,
        }}
      >
        <Link href={"/collections"}>Collections</Link>
        <Link href="/">Logo</Link>
        <ul>
          <li>
            <button
              type="button"
              title="search"
              onClick={() =>
                setPopovers((prevState) => {
                  return {
                    ...prevState,
                    search: !prevState.search,
                  };
                })
              }
            >
              Search
            </button>
          </li>
          <li>
            <button
              type="button"
              title="cart"
              onClick={() =>
                setPopovers((prevState) => {
                  return {
                    ...prevState,
                    cart: !prevState.cart,
                  };
                })
              }
            >
              cart
            </button>
          </li>
        </ul>
      </motion.nav>
      <Portal>
        <AnimatePresence mode="wait">
          {popovers.search && (
            <Search
              handleClose={() =>
                setPopovers((prevState) => {
                  return {
                    ...prevState,
                    search: !prevState.search,
                  };
                })
              }
            />
          )}
        </AnimatePresence>
      </Portal>
      <Portal>
        <AnimatePresence mode="wait">
          {popovers.cart && (
            <Cart
              handleClose={() =>
                setPopovers((prevState) => {
                  return {
                    ...prevState,
                    cart: !prevState.cart,
                  };
                })
              }
            />
          )}
        </AnimatePresence>
      </Portal>
    </header>
  );
};

export default Header;
