"use client";

import { CardStore, createCardStore } from "@/stores/card-store";
import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

export type CardStoreApi = ReturnType<typeof createCardStore>;
export const CardStoreContext = createContext<CardStoreApi | undefined>(
  undefined,
);
export interface CardStoreProviderProps {
  children: ReactNode;
}

export const CardStoreProvider = ({ children }: CardStoreProviderProps) => {
  const storeRef = useRef<CardStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCardStore();
  }
  return (
    <CardStoreContext.Provider value={storeRef.current}>
      {children}
    </CardStoreContext.Provider>
  );
};

export const useCardStore = <T,>(selector: (store: CardStore) => T): T => {
  const storeContext = useContext(CardStoreContext);
  if (!storeContext) {
    throw new Error(`useCardStore must be used within CardStoreProvider`);
  }
  return useStore(storeContext, selector);
};
