import styles from "./Container.module.scss";

const index = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default index;
