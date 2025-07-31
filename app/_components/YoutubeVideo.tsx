import { useYoutubeContext } from "../context/useYoutubeContext";

const YoutubeVideo = () => {
  const { play } = useYoutubeContext();

  return (
    <iframe
      width="300"
      height="200"
      className="hidden"
      src={`https://www.youtube.com/embed/8of5w7RgcTc?si=XVDEtjEk3S9Faood&autoplay=${play}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default YoutubeVideo;
