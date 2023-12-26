import { FC, ReactNode } from "react";

import Icon from "../Icons/Icon";

import styles from "./Container.module.css";

interface IContainerProps {
  children: ReactNode;
  paddingTop: string;
  paddingBottom: string;
  iconTopPosition: string;
}
const Container: FC<IContainerProps> = ({
  children,
  paddingTop,
  paddingBottom,
  iconTopPosition,
}) => (
  <div className={styles.container} style={{ paddingTop, paddingBottom }}>
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
export default Container;
