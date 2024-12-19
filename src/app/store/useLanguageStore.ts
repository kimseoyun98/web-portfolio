import { create } from "zustand";

interface LanguageState {
  language: "en" | "ko";
  toggleLanguage: () => void;
}

const useLanguageStore = create<LanguageState>((set) => ({
  language: "ko",
  toggleLanguage: () =>
    set((state) => ({ language: state.language === "en" ? "ko" : "en" })),
}));

export default useLanguageStore;
