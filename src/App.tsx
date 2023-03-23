import "./styles/index.scss";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import logo from "./assets/logo_listofonik_blue.png";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import ListItem from "./components/ListItem";
import { usePlaylist } from "./hooks/usePlaylist";

const playlistId = "PL4njG2umBZ_ig2JqeJhiz5R5fDhMLNOTz";
const playlistId2 = "PLqYXv_L7NiEyYnfZhVHR7ixOTANxjes89";

export default function App() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);
  const playlistResponse = usePlaylist(playlistId2);

  useEffect(() => {
    console.log(playlistResponse);
    playlistResponse && setPlaylist(playlistResponse!);
  }, [playlistResponse]);

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % playlist.length);
  };

  const handlePrev = () => {
    setCurrentVideo((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const handleSelectVideo = (video: PlaylistItem) => {
    const newIdx = playlist.findIndex(
      (i: PlaylistItem) => i.videoId === video.videoId
    );
    setCurrentVideo(newIdx);
  };

  return (
    <div className="main-wrapper">
      <img className={"logo"} src={logo} alt={"logo"} />
      <div className="video-wrapper">
        <GrChapterPrevious onClick={handlePrev} />
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
        <GrChapterNext onClick={handleNext} />
      </div>
      <div className="list-wrapper">
        {playlist.length &&
          playlist.map((item: PlaylistItem) => (
            <ListItem
              item={item}
              isPlaying={playlist[currentVideo].videoId === item.videoId}
              selectVideo={handleSelectVideo}
            />
          ))}
      </div>
    </div>
  );
}
