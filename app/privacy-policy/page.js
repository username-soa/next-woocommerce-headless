import { Prose } from "@/components/sections";
import styles from "./PrivacyPolicy.module.scss";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy page.",
};

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <Prose title="Privacy Policy" content="Soon..." />
    </div>
  );
};

export default PrivacyPolicy;
