import { createStore } from "zustand/vanilla";

export type ActivityState = {
  filterIsOpen: boolean;
  form: {
    searchTerm: string;
    filter: string;
    date: string;
  };
};

export type ActivityActions = {
  setFilter: (filter: string) => void;
  setSearchTerm: (value: string) => void;
  setDate: (value: string) => void;
};

export type ActivityStore = ActivityState & ActivityActions;

export const defaultInitialState: ActivityState = {
  filterIsOpen: false,
  form: {
    searchTerm: "",
    filter: "",
    date: "",
  },
};

export const createActivityStore = (
  initState: ActivityState = defaultInitialState
) => {
  return createStore<ActivityStore>()((set) => ({
    ...initState,
    setFilter: (filter: string) =>
      set((state) => ({ form: { ...state.form, filter: filter } })),
    setSearchTerm: (value: string) =>
      set((state) => ({ form: { ...state.form, searchTerm: value } })),
    setDate: (value: string) =>
      set((state) => ({ form: { ...state.form, date: value } })),
  }));
};
