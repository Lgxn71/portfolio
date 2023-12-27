import { FC, ReactNode } from "react";

import Icon from "../Icons/Icon";

import styles from "./Container.module.css";

interface IContainerProps {
  children: ReactNode;
  paddingTop: string;
  paddingBottom: string;
  iconTopPosition: string;
  hasBorderTop?: boolean;
  hasBorderBottom?: boolean;
}
const Container: FC<IContainerProps> = ({
  children,
  paddingTop,
  paddingBottom,
  iconTopPosition,
  hasBorderTop,
  hasBorderBottom,
}) => {
  const borderTop = hasBorderTop ? "1px solid rgba(238, 240, 243, 1)" : "";
  const borderBottom = hasBorderBottom
    ? "1px solid rgba(238, 240, 243, 1)"
    : "";
  return (
    <div
      className={styles.container}
      style={{ paddingTop, paddingBottom, borderTop, borderBottom }}
    >
      <Icon
        style={{ top: iconTopPosition }}
        className={styles.iconLeft}
        name="Plus"
      />
      <Icon
        style={{ top: iconTopPosition }}
        className={styles.iconRight}
        name="Plus"
      />

      {children}
    </div>
  );
};

export default Container;
