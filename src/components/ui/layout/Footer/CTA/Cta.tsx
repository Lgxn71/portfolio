"use client";

import { usePathname } from "next/navigation";

import Block from "@/components/ui/Block/Block";
import Container from "@/components/ui/Container/Container";
import Link from "../../../Link/Link";

import VerticalNumbers from "@/components/pages/main/verticalNumbers/VerticalNumbers";
import styles from "./Cta.module.css";

const Cta = () => {
  const pathname = usePathname();
  return (
    <>
      <Block>
        {pathname === "/" ? (
          <VerticalNumbers startingNumber={222} numbersLength={2} />
        ) : null}
      </Block>

      <Container
        hasBorderBottom={true}
        iconTopPosition="-69.4px"
        paddingTop="60px"
        paddingBottom="70px"
      >
        <h1 className={styles.title}>Let&apos;s chat</h1>
        <p className={styles.description}>
          I&apos;m always open to new opportunities, so if you have any
          questions or would like to work together, feel free to reach out.
        </p>

        <Link isTarget={false} href="mailto:muhanai1913@gmail.com">
          Email me
        </Link>
      </Container>

      <Block />
    </>
  );
};

export default Cta;
