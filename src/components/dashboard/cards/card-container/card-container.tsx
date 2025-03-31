"use client";

import { AddCard } from "@/components/dashboard/cards/add-card-container/add-card-container";
import { CardForm } from "@/components/dashboard/cards/card-form/card-form";
import { CardList } from "@/components/dashboard/cards/card-list/card-list";
import { CardSteps } from "@/enums/enum";
import { useGetAccount, useGetAccountCards } from "@/hooks/api-query-hook";
import { useCardStore } from "@/providers/card-store.provider";

export const CardContainer = () => {
  const step = useCardStore((state) => state.step);
  const { data: accountData } = useGetAccount();
  const { data: accountCardsData, isLoading } = useGetAccountCards(
    accountData?.id!
  );

  return (
    <>
      {(step === CardSteps.DEFAULT || step === CardSteps.ADD_CARD_LIST) && (
        <AddCard size={accountCardsData?.length!} />
      )}
      {(step === CardSteps.DEFAULT || step === CardSteps.ADD_CARD_LIST) && (
        <CardList data={accountCardsData!} isLoading={isLoading} />
      )}
      {step === CardSteps.ADD_CARD_FORM && (
        <CardForm nextStep={CardSteps.ADD_CARD_LIST} />
      )}
    </>
  );
};
