import axios from "axios";
import { useEffect, useState } from "react";
import { parsePlaylistData } from "../utils/parsePlaylistData";

export const usePlaylist = (playlistId: string) => {
  const [playlist, setPlaylist] = useState<PlaylistItem[]>();
  const api_key = "AIzaSyBE2O3F4Yqz7H0xn6O-fMqaNkBwTHrR8EY";
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${api_key}`;

  useEffect(() => {
    const fetchPlaylist = async () => {
      const { data } = await axios.get(url);
      console.log(data);
      const parsedData = parsePlaylistData(data.items);
      parsedData && setPlaylist(parsedData);
    };
    fetchPlaylist();
  }, [url]);

  return playlist;
};
