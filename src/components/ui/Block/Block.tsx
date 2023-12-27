import { ReactNode } from "react";

import styles from "./Block.module.css";

const Block = ({ children }: { children?: ReactNode }) => (
  <div className={styles.block}>{children}</div>
);

export default Block;
// style={{ height: height + "px" }} 