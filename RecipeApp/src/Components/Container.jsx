import styles from "../CSS/Container.module.css";

export default function Container({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
