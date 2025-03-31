export function useServiceFiltered(
  serviceList: GetServiceResponseType[],
  searchTerm: string
) {
  const filterServiceList =
    searchTerm.trim() === ""
      ? serviceList
      : serviceList.filter((service) => {
          return service.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

  return { filterServiceList };
}
