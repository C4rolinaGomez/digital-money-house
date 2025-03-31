import { SelectCardWizard } from "@/components/dashboard/deposits/cards/select-card-wizard/select-card-wizard";
import { CardStoreProvider } from "@/providers/card-store.provider";

export const SelectCardContainer = () => {
  return (
    <CardStoreProvider>
      <SelectCardWizard />
    </CardStoreProvider>
  );
};
