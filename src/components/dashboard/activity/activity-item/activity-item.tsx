import { format } from "@formkit/tempo";
import { useRouter } from "next/navigation";
import styles from "./activity-item.module.css";

type ActivityItemProps = {
  data: GetAccountActivityResponseType;
};

export const ActivityItem = ({ data }: ActivityItemProps) => {
  const { type, amount, dated, origin, destination } = data;
  const date = format(dated, "MMMM D, hh:mm a");
  const router = useRouter();

  const fixedDescription = () => {
    const fixedType = type === "Deposit" ? "Deposito" : "Transferencia";
    const fixedDestination =
      origin === destination ? "a cuenta propia" : `a cuenta ${destination}`;
    return `${fixedType} ${fixedDestination}`;
  };

  return (
    <li
      className={styles.activityItem}
      onClick={() => router.push(`/dashboard/activity/${data.id}`)}
    >
      <div className={styles.icon}></div>
      <div className={styles.description}>{fixedDescription()}</div>
      <div className={styles.group}>
        <p className={styles.amount}>
          {(amount < 0 ? "-$ " : "$ ") + (Math.abs(amount).toFixed(2) || "-")}
        </p>
        <p className={styles.date}>
          {date.charAt(0).toUpperCase() + date.slice(1)}
        </p>
      </div>
    </li>
  );
};
