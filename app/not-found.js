import { Button } from "@/components/ui";
import styles from "@/styles/not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <div className={styles.error_actions}>
        <Button href={"/"} intent="secondary" title="Go back home" />
      </div>
    </div>
  );
}
