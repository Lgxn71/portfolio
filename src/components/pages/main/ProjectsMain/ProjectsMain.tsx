import ProjectCard from "@/components/ui/Cards/ProjectCard";
import styles from "./ProjectsMain.module.css";

const ProjectsMain = () => (
  <div>
    <p className={`colorBlack800 ${styles.title}`}>projects</p>

    <div className={styles.projectContainer}>
      <ProjectCard>
        <ProjectCard.Icon iconName="SoundbaseLogo" />

        <div>
          <ProjectCard.Title>Soundbase</ProjectCard.Title>
          <ProjectCard.Description>
            This pet-project is a Nextjs application. It was built using Nextjs,
            Recoil for statemanagement, Typescript, StripeAPI to provide payment
            functionality, and Mongodb as a database
          </ProjectCard.Description>
        </div>

        <ProjectCard.Link
          githubLink="https://github.com/Lgxn71/e-commerce-soundbase"
          lifeDemoLink="https://e-commerce-soundbase.vercel.app/"
        />
      </ProjectCard>

      <ProjectCard>
        <ProjectCard.Icon iconName="ArtamedicusLogo" />

        <div>
          <ProjectCard.Title>Artamedicus</ProjectCard.Title>
          <ProjectCard.Description>
            Landing Page with Integrated Twilio API for plastic surgery clinic
          </ProjectCard.Description>
        </div>

        <ProjectCard.Link
          githubLink="https://github.com/Lgxn71/Altamedicus"
          lifeDemoLink="https://www.artamedicus.com/"
        />
      </ProjectCard>
    </div>
  </div>
);
export default ProjectsMain;
