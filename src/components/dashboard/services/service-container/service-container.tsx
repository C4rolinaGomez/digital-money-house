"use client";

import { ServiceForm } from "@/components/dashboard/services/service-form/service-form";
import { ServiceList } from "@/components/dashboard/services/service-list/service-list";
import { ServiceStoreProvider } from "@/providers/service-store-provider";

export const ServiceContainer = () => {
  return (
    <ServiceStoreProvider>
      <ServiceForm />
      <ServiceList />
    </ServiceStoreProvider>
  );
};
