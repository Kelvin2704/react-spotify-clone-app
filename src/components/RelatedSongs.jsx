import SongBar from "./SongBar";

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick,artistId }) => (
<div className="flex flex-col">
  <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
  <div className="mt-6 w-full flex flex-col">
    {data?.map((song,i)=>(
      <SongBar
      key={`${artistId}-${song.key}-${i}`}      
      song={song}
      artistId={artistId}
      i={i}
      activeSong={activeSong}
      isPlaying={isPlaying}
      handlePauseClick={handlePauseClick}
      handlePlayClick={handlePlayClick}
      />
    ))}
  </div>
</div>);

export default RelatedSongs;
