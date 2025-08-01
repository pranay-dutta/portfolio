import { Text } from "@radix-ui/themes";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import MusicNextButton from "./MusicNextButton";
import MusicPlayPauseButton from "./MusicPlayPause";
import MusicPreviousButton from "./MusicPreviousButton";
import YoutubeVideo from "./YoutubeVideo";
import { useYoutubeControls } from "../hook/useYoutubeContorls";

const SongSection = () => {
  const [showPlayer, setShowPlayer] = useState(false);
  const { getPlayerState, onReady, next, prev, play, pause } = useYoutubeControls();
  return (
    <>
      {/* Music play recommendation */}
      <Text
        size="2"
        className="inline-block text-neutral-400 !leading-7 tracking-wide! cursor-pointer hover:text-pink-200"
        mb={showPlayer ? "4" : "0"}
        onClick={() => setShowPlayer(!showPlayer)}
      >
        Wanna listen to some music{" "}
        {showPlayer ? <GoArrowUpRight className="inline" /> : <GoArrowDownRight className="inline" />}
      </Text>

      {/* Player controls */}
      <AnimatePresence>
        {showPlayer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden flex items-center gap-5"
          >
            <MusicPreviousButton prev={prev} />
            <MusicPlayPauseButton getPlayerState={getPlayerState} play={play} pause={pause} />
            <MusicNextButton next={next} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Youtube video */}
      <YoutubeVideo onReady={onReady} />
    </>
  );
};
export default SongSection;
