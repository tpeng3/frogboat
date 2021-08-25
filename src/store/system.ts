import create from "zustand";

interface SystemState {
  darkMode: boolean;
  activeFilters: string[];
  filterType: string;
  sortType: string; // change to enum later
}

const initialState = {
  darkMode: true,
  isLocked: true, // TODO: true
  activeFilters: [],
  filterType: "all",
  sortType: "popularity",
  showSettingsModal: false,
  prevTheme: "default",
  currentTheme: "default",
  redactionComplete: false,
};

/**
 * Store functions
 */
const setDarkMode = (value) => ({ darkMode: value });
const setLocked = (value) => ({ isLocked: value });
const toggleSettingsModal = (value) => ({ showSettingsModal: value });

// Set page theme colors
const setPreviousTheme = (value) => ({ prevTheme: value });
const setCurrentTheme = (value) => ({ currentTheme: value });

const updateActiveFilters = (value) => ({ activeFilters: value });

// Update gallery filter radio values
const updateFilterType = (value) => ({ filterType: value });
const updateSortType = (value) => ({ sortType: value });

// extra animations
const setRedactedComplete = (value) => ({ redactionComplete: value });

/**
 * Init store
 */
const useSystemStore: any = create<SystemState>((set) => ({
  ...initialState,
  setDarkMode: (value) => set(() => setDarkMode(value)),
  updateActiveFilters: (value) => set(() => updateActiveFilters(value)),
  updateFilterType: (value) => set(() => updateFilterType(value)),
  updateSortType: (value) => set(() => updateSortType(value)),
  toggleSettingsModal: (value) => set(() => toggleSettingsModal(value)),
  setCurrentTheme: (value) => set(() => setCurrentTheme(value)),
  setPreviousTheme: (value) => set(() => setPreviousTheme(value)),
  setRedactedComplete: (value) => set(() => setRedactedComplete(value)),
  setLocked: (value) => set(() => setLocked(value)),
}));

export default useSystemStore;
