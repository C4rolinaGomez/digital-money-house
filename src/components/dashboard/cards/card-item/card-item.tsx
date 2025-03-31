import { useDeleteAccountCards } from "@/hooks/api-query-hook";
import styles from "./card-item.module.css";
import { getLastDigits } from "@/utils/util";

type CardItemProps = {
  id: number;
  number_id: number;
  account_id: number;
};

export const CardItem = (cardItemProps: CardItemProps) => {
  const { id: card_id, number_id, account_id } = cardItemProps;
  const { mutate } = useDeleteAccountCards();

  const handleRemove = () => {
    mutate({ account_id, card_id });
  };

  return (
    <li className={styles.cardItem}>
      <div className={styles.icon}></div>
      <div className={styles.description}>
        Termina en {getLastDigits(number_id)}
      </div>
      <div className={styles.delete} onClick={() => handleRemove()}>
        Eliminar
      </div>
    </li>
  );
};
