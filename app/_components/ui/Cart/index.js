"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Cart.module.scss";
import { CartItem } from "@/components/cards";
import useClickOutside from "@/hooks/useClickOutside";
import { products } from "../../../../utils/data";

const Cart = ({ handleClose }) => {
  const cartRef = useRef(null);
  useClickOutside(cartRef, () => handleClose());
  const variants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };
  return (
    <motion.aside
      exit="exit"
      ref={cartRef}
      animate="open"
      initial="closed"
      variants={variants}
      className={styles.container}
    >
      <div className={styles.title}>
        <h2 className={styles["cart-title"]}>YOUR BAG</h2>
        <svg
          onClick={handleClose}
          className={styles["cart-closing-btn"]}
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
      </div>
      <div className={styles.content}>
        {products.length > 0 ? (
          products.map((item, index) => {
            return (
              <CartItem
                node={{}}
                key={`product-${index}`}
                // handleRemove={removeItem}
              />
            );
          })
        ) : (
          <div className={styles.empty}>
            <p>CART IS EMPTY</p>
          </div>
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
      {/* {cart?.estimatedCost?.subtotalAmount?.amount > 0 ? (
        <div className={styles.total}>
          <div className={styles["cart-product-subtotal"]}>
            <p>SUBTOTAL</p>
            <p>
              {new Intl.NumberFormat("en-EN", {
                style: "currency",
                currency: cart?.estimatedCost?.subtotalAmount?.currencyCode
                  ? `${cart?.estimatedCost?.subtotalAmount?.currencyCode}`
                  : "EUR",
              }).format(cart?.estimatedCost?.subtotalAmount?.amount)}
            </p>
          </div>
          <button
            onClick={() => window.open(cart?.checkoutUrl)}
            className={styles["cart-checkout-btn"]}
          >
            CHECKOUT
          </button>
        </div>
      ) : null} */}
    </motion.aside>
  );
};

export default Cart;
