import { ServiceStoreProvider } from "@/providers/service-store-provider";
import { ServicePaymentWizard } from "@/components/dashboard/services/service-payment-wizard/service-payment-wizard";
import { CardStoreProvider } from "@/providers/card-store.provider";

export const ServicePaymentContainer = () => {
  return (
    <ServiceStoreProvider>
      <CardStoreProvider>
        <ServicePaymentWizard />
      </CardStoreProvider>
    </ServiceStoreProvider>
  );
};
