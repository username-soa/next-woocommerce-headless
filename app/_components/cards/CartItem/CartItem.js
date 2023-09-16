"use client";
import Image from "next/image";
import styles from "./CartItem.module.scss";

const CartItem = () => {
  return (
    <div className={styles.container}>
      <Image
        src={node.merchandise.product.featuredImage.url}
        width={100}
        height={100}
        alt={node.merchandise.product.featuredImage.altText || "product-image"}
      />
      <div className={styles["cart-product-info"]}>
        <p className={styles["cart-product-title"]}>
          {node.merchandise.product.title}
        </p>
        <p className={styles["cart-product-price"]}>
          Price:
          <span>
            {new Intl.NumberFormat("en-EN", {
              styles: "currency",
              currency: `${node.estimatedCost?.subtotalAmount?.currencyCode}`,
            }).format(node?.estimatedCost?.subtotalAmount.amount)}
          </span>
        </p>
        <p className={styles["cart-product-size"]}>
          Size: &nbsp;
          <span>
            {changeSize(
              node?.merchandise?.title === "Default Title"
                ? "ONE SIZE"
                : node?.merchandise?.title
            )}
          </span>
        </p>
        <div className={styles["cart-product-update"]}>
          <div className={styles["cart-update"]}>
            <button
              disabled={loading}
              onClick={() => updateProduct(cart.id, node.id, "minus")}
              type="button"
              title="reduce quantity"
              className={styles["cart-update-minus-btn"]}
            >
              -
            </button>
            <span>{node.quantity}</span>
            <button
              type="button"
              title="increase quantity"
              disabled={loading}
              onClick={() => updateProduct(cart.id, node.id, "plus")}
              className={styles["cart-update-plus-btn"]}
            >
              +
            </button>
          </div>
          <button
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              const { lines, estimatedCost, totalQuantity } =
                await handleRemove(cart.id, node.id);
              setCart({ ...cart, lines, estimatedCost, totalQuantity });
              setLoading(false);
            }}
            className={styles["cart-remove"]}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
