import { useCardStore } from "@/providers/card-store.provider";
import styles from "./select-card-item.module.css";
import { InputRadio } from "@/components/shared/input-radio/input-radio";
import { getLastDigits } from "@/utils/util";

type SelectCardItemProps = {
  data: GetAccountCardsResponseType;
};

export const SelectCardItem = ({ data }: SelectCardItemProps) => {
  const setCard = useCardStore((state) => state.setCard);
  const { number_id, id } = data;
  return (
    <li className={styles.selectCardItem}>
      <div className={styles.icon}></div>
      <div className={styles.description}>
        Termina en {getLastDigits(number_id)}
      </div>
      <div className={styles.select}>
        <InputRadio
          name="card"
          value={String(id)}
          onChange={() => setCard(data)}
        />
      </div>
    </li>
  );
};
