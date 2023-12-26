import Icon from "../../../../ui/Icons/Icon";
import styles from "./Notification.module.css";

const Notification = () => (
  <div className={styles.background}>
    <Icon className={styles.icon} name="PulseNotification" />
    <p className="colorGreen100"> Availiable for work </p>
  </div>
);

export default Notification;
