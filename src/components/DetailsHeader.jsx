import { Link } from "react-router-dom";
const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId].attributes;
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-28 md:h-48" />
      <div className="absolute inset-0 flex items-center">
        <img
          alt="art"
          src={artistId ? artist?.artwork?.url.replace("{w}", "500").replace("{h}", "500") : songData?.images.coverart}
          className="sm:h-28 sm:w-28 md:w-48 md:h-48 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="ml-5">
          <p className="font-bold text-xl text-white">{artistId ? artist?.name : songData?.title}</p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24"/>
    </div>
  );
};

export default DetailsHeader;
