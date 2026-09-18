import { Star, Calendar } from "lucide-react";

const MovieCard = ({ movie, onSelect }) => {
  return (
    <div className="bg-surface rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform">
      <div className="aspect-[2/3] bg-surface-soft">
        {movie.image ? (
          <img
            src={movie.image}
            alt={movie.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted text-sm">
            No poster
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-paper line-clamp-1">{movie.name}</h3>

        <div className="flex items-center gap-3 mt-2 text-sm text-muted">
          <span className="flex items-center gap-1">
            <Star size={14} className="text-marquee" fill="currentColor" />
            {movie.rating ?? "N/A"}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {movie.year}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSelect(movie)}
          className="mt-auto transition-all delay-200 hover:scale-105 bg-marquee hover:bg-marquee-dim text-ink text-sm font-bold py-2 px-4 rounded-full"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
