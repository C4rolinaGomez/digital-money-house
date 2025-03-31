import { Icon } from "@/components/shared/icons/icons";
import styles from "./transaction-info.module.css";

export type TransactionInfoProps = {
  amountLabel: string;
  amount: string;
  fromLabel: string;
  from: string;
  fromAction?: boolean;
  fromActionHandler?: () => void;
  toLabel: string;
  to: string;
  highlight: boolean;
};

export const TransactionInfo = (props: TransactionInfoProps) => {
  return (
    <div className={styles.group}>
      <div>
        {props.fromAction && (
          <div className={styles.action}>
            <div className={styles.label}>{props.amountLabel}</div>
            <Icon
              icon="edit"
              color="primary"
              onClick={props.fromActionHandler}
            />
          </div>
        )}
        {!props.fromAction && (
          <div className={styles.label}>{props.amountLabel}</div>
        )}
        <div
          className={`${styles.value} ${props.highlight ? styles.highlight : ""}`}
        >
          {props.amount}
        </div>
      </div>
      <div>
        <div className={styles.label}>{props.fromLabel}</div>
        <div
          className={`${styles.value} ${props.highlight ? styles.highlight : ""}`}
        >
          {props.from}
        </div>
      </div>
      <div>
        <div className={styles.label}>{props.toLabel}</div>
        <div
          className={`${styles.value} ${props.highlight ? styles.highlight : ""}`}
        >
          {props.to}
        </div>
      </div>
    </div>
  );
};
