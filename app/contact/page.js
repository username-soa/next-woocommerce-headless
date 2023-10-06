import styles from "./Contact.module.scss";
import { ContactSection } from "@/components/sections";

export const metadata = {
  title: "Contact",
  description: "Contact page.",
};

const Contact = () => {
  const data = {
    email: "vasestylé@gmail.com",
    phone: "+212 626734899",
  };

  return (
    <div className={styles.container}>
      <ContactSection email={data.email} phone={data.phone} />
    </div>
  );
};

export default Contact;
