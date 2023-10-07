import Link from "next/link";
import { cx } from "@/utils/functions";
import styles from "./Footer.module.scss";
import Image from "next/image";
import BlurredImage from "../BlurredImage/BlurredImage";

const Footer = () => {
  return (
    // <footer className={styles.container}>
    //   <div className={styles.footer_top}>
    //     <div className={styles.flex}>
    //       <p>©{new Date().getFullYear()} VaseStylé</p>
    //       <ul className={styles.icons_container}>
    //         <li className={cx(styles.social_icon)}>
    //           <Link target={"_blank"} href="https://www.facebook.com/">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               x="0px"
    //               y="0px"
    //               viewBox="0 0 50 50"
    //             >
    //               <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
    //             </svg>
    //           </Link>
    //         </li>
    //         <li className={cx(styles.social_icon, styles.border_left)}>
    //           <Link target={"_blank"} href="https://www.instagram.com/">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               x="0px"
    //               y="0px"
    //               viewBox="0 0 50 50"
    //             >
    //               <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
    //             </svg>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <ul className={styles.links_container}>
    //       <li>
    //         <Link href={`/payement`}>PAYMENT</Link>
    //       </li>
    //       <li>
    //         <Link href={`/contact`}>contact</Link>
    //       </li>
    //       <li>
    //         <Link href={`/shipping`}>DELIVERY & RETURN</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </footer>
    <footer className={styles.container}>
      <div className={styles.grain}>
        <div className={styles.top}>
          <div className={cx(styles.footer_column, styles.footer_column_grow)}>
            <div className={styles.logo}>
              <Link href="/">VaseStylé</Link>
            </div>
          </div>
          <div className={styles.footer_column}>
            <h4 className={styles.footer_h4}>Pages</h4>
            <ul className={styles.row_ul}>
              <li>
                <Link href={"/collections/best-selling"}>Best Selling</Link>
              </li>
              <li>
                <Link href={"/collections/new-arrivals"}>New Arrivals</Link>
              </li>
              <li>
                <Link href={"/collections"}>Shop All</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_column}>
            <h4 className={styles.footer_h4}>Pages</h4>
            <ul className={styles.row_ul}>
              <li>
                <Link href={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link href={"/"}>Accueil</Link>
              </li>
              <li>
                <Link href={"/menu/sorrento"}>Sorrento</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_column}>
            <h4 className={styles.footer_h4}>Pages</h4>
            <ul className={styles.row_ul}>
              <li>
                <Link href={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link href={"/"}>Accueil</Link>
              </li>
              <li>
                <Link href={"/menu/sorrento"}>Sorrento</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>©{new Date().getFullYear()} VaseStylé</p>
          <ul className={styles.footer_ul}>
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
        <div aria-hidden="true" className={styles.background_shape}>
          <div className={styles.underlay_wrp}>
            <BlurredImage alt="footer-underlay" src="/images/shapes.png" />
            {/* <Image fill alt="footer-underlay" src="/images/shapes.png" /> */}
          </div>
          <div className={styles.underlay_wrp}>
            <BlurredImage alt="footer-underlay" src="/images/shapes.png" />
            {/* <Image fill alt="footer-underlay" src="/images/shapes.png" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
