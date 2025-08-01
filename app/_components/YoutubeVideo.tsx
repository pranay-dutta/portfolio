import YouTube from "react-youtube";
const YoutubeVideo = ({ onReady }: { onReady: (event: any) => void }) => {
  return (
    <YouTube
      className="hidden"
      onReady={onReady}
      opts={{
        height: "30",
        width: "60",
        playerVars: {
          listType: "playlist",
          list: "PL6mQxk_dOQIatSsuHQHCKvFSVrmmJE_Cq"
        },
      }}
    />
  );
};

export default YoutubeVideo;
