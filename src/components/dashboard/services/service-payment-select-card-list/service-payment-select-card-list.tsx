import { SelectCardList } from "@/components/dashboard/deposits/cards/select-card-list/select-card-list";
import { ServicePaymentDetail } from "@/components/dashboard/services/service-payment-detail/service-payment-detail";
import { Button } from "@/components/shared/button/button";
import { ActivityPaymentSteps } from "@/enums/enum";
import {
  useCreateAccountTransferences,
  useGetAccount,
  useGetAccountCards,
} from "@/hooks/api-query-hook";
import { useCardStore } from "@/providers/card-store.provider";
import { useServiceStore } from "@/providers/service-store-provider";
import { useParams } from "next/navigation";
import styles from "./service-payment-select-card-list.module.css";
import { Icon } from "@/components/shared/icons/icons";

export const ServicePaymentSelectCardList = () => {
  const { data: account } = useGetAccount();
  const { data, isLoading } = useGetAccountCards(account?.id!);

  const { mutate, isPending } = useCreateAccountTransferences();

  const { id: service_id } = useParams();

  const {
    form: { amount, dated },
    card,
    setDated,
  } = useCardStore((state) => state);
  const { accountNumber, setStep } = useServiceStore((state) => state);

  const onPayment = () => {
    setDated(new Date().toISOString());
    mutate(
      {
        account_id: card?.account_id!,
        transferRequest: {
          amount: -amount!,
          dated: dated!,
          destination: String(service_id!),
          origin: accountNumber,
        },
      },
      {
        onSuccess: () => setStep(ActivityPaymentSteps.ACTIVITY_PAYMENT_VOUCHER),
        onError: () => setStep(ActivityPaymentSteps.ACTIVITY_PAYMENT_FAIL),
      }
    );
  };

  return (
    <>
      <ServicePaymentDetail />
      <SelectCardList isLoading={isLoading} data={data!} />
      <div className={styles.actions}>
        <div className={styles.button}>
          <Button
            type="button"
            color="primary"
            size="large"
            width="full"
            onClick={onPayment}
            disabled={isPending}
          >
            Pagar
            {isPending && <Icon icon="spinner" color="tertiary" />}
          </Button>
        </div>
      </div>
    </>
  );
};
