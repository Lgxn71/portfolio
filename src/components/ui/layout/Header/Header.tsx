import Links from "./Links";

import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.links}>
        <li className="logo">Ali</li>
        <Links />
      </ul>
    </nav>
  </header>
);

export default Header;
