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
      {...props}
      target={isTarget ? "_blank" : ""}
    >
      {children}
    </a>
  );
};

export default Link;
