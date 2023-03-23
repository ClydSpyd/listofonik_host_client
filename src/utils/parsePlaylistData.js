export const parsePlaylistData = (data) => {
  return data
    .filter((i) => i.snippet.title !== "Deleted video")
    .map((video) => {
      return {
        thumbnails: video.snippet.thumbnails,
        title: video.snippet.title,
        description: video.snippet.description,
        videoId: video.snippet.resourceId.videoId,
      };
    });
};
