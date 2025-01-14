import Image from "next/image";

import Block from "@/components/ui/Block/Block";
import Container from "@/components/ui/Container/Container";
import PageTitle from "@/components/ui/PageTitle/PageTitle";
import BorderBlinks from "@/components/ui/BorderBlinks/BorderBlinks";

import styles from "@/styles/about/about.module.css";

const aboutPage = () => (
  <main style={{ display: "flex" }}>
    <Block />

    <Container
      iconTopPosition="-69.5px"
      paddingTop="60px"
      paddingBottom="100px"
      hasBorderBottom={true}
    >
      <BorderBlinks />
      <PageTitle>
        Hey There,
        <Image
          width={100}
          height={100}
          quality={100}
          alt="my Memoji"
          src={"/assets/aliMemoji.PNG"}
          className={styles.img}
        />
      </PageTitle>

      <div className={styles.aboutParagraphContainer}>
        <p>
          Hi! I&apos;m Ali, a junior studying Computer Science and Engineering
          at Sejong University in Seoul, South Korea.
        </p>

        <p>
          I love creating digital experiences that make an impact and enjoy
          turning ideas into something real through technology. Frontend
          development is my main focus, and working on personal projects has
          helped me grow both my skills and perspective. I also like staying
          up-to-date with the latest tech trends and learning from online
          communities filled with inspiring people.
        </p>

        <p>
          Collaboration is where I really shine - I enjoy bouncing ideas around
          with others, solving problems as a team, and learning from different
          perspectives. I&apos;m always curious, whether it&apos;s about coding,
          history, or how different cultures have shaped the world we live in.
        </p>
        <p>
          When I&apos;m not in front of a screen, I&apos;m probably reading,
          trying out new tools and technologies, or sketching out ideas for my
          next project. If this sounds like someone you&apos;d like to work
          with, let&apos;s connect!
        </p>
      </div>
    </Container>

    <Block />
  </main>
);
export default aboutPage;
