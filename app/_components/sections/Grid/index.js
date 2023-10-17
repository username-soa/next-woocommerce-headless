import { cx } from "@/utils/functions";
import styles from "./Grid.module.scss";

const Grid = ({ children, classNames }) => {
  return <div className={cx(styles.grid, classNames)}>{children}</div>;
};

export default Grid;
