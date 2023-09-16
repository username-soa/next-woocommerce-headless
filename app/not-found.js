import Link from "next/link";
import styles from "@/styles/not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <div className={styles.error_actions}>
        <Link href={"/"}>
          <button>Go back home</button>
        </Link>
      </div>
    </div>
  );
}
