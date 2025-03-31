import { ActivityPaymentSteps } from "@/enums/enum";
import { createStore } from "zustand/vanilla";

export type ServiceState = {
  step: ActivityPaymentSteps | undefined;
  form: {
    searchTerm: string;
  };
  selected: GetServiceResponseType | undefined;
  accountNumber: string;
};

export type ServiceActions = {
  setSearchTerm: (value: string) => void;
  setSelected: (value: GetServiceResponseType) => void;
  setAccountNumber: (value: string) => void;
  setStep: (step: ActivityPaymentSteps) => void;
};

export type ServiceStore = ServiceState & ServiceActions;

export const defaultInitialState: ServiceState = {
  step: ActivityPaymentSteps.DEFAULT,
  form: {
    searchTerm: "",
  },
  selected: undefined,
  accountNumber: "",
};

export const createServiceStore = (
  initState: ServiceState = defaultInitialState
) => {
  return createStore<ServiceStore>()((set) => ({
    ...initState,
    setStep: (step: ActivityPaymentSteps) => set((state) => ({ step })),
    setSearchTerm: (value: string) =>
      set((state) => ({ form: { ...state.form, searchTerm: value } })),
    setSelected: (value: GetServiceResponseType) =>
      set((state) => ({ selected: value })),
    setAccountNumber: (value: string) =>
      set((state) => ({ accountNumber: value })),
  }));
};
