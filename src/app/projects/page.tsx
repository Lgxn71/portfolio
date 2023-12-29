import Block from "@/components/ui/Block/Block";
import Container from "@/components/ui/Container/Container";
import PageTitle from "@/components/ui/PageTitle/PageTitle";
import BorderBlinks from "@/components/ui/BorderBlinks/BorderBlinks";
import ProjectCard from "@/components/ui/Cards/ProjectCard";

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

        <ProjectCard>
          <ProjectCard.Icon iconName="SoundbaseLogo" />

          <div>
            <ProjectCard.Title>Soundbase</ProjectCard.Title>
            <ProjectCard.Description>
              This pet-project is a Nextjs application. It was built using
              Nextjs, Recoil for statemanagement, Typescript, StripeAPI to
              provide payment functionality, and Mongodb as a database
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
    </Container>
    <Block />
  </main>
);
export default ProjectsPage;
