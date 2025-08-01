import YouTube from "react-youtube";
const YoutubeVideo = ({ onReady }: { onReady: (event: any) => void }) => {
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
          list: "PL6mQxk_dOQIatSsuHQHCKvFSVrmmJE_Cq",
        },
      }}
    />
  );
};

export default YoutubeVideo;
