import { Card } from "@/components/shared/card/card";
import { useGetServiceDetail } from "@/hooks/api-query-hook";
import styles from "./service-payment-detail.module.css";
import { useParams } from "next/navigation";
import { useCardStore } from "@/providers/card-store.provider";
import { useEffect } from "react";

export const ServicePaymentDetail = () => {
  const { id: service_id } = useParams();
  const { data } = useGetServiceDetail(Number(service_id));
  const { name, invoice_value } = data || {};
  const setAmount = useCardStore((state) => state.setAmount);

  useEffect(() => {
    setAmount(invoice_value!);
  }, [invoice_value]);

  return (
    <Card color="background" className={styles.servicePaymentDetail}>
      <h4>{name}</h4>
      <div className={styles.details}>
        <div>Total a pagar</div>
        <div>${invoice_value?.toFixed(2) || "-"}</div>
      </div>
    </Card>
  );
};
