import { Button, Text } from "@radix-ui/themes";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import MusicNextButton from "./MusicNextButton";
import MusicPlayPauseButton from "./MusicPlayPause";
import MusicPreviousButton from "./MusicPreviousButton";
import PlayListForm from "./PlayListForm";
import YoutubeVideo from "./YoutubeVideo";

interface SongSectionProps {
  onReady: (event: any) => void;
  play: () => any;
  pause: () => any;
  next: () => any;
  prev: () => any;
  getPlayerState: () => number;
}

type ShowInputContextType = {
  showInput: boolean;
  setShowInput: Dispatch<SetStateAction<boolean>>;
};

export const ShowInputContext = createContext<ShowInputContextType | null>(null);

const SongSection = ({ onReady, getPlayerState, next, prev, play, pause }: SongSectionProps) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [showInput, setShowInput] = useState(false);

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
            className="overflow-hidden flex items-center gap-2"
          >
            <Button
              variant="outline"
              color="gray"
              className="outline-0!"
              onClick={() => setShowInput(!showInput)}
            >
              <IoMdAdd className={`inline text-white ${showInput ? "rotate-45" : ""}`} />
            </Button>

            {/* Player Buttons */}
            <AnimatePresence>
              {!showInput && (
                <motion.div
                  initial={{ opacity: 0, width: "100%", x: 20 }}
                  animate={{ opacity: 1, width: "100%", x: 0 }}
                  className="flex items-center justify-between gap-2"
                >
                  <MusicPreviousButton prev={prev} />
                  <MusicPlayPauseButton getPlayerState={getPlayerState} play={play} pause={pause} />
                  <MusicNextButton next={next} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Playlist Input Section */}
            <AnimatePresence>
              {showInput && ( //or pass showInput as a prop to PlayListForm
                <motion.div
                  initial={{ opacity: 0, width: "100%", x: -20 }}
                  animate={{ opacity: 1, width: "100%", x: 0 }}
                  className="items-center gap-2"
                >
                  <ShowInputContext value={{ showInput, setShowInput }}>
                    <PlayListForm />
                  </ShowInputContext>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Youtube video */}
      <YoutubeVideo onReady={onReady} />
    </>
  );
};
export default SongSection;
