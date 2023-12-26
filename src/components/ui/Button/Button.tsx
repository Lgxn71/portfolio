import { ButtonHTMLAttributes, FC } from "react";

import { VariantProps, cva } from "class-variance-authority";

import styles from "./Button.module.css";
const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      default: styles.default,
    },
    size: {
      default: styles.default,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({
  className,
  size,
  variant,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      aria-label="button"
      className={`${className} ${buttonVariants({ size, variant })}`}
    >
      {children}
    </button>
  );
};
export { Button, buttonVariants };
