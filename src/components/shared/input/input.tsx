import { ColorIcon, Icon, SvgIcon } from "@/components/shared/icons/icons";
import { useFormContext } from "react-hook-form";
import styles from "./input.module.css";
import { on } from "events";

type InputProps = {
  fieldName: string;
  type: "text" | "password" | "number" | "email" | "date";
  placeholder: string;
  size?: "small" | "normal";
  width?: "full";
  display?: boolean;
  icon?: SvgIcon;
  iconColor?: ColorIcon;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusOut?: () => void;
};

export const Input = ({
  fieldName,
  type,
  placeholder,
  size = "normal",
  width,
  display = true,
  icon,
  iconColor,
  onChange,
  onFocusOut,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const cssSize: any = {
    small: styles.small,
    normal: styles.normal,
    undefined: "",
  };
  const cssWidth: any = {
    full: styles.full,
    undefined: "",
  };
  return !icon ? (
    <input
      type={type}
      placeholder={placeholder}
      className={`
        ${styles.input}
        ${cssSize[size]}
        ${cssWidth[width!]}
        ${errors[fieldName] ? styles.invalid : ""}
        ${!display ? styles.hidden : ""}
      `}
      {...register(fieldName)}
      {...(onChange && { onChange })}
      {...(onFocusOut && { onFocusOut })}
    />
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <Icon icon={icon} color={iconColor} />
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={`
        ${styles.input}
        ${cssSize[size]}
        ${cssWidth[width!]}
        ${errors[fieldName] ? styles.invalid : ""}
        ${!display ? styles.hidden : ""}
        ${icon ? styles.withIcon : ""}
      `}
        {...register(fieldName)}
      />
    </div>
  );
};
