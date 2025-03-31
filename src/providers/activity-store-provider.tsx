"use client";

import { ActivityStore, createActivityStore } from "@/stores/activity-store";
import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

export type ActivityStoreApi = ReturnType<typeof createActivityStore>;
export const ActivityStoreContext = createContext<ActivityStoreApi | undefined>(
  undefined
);
export interface ActivityStoreProviderProps {
  children: ReactNode;
}

export const ActivityStoreProvider = ({
  children,
}: ActivityStoreProviderProps) => {
  const storeRef = useRef<ActivityStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createActivityStore();
  }
  return (
    <ActivityStoreContext.Provider value={storeRef.current}>
      {children}
    </ActivityStoreContext.Provider>
  );
};

export const useActivityStore = <T,>(
  selector: (store: ActivityStore) => T
): T => {
  const storeContext = useContext(ActivityStoreContext);
  if (!storeContext) {
    throw new Error(
      `useActivityStore must be used within ActivityStoreProvider`
    );
  }
  return useStore(storeContext, selector);
};
