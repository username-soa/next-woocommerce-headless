"use client";
import styles from "./ProductDescription.module.scss";
import { Button } from "@/components/ui";

const ProductDescription = ({
  title,
  price,
  description,
  currencyCode = "USD",
  availableForSale = true,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>{title}</h1>
        <div className={styles.pricing_wrp}>
          <p suppressHydrationWarning={true}>
            {`${new Intl.NumberFormat(undefined, {
              style: "currency",
              currency: currencyCode,
              currencyDisplay: "narrowSymbol",
            }).format(parseFloat(price))}`}
            <span> {`${currencyCode}`}</span>
          </p>
        </div>
      </div>

      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Button
        title={availableForSale ? "Add To Cart" : "Out Of Stock"}
        // intent="inverted"
      />
    </div>
  );
};

export default ProductDescription;
