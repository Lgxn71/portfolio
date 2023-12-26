import Image from "next/image";

import Block from "@/components/ui/Block/Block";
import Container from "@/components/ui/Container/Container";
import PageTitle from "@/components/ui/PageTitle/PageTitle";

const blockHeight = 550;

const aboutPage = () => (
  <main style={{ display: "flex" }}>
    <Block height={blockHeight}></Block>
    <Container
      iconTopPosition="-69.5px"
      paddingTop="60px"
      paddingBottom="100px"
    >
      <PageTitle>
        Hey There,
        <Image
          width={100}
          height={100}
          quality={100}
          alt=""
          src={"/assets/aliMemoji.PNG"}
          style={{
            border: "1px solid rgba(113, 148, 113, 0.302)",
            borderRadius: "100px",
          }}
        />
      </PageTitle>
      <div className="aboutParagraphContainer">
        <p>
          Hello there! My name is Ali. I&apos;m an 18-year-old computer science
          and computer engineering student pursuing my Bachelor&apos;s degree at
          Sejong University in Seoul. My passion for learning is not just a part
          of my academic journey; it&apos;s a way of life. As a dedicated and
          ambitious individual.
        </p>
        <p>
          My technical skills includes JavaScript and TypeScript. I specialize
          in front-end development with expertise in React and Next.js, ensuring
          seamless and engaging user experiences. Additionally, my skills extend
          to utilizing state management tools such as Recoil and Redux. Coupled
          with a designing responsive interfaces using Tailwind CSS and CSS
          Modules and a for database i can use MongoDB.
        </p>
      </div>
    </Container>
    <Block height={blockHeight}></Block>
  </main>
);
export default aboutPage;
