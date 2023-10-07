import { Prose } from "@/components/sections";
import styles from "./TermsAndConditions.module.scss";

export const metadata = {
  title: "Terms And Conditions",
  description: "Terms And Conditions page.",
};

const TermsAndConditions = () => {
  return (
    <div className={styles.container}>
      <Prose title="Terms And Conditions" content="Soon..." />
    </div>
  );
};

export default TermsAndConditions;
