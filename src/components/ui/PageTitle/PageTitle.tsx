import { ReactNode } from "react";

import styles from "./PageTitle.module.css";

const PageTitle = ({ children }: { children: ReactNode }) => (
  <h1 className={styles.title}>{children}</h1>
);
export default PageTitle;
