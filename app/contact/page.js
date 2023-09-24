import Link from "next/link";
import styles from "./Contact.module.scss";

const Contact = () => {
  const data = {
    email: "vasestylé@gmail.com",
    phone: "+212 626734899",
  };
  return (
    <div className={styles.container}>
      <Link href={"/"}>VaseStylé</Link>
      <a href={`tel:${data.phone}`}>{data.phone}</a>
      <a href={`mailto:${data.email}`}>{data.email}</a>
    </div>
  );
};

export default Contact;
