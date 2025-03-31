"use client";

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { FieldValues, useFormContext } from "react-hook-form";
import styles from "./button.module.css";

type ButtonProps = {
  type: "button" | "submit" | "link";
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "tertiary" | "background" | "gray";
  size?: "small" | "medium" | "large" | "extralarge";
  width?: "full" | "default";
  onClick?: () => void;
  disabled?: boolean;
};
type SubmitButtonProps<T> = {
  onSubmit?: (data: T) => void;
};
type LinkButtonProps = {
  href?: Url;
};

const cssSize: any = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
  extralarge: styles.extralarge,
  undefined: "",
};
const cssColor: any = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
  background: styles.background,
  gray: styles.gray,
  undefined: "",
};
const cssWidth: any = {
  full: styles.full,
  undefined: "",
};

export const Button = (
  props: ButtonProps & SubmitButtonProps<any> & LinkButtonProps
) => {
  const buttonType = {
    submit: <ButtonSubmit {...props}>{props.children}</ButtonSubmit>,
    button: <ButtonDefault {...props}>{props.children}</ButtonDefault>,
    link: <ButtonLink {...props}>{props.children}</ButtonLink>,
  };
  return buttonType[props.type!];
};

export const ButtonSubmit = <T extends FieldValues>({
  children,
  color,
  size,
  width,
  onSubmit,
  disabled,
}: ButtonProps & SubmitButtonProps<T>) => {
  const { handleSubmit } = useFormContext<T>();
  return (
    <button
      type="submit"
      className={`
        ${styles.button}
        ${cssSize[size!]}
        ${cssColor[color!]}
        ${cssWidth[width!]}
        ${disabled ? styles.disabled : ""}
      `}
      onClick={handleSubmit(onSubmit!)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const ButtonDefault = ({
  type,
  children,
  color,
  size,
  width,
  onClick,
  disabled,
}: ButtonProps) => {
  {
    type === "button";
  }
  return (
    <button
      type="button"
      className={[
        styles.button,
        cssSize[size!],
        cssColor[color!],
        cssWidth[width!],
        disabled ? styles.disabled : "",
      ].join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const ButtonLink = ({
  children,
  color,
  size,
  width,
  disabled,
  href,
}: ButtonProps & LinkButtonProps) => {
  return (
    <Link
      href={href!}
      className={[
        styles.button,
        cssSize[size!],
        cssColor[color!],
        cssWidth[width!],
        disabled ? styles.disabled : "",
      ].join(" ")}
    >
      {children}
    </Link>
  );
};
