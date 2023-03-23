type ThumbnailType = {
    height: number,
    width: number,
    url: string,
}

type Thumbnails = {
    default: ThumbnailType,
    standard: ThumbnailType,
    medium: ThumbnailType,
    high: ThumbnailType,
}

type PlaylistItem = {
    description: string,
    title: string,
    videoId: string,
    thumbnails: Thumbnails
}