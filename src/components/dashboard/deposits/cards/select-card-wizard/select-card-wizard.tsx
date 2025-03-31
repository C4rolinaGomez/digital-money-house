"use client";

import { CardForm } from "@/components/dashboard/cards/card-form/card-form";
import { SelectCardForm } from "@/components/dashboard/deposits/cards/select-card-form/select-card-form";
import { SelectCardInfo } from "@/components/dashboard/deposits/cards/select-card-info/select-card-info";
import { SelectCardListContainer } from "@/components/dashboard/deposits/cards/select-card-list-container/select-card-list-container";
import { SelectCardVoucher } from "@/components/dashboard/deposits/cards/select-card-voucher/select-card-voucher";
import { CardSteps } from "@/enums/enum";
import { useCardStore } from "@/providers/card-store.provider";

export const SelectCardWizard = () => {
  const step = useCardStore((state) => state.step);
  return (
    <>
      {(step === CardSteps.DEFAULT || step === CardSteps.SELECT_CARD_LIST) && (
        <SelectCardListContainer />
      )}
      {step === CardSteps.SELECT_CARD_FORM && <SelectCardForm />}
      {step === CardSteps.SELECT_CARD_INFO && <SelectCardInfo isInfo={false} />}
      {step === CardSteps.SELECT_CARD_VOUCHER && <SelectCardVoucher />}
      {step === CardSteps.ADD_CARD_FORM && (
        <CardForm nextStep={CardSteps.SELECT_CARD_LIST} />
      )}
    </>
  );
};
