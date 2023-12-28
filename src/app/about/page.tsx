import Image from "next/image";

import Block from "@/components/ui/Block/Block";
import Container from "@/components/ui/Container/Container";
import PageTitle from "@/components/ui/PageTitle/PageTitle";

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
          Hi again, I&apos;m Ali, a Kazakh sophomore student currently pursuing
          a Bachelor&apos;s degree in Computer Science and Engineering at Sejong
          University in Seoul, South Korea.
        </p>
        <p>
          I am truly passionate about gaining new experiences and working
          collaboratively in a team. Independently, I have completed several
          projects to delve deeper into frontend development, significantly
          enhancing my skills and knowledge. I actively seek opportunities to
          stay current with industry trends and emerging technologies, often
          following influencers with profound knowledge and experience in online
          coding communities. This proactive approach allows me to bring fresh
          insights and innovative solutions to the teams I work with.
        </p>
        <p>
          My passion for learning is not confined to my academic journey;
          it&apos;s a way of life. Beyond the realms of coursework and
          self-study, you will often find me immersed in reading about cultural
          evolution and historical milestones.
        </p>
      </div>
    </Container>
    <Block />
  </main>
);
export default aboutPage;
