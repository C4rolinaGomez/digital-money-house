import { AddCardButton } from "@/components/dashboard/cards/add-card-button/add-card-button";
import styles from "./add-card-container.module.css";
import { Card } from "@/components/shared/card/card";

type AddCardProps = {
  size: number;
};

export const AddCard = ({ size }: AddCardProps) => {
  return (
    <Card className={styles.addCard} color="background">
      <p>Agregá tu tarjeta de débito o crédito</p>
      <AddCardButton size={size} type="simple" />
    </Card>
  );
};
