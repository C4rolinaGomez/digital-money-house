import {
  TransactionInfo,
  TransactionInfoProps,
} from "@/components/shared/transaction-info/transaction-info";
import { Card } from "@/components/shared/card/card";
import { Icon } from "@/components/shared/icons/icons";
import { TransactionOptions } from "@/components/shared/transaction-options/transaction-options";
import { useCardStore } from "@/providers/card-store.provider";
import { maskCardNumber } from "@/utils/util";
import { format } from "@formkit/tempo";
import styles from "./service-payment-voucher.module.css";

export const ServicePaymentVoucher = () => {
  const {
    form: { amount, dated },
    card,
  } = useCardStore((state) => state);

  const transaction: TransactionInfoProps = {
    amountLabel: format(dated!, { date: "full", time: "short" }),
    amount: `$ ${Math.abs(amount!).toFixed(2) || "-"}`,
    fromLabel: "Para",
    from: "Cuenta propia",
    toLabel: "Tarjeta",
    to: maskCardNumber(card?.number_id!),
    highlight: true,
  };

  return (
    <>
      <Card color="primary" className={styles.message}>
        <Icon icon="success" color="black" />
        <h3>Ya realizaste tu pago</h3>
      </Card>
      <Card color="background">
        <TransactionInfo {...transaction} />
      </Card>
      <TransactionOptions />
    </>
  );
};
