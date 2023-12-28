import { ReactNode } from "react";

import Icon, { IconName } from "../Icons/Icon";

import styles from "./Card.module.css";

const ProjectCardd = ({ children }: { children: ReactNode }) => {
  return <div className={styles.projectCardContainer}>{children}</div>;
};

ProjectCardd.Icon = function name({ name }: { name: IconName }) {
  return (
    <div className={styles.containerIcon}>
      <div className={styles.borderInside}>
        <Icon name={name}></Icon>
      </div>
    </div>
  );
};

export default ProjectCardd;
