import ProjectCard from "@/components/ui/Cards/ProjectCard";

import styles from "./ProjectsMain.module.css";

const ProjectsMain = () => (
  <div>
    <p className={`colorBlack800 ${styles.title}`}>projects</p>

    <div className={styles.projectContainer}>
      <ProjectCard
        projectTitle="Soundbase"
        iconName="SoundbaseLogo"
        projectDescription="This pet-project is a Nextjs application. It was built using Nextjs, Recoil for statemanagement, Typescript, StripeAPI to provide payment functionality, and Mongodb as a database"
        githubLink="https://github.com/Lgxn71/e-commerce-soundbase"
        lifeDemoLink="https://e-commerce-soundbase.vercel.app/"
      />

      <ProjectCard
        projectTitle="Arta Medicus"
        iconName="ArtamedicusLogo"
        projectDescription="Landing Page with Integrated Twilio API for plastic surgery clinic "
        githubLink="https://github.com/Lgxn71/Altamedicus"
        lifeDemoLink="https://www.artamedicus.com/"
      />
    </div>
  </div>
);
export default ProjectsMain;
