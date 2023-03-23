import YouTube, { YouTubeEvent } from "react-youtube";

type Props = {
  handleNext: (event: YouTubeEvent<number>) => void;
  playlist: PlaylistItem[];
  currentVideo: number;
};

const playerOptions = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};

const VideoPlayer = ({ handleNext, playlist, currentVideo }: Props) => {
  return (
    <YouTube
      onEnd={handleNext}
      videoId={playlist.length ? playlist[currentVideo].videoId : ""}
      opts={playerOptions}
    />
  );
};

export default VideoPlayer;
