import { create } from "zustand";

interface ProjetSection {
  isOpen: boolean;
  toggleOpen: () => void;
}
const useProjectSectionOpen = create<ProjetSection>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useProjectSectionOpen;
