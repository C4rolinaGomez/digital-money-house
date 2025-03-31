import {
  TransactionInfo,
  TransactionInfoProps,
} from "@/components/shared/transaction-info/transaction-info";
import { Button } from "@/components/shared/button/button";
import { CardSteps } from "@/enums/enum";
import {
  useCreateAccountDeposits,
  useGetAccount,
} from "@/hooks/api-query-hook";
import { useCardStore } from "@/providers/card-store.provider";
import { format } from "@formkit/tempo";
import styles from "./select-card-info.module.css";
import { Icon } from "@/components/shared/icons/icons";

type SelectCardInfoProps = {
  isInfo: boolean;
};
export const SelectCardInfo = ({ isInfo }: SelectCardInfoProps) => {
  const { data: account } = useGetAccount();
  const { mutate, isPending } = useCreateAccountDeposits();

  const {
    form: { amount, dated },
    card,
    setStep,
    setDated,
  } = useCardStore((state) => state);

  const onConfirm = () => {
    setDated(new Date().toISOString());
    mutate(
      {
        account_id: card?.account_id!,
        depositRequest: {
          amount: amount!,
          dated: dated!,
          destination: account?.cvu!,
          origin: account?.cvu!,
        },
      },
      {
        onSuccess: () => setStep(CardSteps.SELECT_CARD_VOUCHER),
      }
    );
  };

  const transaction: TransactionInfoProps = {
    amountLabel: !isInfo
      ? "Vas a transferir"
      : format(dated!, { date: "full", time: "short" }),
    amount: `$ ${Math.abs(amount!).toFixed(2) || "-"}`,
    fromLabel: "Para",
    from: "Cuenta propia",
    toLabel: "Banco",
    to: "CVU " + account?.cvu,
    highlight: true,
  };

  return (
    <div className={styles.selectCardInfo}>
      <h3>Revisa que está todo bien</h3>
      <TransactionInfo {...transaction} />
      {!isInfo && (
        <div className={styles.action}>
          <div className={styles.button}>
            <Button
              type="button"
              color="primary"
              size="large"
              width="full"
              onClick={onConfirm}
              disabled={isPending}
            >
              Continuar
              {isPending && <Icon icon="spinner" color="tertiary" />}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
