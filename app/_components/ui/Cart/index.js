"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Cart.module.scss";
import { CartItem } from "@/components/cards";
import { products } from "../../../../utils/data";
import useClickOutside from "@/hooks/useClickOutside";

const Cart = ({ handleClose }) => {
  const backgroundAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
    exit: { opacity: 0, transition: { delay: 0.1, type: "Inertia" } },
  };
  const checkoutAnimation = {
    hidden: { y: "15px", opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        ease: [0, 1.5, 1, 1.5],
        delay: 0.4,
      },
    },
  };
  const variants = {
    show: {
      x: 0,
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
      x: "100%",
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
  const cartRef = useRef(null);
  const windowWidth = useRef(window.innerWidth);
  useClickOutside(cartRef, () =>
    windowWidth.current >= 768 ? handleClose() : null
  );

  return (
    <motion.div
      exit="exit"
      animate="show"
      initial="hidden"
      className={styles.popup_container}
      variants={backgroundAnimation}
    >
      <motion.aside
        exit="exit"
        ref={cartRef}
        animate="show"
        initial="hidden"
        variants={variants}
        className={styles.container}
      >
        <motion.div variants={childAnimation} className={styles.title}>
          <h2 className={styles["cart-title"]}>YOUR BAG</h2>
          <button
            type="button"
            title="close bag"
            onClick={handleClose}
            className={styles["cart-closing-btn"]}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L11 11M11 11L21 21M11 11L1 21M11 11L21 1"
                stroke="currentColor"
              />
            </svg>
          </button>
        </motion.div>
        <div className={styles.content}>
          {products.length > 0 ? (
            products.map((item, index) => {
              return (
                <CartItem
                  slug={item.slug}
                  src={item.image}
                  title={item.name}
                  price={item.price}
                  key={`product-${index}`}
                  variants={childAnimation}
                  // handleRemove={removeItem}
                />
              );
            })
          ) : (
            <motion.div variants={childAnimation} className={styles.empty}>
              <p>CART IS EMPTY</p>
            </motion.div>
          )}
          {/* {cart?.lines?.length > 0 ? (
          cart?.lines?.map(({ node }, index) => (
            <CartProduct
              node={node}
              key={`product-${index}`}
              handleRemove={removeItem}
            />
          ))
        ) : (
          <div className={styles.empty}>
            <p>CART IS EMPTY</p>
          </div>
        )} */}
        </div>
        <motion.div variants={checkoutAnimation} className={styles.total}>
          <div className={styles["cart-product-subtotal"]}>
            <p>subtotal</p>
            <p>
              {/* {new Intl.NumberFormat("en-EN", {
                style: "currency",
                currency: cart?.estimatedCost?.subtotalAmount?.currencyCode
                  ? `${cart?.estimatedCost?.subtotalAmount?.currencyCode}`
                  : "EUR",
              }).format(cart?.estimatedCost?.subtotalAmount?.amount)} */}
            </p>
          </div>
          <Link
            href={"/"}
            // href={cart?.checkoutUrl}
            className={styles["cart-checkout-btn"]}
          >
            Proceed to Checkout
          </Link>
        </motion.div>
        {/* {cart?.estimatedCost?.subtotalAmount?.amount > 0 ? (
        checkout stuff...
        </div>
      ) : null} */}
      </motion.aside>
    </motion.div>
  );
};

export default Cart;
