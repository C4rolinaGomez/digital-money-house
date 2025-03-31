"use client";

import { ServiceItem } from "@/components/dashboard/services/service-item/service-item";
import { List } from "@/components/shared/list/list";
import { useGetServices } from "@/hooks/api-query-hook";
import { useServiceFiltered } from "@/hooks/service-filter";
import { useServiceStore } from "@/providers/service-store-provider";

export const ServiceList = () => {
  const { data, isLoading } = useGetServices();

  const searchTerm = useServiceStore((state) => state.form.searchTerm);

  const { filterServiceList } = useServiceFiltered(data!, searchTerm);

  return (
    <List
      title="Más recientes"
      isLoading={isLoading}
      isEmpty={!filterServiceList?.length}
    >
      <ul>
        {filterServiceList?.map((item) => (
          <ServiceItem key={item.id} data={item} />
        ))}
      </ul>
    </List>
  );
};
