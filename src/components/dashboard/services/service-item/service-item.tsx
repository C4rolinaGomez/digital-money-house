"use client";

import { useRouter } from "next/navigation";
import styles from "./service-item.module.css";

type ServiceItemProps = {
  data: GetServiceResponseType;
};

export const ServiceItem = ({ data }: ServiceItemProps) => {
  const router = useRouter();
  const { id, name, date } = data;

  const onClick = () => {
    router.push(`/dashboard/services/${id}`);
  };

  return (
    <li className={styles.serviceItem} onClick={onClick}>
      <img src={`/services/${name}.svg`} alt="icon" width={58} height={87} />
      <div className={styles.description}>{name}</div>
      <div className={styles.select}>Seleccionar</div>
    </li>
  );
};
