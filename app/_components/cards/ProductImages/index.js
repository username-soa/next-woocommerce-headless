"use client";
import Image from "next/image";
import { ScrollLink } from "@/components/ui";
import styles from "./ProductImages.module.scss";
import { useEffect, useState, useRef } from "react";
import { cx, getMostVisibleDiv } from "@/utils/functions";

const ProductImages = ({ images, alt }) => {
  const scrollTimeout = useRef(null);
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        var items = Array.from(
          document.querySelectorAll(".product-image-container")
        );
        var mostVisibleDiv = getMostVisibleDiv(items);
        setVisible(mostVisibleDiv);
      }, 25);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.container}>
      {images?.map((item, index) => {
        return (
          <div
            key={`product-image-${index}`}
            id={`image-indicator-${index}`}
            className={cx(styles.image_wrp, "product-image-container")}
          >
            <Image fill src={item} alt={alt || "product image"} />
          </div>
        );
      })}
      <div className={styles.image_indicator_container}>
        <div className={styles.image_indicator_grid}>
          {images.map((item, index) => {
            return (
              <ScrollLink
                key={`scroll-link-${index}`}
                href={`#image-indicator-${index}`}
                className={cx(styles.image_indicator, {
                  [styles.active_indicator]: visible === index,
                })}
              >
                <Image fill src={item} alt={alt || "product image"} />
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
