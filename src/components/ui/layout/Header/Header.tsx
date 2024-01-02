import Links from "./Links";

import styles from "./Header.module.css";
import Link from "next/link";
const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.links}>
        <Link href="/" className="logo">
          Ali
        </Link>
        <Links />
      </ul>
    </nav>
  </header>
);

export default Header;
