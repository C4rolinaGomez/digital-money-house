import styles from "./input-radio.module.css";

type InputRadioProps = {
  name: string;
  value: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputRadio = ({
  name,
  value,
  checked,
  onChange,
}: InputRadioProps) => {
  return (
    <input
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
      className={styles.inputRadio}
      checked={checked}
    />
  );
};
