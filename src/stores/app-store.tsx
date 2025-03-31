import { createStore } from "zustand/vanilla";

export type AppState = {
  sidebarIsOpen: boolean;
};

export type AppActions = {
  toggle: (flag: boolean) => void;
};

export type AppStore = AppState & AppActions;

export const defaultInitialState: AppState = {
  sidebarIsOpen: false,
};

export const createAppStore = (initState: AppState = defaultInitialState) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    toggle: (flag: boolean) =>
      set((state) => ({
        sidebarIsOpen: flag,
      })),
  }));
};
