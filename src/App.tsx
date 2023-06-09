import { useState, useEffect } from "react";
import VideoPlayer from "./components/VideoPlayer";
import ListItem from "./components/ListItem";
import { usePlaylist } from "./hooks/usePlaylist";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import logo from "./assets/logo_listofonik_waves.png";
import "./styles/index.scss";
import { playlistIds } from "./config/apiConfig";

export default function App() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);
  const playlistResponse = usePlaylist(playlistIds[1]);

  useEffect(() => {
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
    !!playlist.length ? 
      <div className="main-wrapper">
        <div className="logo-wrapper">
          <img className={"logo"} src={logo} alt={"logo"} />

        </div>
        <div className="video-wrapper">
          <GrChapterPrevious onClick={handlePrev} />
          <VideoPlayer
            handleNext={handleNext}
            playlist={playlist}
            currentVideo={currentVideo}
          />
          <GrChapterNext onClick={handleNext} />
        </div>
        <div className="list-wrapper">
          {playlist.map((item: PlaylistItem) => (
            <ListItem
              key={item.videoId}
              item={item}
              isPlaying={playlist[currentVideo].videoId === item.videoId}
              selectVideo={handleSelectVideo}
            />
          ))}
        </div>
      </div>
      : <></>
    )
}
