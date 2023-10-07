import { Prose } from "@/components/sections";
import styles from "./RefundPolicy.module.scss";

export const metadata = {
  title: "Refund Policy",
  description: "Refund Policy page.",
};

const RefundPolicy = () => {
  return (
    <div className={styles.container}>
      <Prose title="Refund Policy" content="Soon..." />
    </div>
  );
};

export default RefundPolicy;
