import create from 'zustand';

interface SystemState {
  darkMode: boolean;
};

const initialState = {
  darkMode: false
};

/**
 * Init store
 */
const useSystemStore: any = create<SystemState>(set => ({
  ...initialState,
  setDarkMode: () => set((darkMode: boolean) => { darkMode })
}));

export default useSystemStore;
