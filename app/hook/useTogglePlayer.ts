import { useAnimation } from "framer-motion";
import { useState } from "react";

type PlayerControls = {
  getPlayerState: () => number | undefined;
  play: () => void;
  pause: () => void;
};

export const useTogglePlayer = ({ getPlayerState, play, pause }: PlayerControls) => {
  const controls = useAnimation();
  const [playing, setPlaying] = useState(getPlayerState() === 1);

  const toggle = async () => {
    if (getPlayerState?.() === 1) {
      pause();
      setPlaying(false);
    } else {
      play();
      setPlaying(true);
    }

    await controls.start({ scale: 0.9 });
    await controls.start({ scale: 1 });
  };

  return { toggle, controls, playing };
};
