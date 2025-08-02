import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PlayListIdStore {
  playListId: string;
  setPlayListId: (newId: string) => void;
}
export default create<PlayListIdStore>()(
  persist(
    (set) => ({
      playListId: "PL6mQxk_dOQIatSsuHQHCKvFSVrmmJE_Cq",
      setPlayListId: (newId: string) => set({ playListId: newId }),
    }),
    { name: "playlist-id" },
  ),
);
