import { ReactNode } from "react";

import styles from "./Block.module.css";

const Block = ({
  children,
  height,
}: {
  children?: ReactNode;
  height: number;
}) => (
  <div style={{ height: height + "px" }} className={styles.block}>
    {children}
  </div>
);

export default Block;
