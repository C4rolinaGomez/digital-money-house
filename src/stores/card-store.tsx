import { CardSteps } from "@/enums/enum";
import { createStore } from "zustand/vanilla";

export type CardState = {
  form: {
    amount: number | undefined;
    dated: string | undefined;
  };
  step: CardSteps | undefined;
  card: GetAccountCardsResponseType | undefined;
};

export type CardActions = {
  setStep: (step: CardSteps) => void;
  setCard: (card: GetAccountCardsResponseType) => void;
  setAmount: (amount: number) => void;
  setDated: (dated: string) => void;
};

export type CardStore = CardState & CardActions;

export const defaultInitialState: CardState = {
  form: {
    amount: undefined,
    dated: undefined,
  },
  step: CardSteps.DEFAULT,
  card: undefined,
};

export const createCardStore = (initState: CardState = defaultInitialState) => {
  return createStore<CardStore>()((set) => ({
    ...initState,
    setStep: (step: CardSteps) => set({ step }),
    setCard: (card: GetAccountCardsResponseType) => set({ card }),
    setAmount: (amount: number) =>
      set((state) => ({ form: { ...state.form, amount } })),
    setDated: (dated: string) =>
      set((state) => ({ form: { ...state.form, dated } })),
  }));
};
