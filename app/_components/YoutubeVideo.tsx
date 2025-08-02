import YouTube from "react-youtube";
import usePlayListIdStore from "../store/usePlayListIdStore";

const YoutubeVideo = ({ onReady }: { onReady: (event: any) => void }) => {
  const playListId = usePlayListIdStore((state) => state.playListId);

  return (
    <YouTube
      className="opacity-0"
      onReady={onReady}
      // Very low height and width such that volume does not distort on initial load
      opts={{
        height: "1",
        width: "1",
        playerVars: {
          listType: "playlist",
          list: playListId,
        },
      }}
    />
  );
};

export default YoutubeVideo;
