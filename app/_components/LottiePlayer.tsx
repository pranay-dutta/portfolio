import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useYoutubeContext } from "../context/useYoutubeContext";

const LottiePlayer = () => {
  const { play } = useYoutubeContext();

  return (
    <DotLottieReact
      className={`${play ? "absolute" : "hidden"} -z-10 top-0 w-full transition-opacity duration-500`}
      src="https://lottie.host/bddf6721-7106-476a-9604-215e4f043948/efaicR2wjk.lottie"
      loop
      autoplay
    />
  );
};

export default LottiePlayer;
