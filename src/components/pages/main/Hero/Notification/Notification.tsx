import Icon from "../../../../ui/Icons/Icon";

import styles from "./Notification.module.css";

const Notification = () => (
  <div className={styles.background}>
    <Icon className={styles.icon} name="PulseNotification" />
    <a href="https://www.linkedin.com/in/lgxn71/" className="colorGreen100"> Availiable for work </a>
  </div>
);

export default Notification;
