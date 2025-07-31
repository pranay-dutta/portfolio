import { Button } from "@radix-ui/themes";
import { useYoutubeContext } from "../context/useYoutubeContext";

const MusicPlayButton = () => {
  const { play, setPlay } = useYoutubeContext();

  return (
    <Button variant="outline" color="gray" className="w-[100%]!" onClick={() => setPlay(!play)}>
      {play ? "Pause" : "Listen some music ?"}
    </Button>
  );
};

export default MusicPlayButton;
