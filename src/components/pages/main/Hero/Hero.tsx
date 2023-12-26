import Notification from "@/components/pages/main/Hero/Notification/Notification";

import TypingHeading from "./TypingHeading/TypingHeading";

import { buttonVariants } from "@/components/ui/Button/Button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <Notification />
      <TypingHeading /> {/* disscuss with designer */}
      <p className={styles.paragraph}>
        I am a <span className="colorBlack800">frontend developer</span> based
        in <span className="colorBlack800">Seoul, South Korea</span>, currently
        pursuing my bachelor&apos;s degree in{" "}
        <span className="colorBlack800">Computer Science</span> at{" "}
        <span className="colorBlack800">Sejong University.</span>
      </p>
      <div className={styles.actions}>
        <a
          href=""
          className={buttonVariants({ size: "default", variant: "default" })}
        >
          github
        </a>

        <a
          href=""
          className={buttonVariants({ size: "default", variant: "default" })}
        >
          linkedin
        </a>
      </div>
    </>
  );
};
export default Hero;
