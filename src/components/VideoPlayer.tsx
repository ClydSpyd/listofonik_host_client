import YouTube, { YouTubeEvent } from "react-youtube";
import { useWindowSize } from "../hooks/useWindowSize";

type Props = {
  handleNext: (event: YouTubeEvent<number>) => void;
  playlist: PlaylistItem[];
  currentVideo: number;
};


const VideoPlayer = ({ handleNext, playlist, currentVideo }: Props) => {

    const { width } = useWindowSize();
    
    const playerOptions = {
      height: width! < 760 ? 250 : 390,
      width: width! < 760 ? 350 : 640,
      playerVars: {
        autoplay: 1,
      },
    };

  return (
    <div className="player-wrapper">
      <YouTube
        onEnd={handleNext}
        videoId={playlist.length ? playlist[currentVideo].videoId : ""}
        opts={playerOptions}
      />
    </div>
  );
};

export default VideoPlayer;
