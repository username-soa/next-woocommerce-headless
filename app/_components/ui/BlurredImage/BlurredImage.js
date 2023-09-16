"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cx } from "@/utils/functions";
import styles from "./BlurredImage.module.scss";

const BlurredImage = ({
  alt,
  href,
  src,
  radius,
  width = "100%",
  height = "100%",
  handleClick,
  clickable = false,
  classNames,
  ...extra
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div
      className={cx(
        styles.container,
        {
          [classNames]: classNames,
        },
        {
          [styles.image_radius]: radius,
        }
      )}
      style={{
        ...extra,
        width: width.toString().includes("%") ? width : `${width}px`,
        height: height.toString().includes("%") ? height : `${height}px`,
      }}
    >
      {href ? (
        <Link href={href} className={styles.blurred_image_link}>
          <Image
            fill
            alt={alt ? alt : "image"}
            src={src}
            className={cx(
              styles.blurred_image,
              {
                [styles.image_loading]: isLoading,
              },
              {
                [styles.image_loaded]: !isLoading,
              }
            )}
            onClick={() => {
              clickable ? handleClick() : null;
            }}
            onLoadingComplete={() => {
              setIsLoading(false);
            }}
          />
        </Link>
      ) : (
        <Image
          fill
          alt={alt ? alt : "image"}
          src={src}
          className={cx(
            styles.blurred_image,
            {
              [styles.image_loading]: isLoading,
            },
            {
              [styles.image_loaded]: !isLoading,
            }
          )}
          onClick={() => {
            clickable ? handleClick() : null;
          }}
          onLoadingComplete={() => {
            setIsLoading(false);
          }}
        />
      )}
    </div>
  );
};

export default BlurredImage;
