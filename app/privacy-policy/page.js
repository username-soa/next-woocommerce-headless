import { Prose } from "@/components/sections";
import styles from "./PrivacyPolicy.module.scss";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <Prose title="Privacy Policy" content="Soon..." />
    </div>
  );
};

export default PrivacyPolicy;
