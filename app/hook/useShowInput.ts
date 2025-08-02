import { useContext } from "react";
import { ShowInputContext } from "../_components/SongSection";

export const useShowInput = () => {
  const context = useContext(ShowInputContext);
  if (!context) throw new Error("useShowInput must be used within a ShowInputProvider");
  return context;
};
