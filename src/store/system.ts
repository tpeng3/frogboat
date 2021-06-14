import create from "zustand";

interface SystemState {
  darkMode: boolean;
  currentTheme: string;
}

const initialState = {
  darkMode: false,
  currentTheme: "default",
};

/**
 * Init store
 */
const useSystemStore: any = create<SystemState>((set) => ({
  ...initialState,
  setDarkMode: () =>
    set((darkMode: boolean) => {
      darkMode;
    }),
  setCurrentTheme: () =>
    set((currentTheme: string) => {
      currentTheme;
    }),
}));

export default useSystemStore;
