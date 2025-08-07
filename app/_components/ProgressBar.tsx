import { Progress } from "@radix-ui/themes";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  getCurrentTime: () => number;
  getDuration: () => number;
}
const ProgressBar = ({ getCurrentTime, getDuration }: ProgressBarProps) => {
  /*  
  Note that getDuration() will return 0 until the video's metadata is loaded, 
  which normally happens just after the video starts playing.
 */
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = getDuration();
      const currentTime = getCurrentTime();
      if (duration) {
        setProgress(Math.min(currentTime / duration, 1)); // Ensure progress does not exceed 100%
      }
    }, 100);

    return () => clearInterval(interval);
  }, [getCurrentTime, getDuration]);

  return <Progress value={progress * 100} size="1" color="gray" />;
};

export default ProgressBar;
