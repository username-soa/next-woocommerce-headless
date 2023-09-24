import React from "react";
import Link from "next/link";
import Spinner from "../Spinner";
import { cx } from "@/utils/functions";
import styles from "./ButtonOrLink.module.scss";
const Button = ({
  href,
  title,
  loading,
  disabled,
  handleClick,
  large = false,
  border = false,
  type = "button",
  intent = "default",
}) => {
  if (href)
    return (
      <Link
        href={href}
        className={cx(
          styles.link_btn,
          {
            [styles.large]: large,
          },
          {
            [styles.bordered]: border,
          },
          {
            [styles.default_btn]: intent === "default",
          },
          {
            [styles.inverted_btn]: intent === "inverted",
          },
          {
            [styles.secondary]: intent === "secondary",
          }
        )}
      >
        {title}
      </Link>
    );
  return (
    <button
      type={type}
      title={title}
      disabled={disabled}
      onClick={handleClick}
      className={cx(
        styles.container,
        {
          [styles.large]: large,
        },
        {
          [styles.bordered]: border,
        },
        {
          [styles.default_btn]: intent === "default",
        },
        {
          [styles.inverted_btn]: intent === "inverted",
        },
        {
          [styles.delete_btn]: intent === "delete",
        },
        {
          [styles.notice_btn]: intent === "notice",
        },
        {
          [styles.add_btn]: intent === "add",
        },
        {
          [styles.secondary]: intent === "secondary",
        }
      )}
    >
      {loading ? <Spinner /> : title}
    </button>
  );
};

export default Button;
