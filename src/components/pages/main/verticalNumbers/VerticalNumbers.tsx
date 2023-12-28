import { FC } from "react";

import styles from "./VerticalNumber.module.css";

interface IVerticalNumbersProps {
  numbersLength: number;
  startingNumber: number;
}

const VerticalNumbers: FC<IVerticalNumbersProps> = ({
  numbersLength,
  startingNumber,
}) => {
  const numbers: number[] = [];

  for (let i = 0; i <= numbersLength; i++) {
    numbers.push(i);
  }

  return (
    <ol className={styles.list}>
      {numbers.map((number, index) => (
        <li className={styles.listItem} key={number}>
          <span className={styles.number}>{startingNumber - index}</span>
          <span className={styles.dash} />
        </li>
      ))}
    </ol>
  );
};
export default VerticalNumbers;
