import { Button, Kbd } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTogglePlayer } from "../hook/useTogglePlayer";

interface PlayerPauseButtonProps {
  getPlayerState: () => number;
  play: () => void;
  pause: () => void;
}

const MusicPlayPauseButton = ({ getPlayerState, play, pause }: PlayerPauseButtonProps) => {
  const { playing, controls, toggle } = useTogglePlayer({ getPlayerState, play, pause });

  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      if (e.key === "k") toggle();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);

  return (
    <motion.div animate={controls} whileTap={{ scale: 0.9 }} className="w-full">
      <Button variant="outline" color="gray" className="outline-0! w-[100%]!" onClick={toggle}>
        {playing ? "Pause" : "Play"}
        <Kbd>K</Kbd>
      </Button>
    </motion.div>
  );
};

export default MusicPlayPauseButton;
