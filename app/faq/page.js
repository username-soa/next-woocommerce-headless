import styles from "./FAQs.module.scss";
import { FAQs } from "@/components/sections";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Frequently Asked Questions page.",
};

const TermsAndConditions = () => {
  return (
    <div className={styles.container}>
      <FAQs />
    </div>
  );
};

export default TermsAndConditions;
