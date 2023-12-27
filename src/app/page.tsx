import Block from "@/components/ui/Block/Block";
import Container from "@/components/ui/Container/Container";

import ProjectsMain from "@/components/pages/main/ProjectsMain/ProjectsMain";
import Hero from "@/components/pages/main/Hero/Hero";
import BorderBlinks from "@/components/ui/BorderBlinks/BorderBlinks";
import VerticalNumbers from "@/components/pages/main/verticalNumbers/VerticalNumbers";

const Home = () => (
  <main style={{ display: "flex" }}>
    <Block>
      <VerticalNumbers numbersLength={10} startingNumber={240} />
    </Block>
    <div>
      <Container
        iconTopPosition="-59.4px"
        paddingTop="50px"
        paddingBottom="50px"
      >
        <Hero />
      </Container>

      <Container
        hasBorderTop={true}
        hasBorderBottom={true}
        iconTopPosition="-39.4px"
        paddingTop="30px"
        paddingBottom="100px"
      >
        <BorderBlinks />

        <ProjectsMain />
      </Container>
    </div>

    <Block />
  </main>
);

export default Home;
