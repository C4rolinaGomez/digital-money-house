import { SelectCardInfo } from "@/components/dashboard/deposits/cards/select-card-info/select-card-info";
import { TransactionOptions } from "@/components/shared/transaction-options/transaction-options";
import { Card } from "@/components/shared/card/card";
import { Icon } from "@/components/shared/icons/icons";
import styles from "./select-card-voucher.module.css";

export const SelectCardVoucher = () => {
  return (
    <>
      <Card color="primary" className={styles.message}>
        <Icon icon="success" color="black" />
        <h3>Ya cargamos el dinero a tu cuenta</h3>
      </Card>
      <div>
        <SelectCardInfo isInfo={true} />
        <TransactionOptions />
      </div>
    </>
  );
};
