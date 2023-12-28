import { AnchorHTMLAttributes, FC, ReactNode } from "react";

import styles from "./Link.module.css";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isTarget: boolean;
}

const Link: FC<LinkProps> = ({ href, children, isTarget, ...props }) => {
  return (
    <a
      className={styles.link}
      href={href}
      target={isTarget ? "_blank" : ""}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
