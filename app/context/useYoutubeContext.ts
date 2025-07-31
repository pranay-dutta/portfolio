import { createContext, Dispatch, SetStateAction, useContext } from "react";

type YoutubeContextType = {
  play: boolean;
  setPlay: Dispatch<SetStateAction<boolean>>;
};
export const YoutubeContextProvider = createContext<YoutubeContextType | null>(null);

export const useYoutubeContext = () => {
  const context = useContext(YoutubeContextProvider);

  if (!context) {
    throw new Error("useYoutubeContext must be used within a YoutubeProvider");
  }
  return context;
};
