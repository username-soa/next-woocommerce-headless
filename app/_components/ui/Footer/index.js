import Link from "next/link";
import { cx } from "@/utils/functions";
import styles from "./Footer.module.scss";
import Image from "next/image";
import BlurredImage from "../BlurredImage/BlurredImage";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.grain}>
          <div className={styles.top}>
            <div
              className={cx(styles.footer_column, styles.footer_column_grow)}
            >
              <div className={styles.logo}>
                <Link href="/">VaseStylé</Link>
              </div>
              <p>&quot;Elegance In Every Detail.&quot;</p>
            </div>
            <div className={styles.links_container}>
              <div className={styles.footer_column}>
                <h4 className={styles.footer_h4}>Shop</h4>
                <ul className={styles.cell_ul}>
                  <li>
                    <Link href={"/collections"}>Shop All</Link>
                  </li>
                  <li>
                    <Link href={"/collections/best-selling"}>Best Selling</Link>
                  </li>
                  <li>
                    <Link href={"/collections/new-arrivals"}>New Arrivals</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footer_column}>
                <h4 className={styles.footer_h4}>About Us</h4>
                <ul className={styles.cell_ul}>
                  <li>
                    <Link href={"/brand"}>Brand</Link>
                  </li>
                  <li>
                    <Link href={"/blog"}>Blog</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footer_column}>
                <h4 className={styles.footer_h4}>Help</h4>
                <ul className={styles.cell_ul}>
                  <li>
                    <Link href={"/faq"}>FAQs</Link>
                  </li>

                  <li>
                    <Link href={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footer_column}>
                <h4 className={styles.footer_h4}>Socials</h4>
                <ul className={styles.cell_ul}>
                  <li>
                    <Link target={"_blank"} href="https://www.facebook.com/">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link target={"_blank"} href="https://www.instagram.com/">
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <p>©{new Date().getFullYear()} VaseStylé</p>
            <ul className={styles.row_ul}>
              <li>
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/terms-and-conditions"}>Terms Of Service</Link>
              </li>
              <li>
                <Link href={"/refund-policy"}>Refund Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div aria-hidden="true" className={styles.background_shape}>
          <div className={styles.underlay_wrp}>
            <Image fill alt="footer-underlay" src="/images/shapes.png" />
          </div>
          <div className={styles.underlay_wrp}>
            <Image fill alt="footer-underlay" src="/images/shapes.png" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
