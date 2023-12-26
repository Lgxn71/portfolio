import { ReactNode } from "react";
import styles from "./ProjectIconContainer.module.css";

const ProjectIconContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInside}> {children}</div>
    </div>
  );
};
export default ProjectIconContainer;
