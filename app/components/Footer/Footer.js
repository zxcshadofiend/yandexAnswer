import styles from '/app/styles/Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="./index.html" className={styles.footer__logo}>
        <span className={styles.footer__logo_name}>pindie</span
        ><span className={styles.footer__logo_copy}>, XXI век</span>
      </a>
      <ul className={styles.social_list}>
        <li className={styles.social_list__item}>
          <a href="" className={styles.button && social_list__link}>YT</a>
        </li>
        <li className={styles.social_list__item}>
          <a href="" className={styles.button && social_list__link}>ВК</a>
        </li>
        <li className={styles.social_list__item}>
          <a href="" className={styles.button && social_list__link}>TG</a>
        </li>
      </ul>
    </footer>
    );
};
export default Footer;