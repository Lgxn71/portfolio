import Cta from "./CTA/Cta";
import styles from "./Footer.module.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className={styles.Cta}>
        <Cta />
      </div>

      <div className={styles.footer}>
        <div>
          <h3 className="logo">Ali</h3>
          <p>Building blocks since 2022</p>
          <p className="colorGray300">© {currentYear}</p>
        </div>
        <div className={styles.links}>
          <a href="https://github.com/Lgxn71">Github</a>
          <a href="https://www.linkedin.com/in/lgxn71/">Linkedin</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
