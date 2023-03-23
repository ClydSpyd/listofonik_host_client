type Props = {
  item: PlaylistItem;
  isPlaying: boolean;
  selectVideo: (video: PlaylistItem) => void;
};

const ListItem = ({ item, isPlaying, selectVideo }: Props) => {
  const renderTitle = (title: string) => {
    return title.length < 40 ? title : `${title.slice(0, 40)}...`;
  };
  return (
    <div onClick={() => selectVideo(item)} className={`list-item ${isPlaying && 'playing'}`}>
      <img src={item.thumbnails.default?.url} alt={item.title} />
      <div className="content">
        <p>{renderTitle(item.title)}</p>
      </div>
    </div>
  );
};

export default ListItem;
