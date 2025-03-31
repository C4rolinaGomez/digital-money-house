import { Icon } from "@/components/shared/icons/icons";
import Link from "next/link";
import styles from "./payment-methods.module.css";

export const PaymentMethods = () => {
  return (
    <Link href={"/dashboard/cards"} className={styles.paymentMethods}>
      <span>Gestioná los medios de pago</span>
      <Icon icon="arrow-right" color="black" />
    </Link>
  );
};
