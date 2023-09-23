"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./CartItem.module.scss";

const CartItem = ({
  src,
  alt,
  slug,
  price,
  title,
  variants,
  currencyCode = "USD",
}) => {
  // return (
  //   <div className={styles.container}>
  //     <Image
  //       src={node.merchandise.product.featuredImage.url}
  //       width={100}
  //       height={100}
  //       alt={node.merchandise.product.featuredImage.altText || "product-image"}
  //     />
  //     <div className={styles["cart-product-info"]}>
  //       <p className={styles["cart-product-title"]}>
  //         {node.merchandise.product.title}
  //       </p>
  //       <p className={styles["cart-product-price"]}>
  //         Price:
  //         <span>
  //           {new Intl.NumberFormat("en-EN", {
  //             styles: "currency",
  //             currency: `${node.estimatedCost?.subtotalAmount?.currencyCode}`,
  //           }).format(node?.estimatedCost?.subtotalAmount.amount)}
  //         </span>
  //       </p>
  //       <p className={styles["cart-product-size"]}>
  //         Size: &nbsp;
  //         <span>
  //           {changeSize(
  //             node?.merchandise?.title === "Default Title"
  //               ? "ONE SIZE"
  //               : node?.merchandise?.title
  //           )}
  //         </span>
  //       </p>
  //       <div className={styles["cart-product-update"]}>
  //         <div className={styles["cart-update"]}>
  //           <button
  //             disabled={loading}
  //             onClick={() => updateProduct(cart.id, node.id, "minus")}
  //             type="button"
  //             title="reduce quantity"
  //             className={styles["cart-update-minus-btn"]}
  //           >
  //             -
  //           </button>
  //           <span>{node.quantity}</span>
  //           <button
  //             type="button"
  //             title="increase quantity"
  //             disabled={loading}
  //             onClick={() => updateProduct(cart.id, node.id, "plus")}
  //             className={styles["cart-update-plus-btn"]}
  //           >
  //             +
  //           </button>
  //         </div>
  //         <button
  //           disabled={loading}
  //           onClick={async () => {
  //             setLoading(true);
  //             const { lines, estimatedCost, totalQuantity } =
  //               await handleRemove(cart.id, node.id);
  //             setCart({ ...cart, lines, estimatedCost, totalQuantity });
  //             setLoading(false);
  //           }}
  //           className={styles["cart-remove"]}
  //         >
  //           Remove
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <motion.div variants={variants} className={styles.container}>
      <Link href={`/product/${slug}`}>
        <div className={styles.cart_product_image}>
          <Image fill src={src} alt={alt || "product-image"} />
        </div>
      </Link>
      <div className={styles.cart_product_info}>
        <div className={styles.cart_product_top}>
          <Link href={`/product/${slug}`}>
            <p className={styles["cart-product-title"]}>{title}</p>
          </Link>
          <p
            // suppressHydrationWarning={true}
            className={styles["cart-product-price"]}
          >
            {`${new Intl.NumberFormat(undefined, {
              style: "currency",
              currency: currencyCode,
              currencyDisplay: "narrowSymbol",
            }).format(parseFloat(price))}`}
          </p>
        </div>

        <div className={styles.cart_product_update}>
          <div className={styles["cart-update"]}>
            <button
              // disabled={loading}
              // onClick={() => updateProduct(cart.id, node.id, "minus")}
              type="button"
              title="reduce item quantity"
              className={styles["update-btn"]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12h-15"
                ></path>
              </svg>
            </button>
            <span>{4}</span>
            <button
              type="button"
              title="increase item quantity"
              // disabled={loading}
              // onClick={() => updateProduct(cart.id, node.id, "plus")}
              className={styles["update-btn"]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                ></path>
              </svg>
            </button>
          </div>
          <button
            // disabled={loading}
            // onClick={async () => {
            //   setLoading(true);
            //   const { lines, estimatedCost, totalQuantity } =
            //     await handleRemove(cart.id, node.id);
            //   setCart({ ...cart, lines, estimatedCost, totalQuantity });
            //   setLoading(false);
            // }}
            className={styles["cart-remove"]}
          >
            Remove
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
