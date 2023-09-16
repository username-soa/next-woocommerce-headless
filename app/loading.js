import styles from "@/styles/loading.module.scss";
import { Spinner } from "@/components/ui";

export default function Loading() {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
}
