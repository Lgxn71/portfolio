import ProjectCard from "@/components/ui/Cards/ProjectCard";
import Link from "@/components/ui/Link/Link";
import styles from "./ProjectsMain.module.css";

const Experience = () => {
  return (
    <div>
      <p className={`colorBlack800 ${styles.title}`}>experience</p>

      <div className={styles.projectContainer}>
        <ProjectCard>
          <ProjectCard.Icon iconName="ZenguardAI" />

          <div>
            <ProjectCard.Title>Zenguard AI</ProjectCard.Title>
            <ProjectCard.Description>
              Worked for 11 months (March 2024 – December 2024) as a{" "}
              <span className="colorBlack800">
                Frontend Developer and Software Engineer,
              </span>{" "}
              contributing to the development of a robust SaaS platform using{" "}
              <span className="colorBlack800">
                Python, FastAPI, Vue.js, and MongoDB.{" "}
              </span>{" "}
              Key achievements include developing and deploying a responsive
              landing page,{" "}
              <span className="colorBlack800">
                implementing a 97% design overhaul,
              </span>{" "}
              creating a component library with{" "}
              <span className="colorBlack800">RadixUI</span> to improve
              accessibility, optimizing performance using{" "}
              <span className="colorBlack800">Webpack,</span> enhancing password
              security with <span className="colorBlack800">zxcvbn, </span> and
              building dynamic user metric dashboards with
              <span className="colorBlack800"> ApexCharts, </span>
              for better stakeholder decision-making.
            </ProjectCard.Description>
          </div>

          <Link isTarget href="https://www.zenguard.ai">
            Link
          </Link>
        </ProjectCard>
      </div>
    </div>
  );
};
export default Experience;
