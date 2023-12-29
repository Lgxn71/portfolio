import { ReactNode } from "react";

import Icon, { IconName } from "../Icons/Icon";
import Link from "../Link/Link";

import styles from "./ProjectCard.module.css";

const ProjectCardd = ({ children }: { children: ReactNode }) => (
  <div className={styles.projectCardContainer}>{children}</div>
);
ProjectCardd.Icon = function x({ iconName }: { iconName: IconName }) {
  return (
    <div className={styles.containerIcon}>
      <div className={styles.borderInside}>
        <Icon name={iconName} />
      </div>
    </div>
  );
};

ProjectCardd.Title = function x({ children }: { children: ReactNode }) {
  return <h2 className={styles.title}>{children}</h2>;
};
ProjectCardd.Description = function x({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
};

ProjectCardd.Link = function x({
  lifeDemoLink,
  githubLink,
}: {
  lifeDemoLink: string;
  githubLink: string;
}) {
  return (
    <div className={styles.links}>
      <Link isTarget href={lifeDemoLink}>
        Live Demo
      </Link>
      <Link isTarget href={githubLink}>
        Github
      </Link>
    </div>
  );
};

export default ProjectCardd;
