import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

interface LottiePlayerProps {
  getPlayerState: () => number;
}
const LottiePlayer = ({ getPlayerState }: LottiePlayerProps) => {
  const [state, setState] = useState(getPlayerState());

  useEffect(() => {
    const interval = setInterval(() => {
      setState(getPlayerState());
    }, 300); // Poll every 300ms

    return () => clearInterval(interval);
  }, [getPlayerState]);

  return (
    <DotLottieReact
      className={`${state === 1 ? "absolute" : "hidden"} -z-10 top-0 w-full transition-opacity duration-500`}
      src="https://lottie.host/bddf6721-7106-476a-9604-215e4f043948/efaicR2wjk.lottie"
      loop
      autoplay
    />
  );
};

export default LottiePlayer;
