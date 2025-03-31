"use client";

import { Icon } from "@/components/shared/icons/icons";
import { TransactionOptions } from "@/components/shared/transaction-options/transaction-options";
import {
  useGetAccount,
  useGetAccountActivityById,
} from "@/hooks/api-query-hook";
import { format } from "@formkit/tempo";

import {
  TransactionInfo,
  TransactionInfoProps,
} from "@/components/shared/transaction-info/transaction-info";
import styles from "./activity-detail.module.css";

type ActivityDetailProps = {
  id: string;
};

export const ActivityDetail = ({ id }: ActivityDetailProps) => {
  const { data: accountData } = useGetAccount();
  const { data } = useGetAccountActivityById(accountData?.id!, Number(id));
  const { id: account_id, amount, dated, destination } = data || {};

  const transaction: TransactionInfoProps = {
    amountLabel: "Transferencia de dinero",
    amount: `$ ${Math.abs(amount!).toFixed(2) || "-"}`,
    fromLabel: "Le transferiste a",
    from: destination!,
    toLabel: "Número de cuenta",
    to: String(account_id),
    highlight: true,
  };

  return (
    <>
      <div className={styles.activityDetail}>
        <h3>
          <Icon icon="success" color="primary" width="32" height="32" />
          <span className={styles.status}>Aprobada</span>
          <span className={styles.date}>
            Creada el {format(dated!, { date: "full", time: "short" })}
          </span>
        </h3>
        <TransactionInfo {...transaction} />
      </div>
      <TransactionOptions />
    </>
  );
};
