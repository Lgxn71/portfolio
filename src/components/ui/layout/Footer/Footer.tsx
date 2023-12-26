import Cta from "./CTA/Cta";
import styles from "./Footer.module.css";
const Footer = () => (
  <footer>
    <div className={styles.Cta}>
      <Cta />
    </div>

    <div className={styles.footer}>
      <div>
        <h3 className="logo">Ali</h3>
        <p>Building blocks since 2022</p>
        <p className="colorGray300">© 2023</p>
      </div>
      <div className={styles.links}>
        <a href="">Github</a>
        <a href="">Linkedin</a>
      </div>
    </div>
  </footer>
);

export default Footer;
