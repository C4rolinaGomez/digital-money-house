import styles from "./small.module.css";

type SmallProps = {
  text: string;
  invalid?: boolean;
  textAlign?: "center" | "left";
};
export const Small = ({ text, textAlign = "left", invalid }: SmallProps) => {
  const cssTextAlign = {
    center: styles.center,
    left: styles.left,
    undefined: "",
  };
  return (
    <p
      className={`
        ${styles.small}
        ${cssTextAlign[textAlign!]}
        ${invalid ? styles.invalid : ""}
    `}
    >
      {text}
    </p>
  );
};
