import { useEffect, useState } from "react";
import axios from "axios";
import { parsePlaylistData } from "../utils/parsePlaylistData";
import { stringifyParams } from "../utils/stringifyParams";
import { apiBaseUrl, playlistUrlParams } from "../config/apiConfig";

export const usePlaylist = (playlistId: string) => {
  const [playlist, setPlaylist] = useState<PlaylistItem[]>();
  
  const url = `${apiBaseUrl}${stringifyParams({
    ...playlistUrlParams,
    playlistId,
  })}`;

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
