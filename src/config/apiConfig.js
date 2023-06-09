export const apiBaseUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?';

export const playlistIds = {
    1:"PL4njG2umBZ_ig2JqeJhiz5R5fDhMLNOTz",
    2:"PLqYXv_L7NiEyYnfZhVHR7ixOTANxjes89",
  }

export const playlistUrlParams = {
    part: "snippet",
    maxResults: 50,
    key: process.env.REACT_APP_YT_API_KEY
  };
