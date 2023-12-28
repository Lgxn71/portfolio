import Block from "@/components/ui/Block/Block";
import Container from "@/components/ui/Container/Container";

import PageTitle from "@/components/ui/PageTitle/PageTitle";
import ProjectCard from "@/components/ui/Cards/ProjectCard";
import BorderBlinks from "@/components/ui/BorderBlinks/BorderBlinks";

const ProjectsPage = () => (
  <main style={{ display: "flex" }}>
    <Block />
    <Container
      iconTopPosition="-59.4px"
      paddingTop="50px"
      paddingBottom="100px"
      hasBorderBottom={true}
    >
      <BorderBlinks />
      <div style={{ display: "flex", gap: "50px", flexDirection: "column" }}>
        <PageTitle>Projects</PageTitle>

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
          projectDescription="Landing Page with Integrated Twilio API for plastic surgery clinic"
          githubLink="https://github.com/Lgxn71/Altamedicus"
          lifeDemoLink="https://www.artamedicus.com/"
        />
      </div>
    </Container>
    <Block />
  </main>
);
export default ProjectsPage;
