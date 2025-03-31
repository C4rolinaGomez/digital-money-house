"use client";

import { CardSteps } from "@/enums/enum";
import { Button } from "@/components/shared/button/button";
import { Icon } from "@/components/shared/icons/icons";
import { useCardStore } from "@/providers/card-store.provider";
import { toast } from "sonner";
import styles from "./add-card-button.module.css";

type AddCardButtonProps = {
  size: number;
  type?: "simple" | "form";
};

const MAX_CARDS = 10;

export const AddCardButton = ({ size, type }: AddCardButtonProps) => {
  const buttonType = {
    simple: <AddCardButtonSimple size={size} />,
    form: <AddCardButtonForm size={size} />,
  };
  return buttonType[type!];
};

const AddCardButtonSimple = ({ size }: AddCardButtonProps) => {
  const setStep = useCardStore((state) => state.setStep);
  const onAddCard = () => {
    if (size === MAX_CARDS) {
      toast.message(`No puedes agregar más de ${size} tarjetas`);
      return;
    }
    setStep(CardSteps.ADD_CARD_FORM);
  };
  return (
    <div className={styles.addCardButtonSimple} onClick={() => onAddCard()}>
      <Icon icon="add" color="primary" />
      <div className={styles.title}>Nueva tarjeta</div>
      <Icon icon="arrow-right" color="primary" />
    </div>
  );
};

const AddCardButtonForm = ({ size }: AddCardButtonProps) => {
  const { card, setStep } = useCardStore((state) => state);
  const onAddCard = () => {
    if (size === MAX_CARDS) {
      toast.message("No puedes agregar más de 10 tarjetas");
      return;
    }
    setStep(CardSteps.ADD_CARD_FORM);
  };
  return (
    <div className={styles.addCardButtonForm}>
      <div onClick={() => onAddCard()}>
        <Icon icon="add" color="primary" />
        <div className={styles.title}>Nueva tarjeta</div>
      </div>
      <Button
        type="button"
        color="primary"
        size="medium"
        onClick={() => setStep(CardSteps.SELECT_CARD_FORM)}
        disabled={card === undefined}
      >
        Continuar
      </Button>
    </div>
  );
};
