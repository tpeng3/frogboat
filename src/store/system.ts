import create from "zustand";

interface SystemState {
  darkMode: boolean;
  activeFilters: string[];
  filterType: string;
  sortType: string; // change to enum later
}

const initialState = {
  darkMode: true,
  activeFilters: [],
  filterType: "personal",
  sortType: "popularity",
};

/**
 * Store functions
 */
const setDarkMode = (value) => ({ darkMode: value });

const updateActiveFilters = (value) => ({ activeFilters: value });

// Update gallery filter radio values
const updateFilterType = (value) => ({ filterType: value });
const updateSortType = (value) => ({ sortType: value });

/**
 * Init store
 */
const useSystemStore: any = create<SystemState>((set) => ({
  ...initialState,
  setDarkMode: (value) => set(() => setDarkMode(value)),
  updateActiveFilters: (value) => set(() => updateActiveFilters(value)),
  updateFilterType: (value) => set(() => updateFilterType(value)),
  updateSortType: (value) => set(() => updateSortType(value)),
}));

export default useSystemStore;
