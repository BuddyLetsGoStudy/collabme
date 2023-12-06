import React from "react";
import { cls } from "../helpers/css";
import styles from "./Button.module.scss";
import { arrowIcon } from "./arrowIcon";

interface IButtonProps {
  children: React.ReactElement | string;
  size?: "sm" | "md";
  className?: string;
  outline?: boolean;
  arrow?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function Button({ children, size = "md", outline = false, arrow = false, style, className = "", onClick }: IButtonProps) {
  return (
    <button className={cls(styles.button, styles[size], outline && styles.outline, arrow && styles.arrow, className && className)} style={style} onClick={onClick}>
      {children}
      {arrow && arrowIcon}
    </button>
  );
}
