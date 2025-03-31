"use client";

import { createServiceStore, ServiceStore } from "@/stores/service-store";
import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

export type ServiceStoreApi = ReturnType<typeof createServiceStore>;
export const ServiceStoreContext = createContext<ServiceStoreApi | undefined>(
  undefined
);
export interface ServiceStoreProviderProps {
  children: ReactNode;
}

export const ServiceStoreProvider = ({
  children,
}: ServiceStoreProviderProps) => {
  const storeRef = useRef<ServiceStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createServiceStore();
  }
  return (
    <ServiceStoreContext.Provider value={storeRef.current}>
      {children}
    </ServiceStoreContext.Provider>
  );
};

export const useServiceStore = <T,>(
  selector: (store: ServiceStore) => T
): T => {
  const storeContext = useContext(ServiceStoreContext);
  if (!storeContext) {
    throw new Error(`useServiceStore must be used within ServiceStoreProvider`);
  }
  return useStore(storeContext, selector);
};
