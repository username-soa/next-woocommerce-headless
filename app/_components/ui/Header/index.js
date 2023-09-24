"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import {
  motion,
  useSpring,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Cart, Portal, Search, SideMenu } from "@/components/ui";

const Header = () => {
  const { scrollY } = useScroll();
  const padding = useTransform(scrollY, [0, 100], [0, 15]);
  const radius = useTransform(scrollY, [0, 100], [0, 15]);
  const borderWidth = useTransform(scrollY, [0, 100], [0, 1]);
  const springRadius = useSpring(radius);
  const springPadding = useSpring(padding);
  const [popovers, setPopovers] = useState({
    cart: false,
    search: false,
    menu: false,
  });

  useEffect(() => {
    console.log("popovers sate changed : ", popovers);
  }, [popovers]);

  return (
    <motion.header className={styles.container}>
      <motion.nav
        style={{
          borderWidth: borderWidth,
          borderRadius: springRadius,
        }}
      >
        <motion.div
          style={{
            borderWidth: borderWidth,
            borderRadius: springRadius,
            paddingLeft: springPadding,
            paddingRight: springPadding,
          }}
          className={styles.nav_content}
        >
          <ul className={styles.header_ul}>
            <li>
              <Link href={"/best-selling"} className={styles.link_hover}>
                Best Selling
              </Link>
            </li>
            <li>
              <Link href={"/brand"} className={styles.link_hover}>
                Brand
              </Link>
            </li>
          </ul>
          <Link href={"/"}>VaseStylé</Link>
          <ul className={styles.header_ul}>
            <li>
              <button
                className={styles.link_hover}
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
                className={styles.link_hover}
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
                bag [0]
              </button>
            </li>
          </ul>
          <button
            type="button"
            title="menu button"
            className={styles.menu_btn_wrp}
            onClick={() =>
              setPopovers((prevState) => {
                return {
                  ...prevState,
                  menu: !prevState.menu,
                };
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </motion.div>
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
      <Portal>
        <AnimatePresence mode="wait">
          {popovers.menu && (
            <SideMenu
              handleClose={() =>
                setPopovers((prevState) => {
                  return {
                    ...prevState,
                    menu: !prevState.menu,
                  };
                })
              }
              handleCart={() =>
                setPopovers((prevState) => {
                  return {
                    ...prevState,
                    menu: !prevState.menu,
                    cart: !prevState.cart,
                  };
                })
              }
              handleSearch={() =>
                setPopovers((prevState) => {
                  return {
                    ...prevState,
                    search: !prevState.search,
                    menu: !prevState.menu,
                  };
                })
              }
            />
          )}
        </AnimatePresence>
      </Portal>
    </motion.header>
  );
};

export default Header;
