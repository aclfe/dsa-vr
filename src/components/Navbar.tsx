import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.linkContainer}>
        <div className={styles.linkBox}>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.linkBox}>
          <Link href="/about">Visualizations</Link>
        </div>
        <div className={styles.linkBox}>
          <Link href="/contact">Why?</Link>
        </div>
      </div>
    </nav>
  );
}