import ProjectCard from "@/components/ui/Cards/ProjectCard";

import styles from "./ProjectsMain.module.css";

const ProjectsMain = () => (
  <div>
    <p className={`colorBlack800 ${styles.title}`}>projects</p>

    <div className={styles.projectContainer}>
      <ProjectCard
        projectTitle="Soundbase"
        iconName="SoundbaseLogo"
        projectDescription="I am a frontend developer based in Seoul, South Korea, currently pursuing my bachelor's degree in Computer Science at Sejong University.s"
        githubLink="https://github.com/Lgxn71/e-commerce-soundbase"
        lifeDemoLink="https://e-commerce-soundbase.vercel.app/"
      />

      <ProjectCard
        projectTitle="Arta Medicus"
        iconName="ArtamedicusLogo"
        projectDescription="I am a frontend developer based in Seoul, South Korea, currently pursuing my bachelor's degree in Computer Science at Sejong University."
        githubLink="https://github.com/Lgxn71/Altamedicus"
        lifeDemoLink="https://www.artamedicus.com/"
      />
    </div>
  </div>
);
export default ProjectsMain;
