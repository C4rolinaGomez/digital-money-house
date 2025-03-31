import { AddCardButton } from "@/components/dashboard/cards/add-card-button/add-card-button";
import { SelectCardList } from "@/components/dashboard/deposits/cards/select-card-list/select-card-list";
import { Card } from "@/components/shared/card/card";
import { useGetAccount, useGetAccountCards } from "@/hooks/api-query-hook";
import styles from "./select-card-list-container.module.css";

export const SelectCardListContainer = () => {
  const { data: accountData } = useGetAccount();
  const { data, isLoading } = useGetAccountCards(accountData?.id!);

  return (
    <Card className={styles.selectCardListContainer} color="background">
      <h4>Seleccionar tarjeta</h4>
      <SelectCardList isLoading={isLoading} data={data!} />
      <AddCardButton size={data?.length!} type="form" />
    </Card>
  );
};
