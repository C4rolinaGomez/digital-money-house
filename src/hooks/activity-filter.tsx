export function useActivityFiltered(
  activityList: GetAccountActivityResponseType[],
  searchTerm: string,
  filter: string,
  date: string
) {
  const filterFn = filterOptions[filter].fn;
  let filterActivityList = (activityList || []).filter((activity) => {
    const matchesFilter =
      date === ""
        ? filterFn(new Date(activity.dated))
        : filterFn(new Date(activity.dated), new Date(date));
    const matchesSearchTerm = filterSearchTerm(searchTerm, activity);
    return matchesFilter && matchesSearchTerm;
  });

  return { filterActivityList };
}

const filterSearchTerm = (
  searchTerm: string,
  activity: GetAccountActivityResponseType
) => {
  return searchTerm === ""
    ? true
    : activity.description?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        activity.origin?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        activity.destination
          ?.toLowerCase()
          .includes(searchTerm?.toLowerCase()) ||
        activity.amount?.toString().includes(searchTerm?.toString());
};

export const filterOptions: Record<
  string,
  {
    label: string;
    fn: (date: Date, date2?: Date) => boolean;
    isVisible?: boolean;
  }
> = {
  today: {
    label: "Hoy",
    fn: (date: Date) => isSameDay(date, new Date()),
    isVisible: true,
  },
  yesterday: {
    label: "Ayer",
    fn: (date) => isSameDay(date, addDays(new Date(), -1)),
    isVisible: true,
  },
  lastWeek: {
    label: "Última semana ",
    fn: (date) => isWithinLastDays(date, 7),
    isVisible: true,
  },
  last15Days: {
    label: "Últimos 15 días ",
    fn: (date) => isWithinLastDays(date, 15),
    isVisible: true,
  },
  lastMonth: {
    label: "Último mes",
    fn: (date) => isWithinLastDays(date, 30),
    isVisible: true,
  },
  lastYear: {
    label: "Último año",
    fn: (date) => isWithinLastDays(date, 365),
    isVisible: true,
  },
  other: {
    label: "Otro periodo",
    fn: (date, date2) => isSameDay(date, addDays(date2!, 1)),
    isVisible: false,
  },
  "": {
    label: "default",
    fn: (date) => true,
    isVisible: false,
  },
};

const isSameDay = (date1: Date, date2: Date) => {
  return date1.toDateString() === date2.toDateString();
};

const addDays = (date: Date, days: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

const isWithinLastDays = (date: Date, days: number) => {
  const pastDate = addDays(new Date(), -days);
  return date >= pastDate;
};
