import { FC } from "react";

import ProjectIconContainer from "../Icons/ProjectIconContainer";
import Icon, { IconName } from "../Icons/Icon";
import Link from "../Link/Link";

import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  iconName: IconName;
  projectTitle: string;
  projectDescription: string;
  lifeDemoLink: string;
  githubLink: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  iconName,
  projectTitle,
  projectDescription,
  lifeDemoLink,
  githubLink,
}) => (
  <div className={styles.projectCardContainer}>
    <ProjectIconContainer>
      <Icon name={iconName} />
    </ProjectIconContainer>
    <div>
      <h1 className={styles.title}>{projectTitle}</h1>
      <p>{projectDescription}</p>
    </div>

    <div className={styles.links}>
      <Link isTarget href={lifeDemoLink}>
        Live Demo
      </Link>
      <Link isTarget href={githubLink}>
        Github
      </Link>
    </div>
  </div>
);

export default ProjectCard;
