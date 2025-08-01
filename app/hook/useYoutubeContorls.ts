import { useRef, useCallback } from "react";

export const useYoutubeControls = () => {
  const playerRef = useRef<any>(null);

  const onReady = useCallback((event: any) => {
    playerRef.current = event.target;
  }, []);

  const play = () => playerRef.current?.playVideo();
  const pause = () => playerRef.current?.pauseVideo();
  const next = () => playerRef.current?.nextVideo();
  const prev = () => playerRef.current?.previousVideo();
  const getPlayerState = (): number => playerRef.current?.getPlayerState();

  return {
    onReady,
    play,
    pause,
    next,
    prev,
    getPlayerState,
    player: playerRef,
  };
};
