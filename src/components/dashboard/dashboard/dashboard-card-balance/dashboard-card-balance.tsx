"use client";

import { Card } from "@/components/shared/card/card";
import { useGetAccount } from "@/hooks/api-query-hook";
import Link from "next/link";
import styles from "./dashboard-card-balance.module.css";

export const DashboardCardBalance = () => {
  const { data, isLoading } = useGetAccount();
  const { available_amount } = data || {};

  // if (isLoading) {
  //   return <Skeleton height={236} marginBottom={20} />;
  // }

  return (
    <Card color="background" className={styles.dashboardCardBalance}>
      <div className={styles.options}>
        <Link href={"/dashboard/cards"}>Ver tarjetas</Link>
        <Link href={"/dashboard/activity"}>Ver CVU</Link>
      </div>
      <p>Dinero disponible</p>
      <span>{`$ ${available_amount?.toFixed(2) || "-"}`}</span>
    </Card>
  );
};
