import { X, Star, Calendar } from "lucide-react";

const MovieModal = ({ movie, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex justify-center items-center bg-gray-950/70 p-4"
    >
      <div className="w-full max-w-xl max-h-[85vh] overflow-y-auto bg-surface shadow-2xl rounded-2xl">
        <div className="relative">
          <div className="aspect-video bg-surface-soft">
            {movie.backdrop ? (
              <img
                src={movie.backdrop}
                alt={movie.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted text-sm">
                No image available
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 w-10 h-10 rounded-full p-2 bg-red-400 hover:bg-red-500 transition-colors"
          >
            <X className="text-ink" />
          </button>
        </div>

        <div className="p-6">
          <h2 className="font-display text-3xl text-paper tracking-wide">
            {movie.name}
          </h2>

          <div className="flex items-center gap-4 mt-2 text-sm text-muted">
            <span className="flex items-center gap-1">
              <Star size={14} className="text-marquee" fill="currentColor" />
              Rating: {movie.rating ?? "N/A"}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              Release: {movie.year}
            </span>
          </div>

          {movie.genres.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="text-xs text-muted border border-surface-soft py-1 px-3 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5">
            <h3 className="text-paper font-semibold mb-2">Overview</h3>
            <p className="text-muted leading-relaxed">{movie.summary}</p>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={onClose}
              className="transition-all delay-200 hover:scale-105 bg-surface-soft hover:bg-red-400 text-paper text-sm font-bold py-2 px-5 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
