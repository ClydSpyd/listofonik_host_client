import YouTube, { YouTubeEvent } from "react-youtube";

type Props = {
    handleNext: (event: YouTubeEvent<number>) => void,
    playlist: PlaylistItem[],
    currentVideo: number
}

const VideoPlayer = ({ handleNext, playlist, currentVideo}: Props) => {
  return (
    <YouTube
      onEnd={handleNext}
      videoId={playlist.length ? playlist[currentVideo].videoId : ""}
      opts={{
        height: "390",
        width: "640",
        playerVars: {
          autoplay: 1,
        },
      }}
    />
  )
}

export default VideoPlayer