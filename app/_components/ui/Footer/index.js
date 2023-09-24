import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <ul>
        <li>
          <Link href={`/shipping`}>DELIVERY & RETURN</Link>
        </li>
        <li>
          <Link href={`/payement`}>PAYMENT METHOD</Link>
        </li>
        <li>
          <Link href={`/contact`}>contact</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link target={"_blank"} href="https://www.facebook.com/">
            facebook
          </Link>
        </li>
        <li>
          <Link target={"_blank"} href="https://www.instagram.com/">
            instagram
          </Link>
        </li>
      </ul>
      <p>©{new Date().getFullYear()} VaseStylé</p>
    </footer>
  );
};

export default Footer;
