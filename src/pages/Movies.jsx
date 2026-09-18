import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { getShows } from "../services/get-shows.js";
import { searchShows } from "../services/search-shows.js";
import { useDebounce } from "../hooks/useDebounce.js";
import MovieCard from "../components/MovieCard.jsx";
import MovieModal from "../components/MovieModal.jsx";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);

  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      setError("");

      try {
        const value = debouncedQuery.trim();
        const data = value ? await searchShows(value) : await getShows();
        setMovies(data);
      } catch (err) {
        console.log(err);
        setError("Sorry, movies didn't load. Try again in a moment.");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [debouncedQuery]);

  return (
    <section className="max-w-6xl mx-auto px-5 py-10">
      <div className="relative max-w-xl mx-auto">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          size={18}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="w-full py-3 pl-11 pr-4 bg-surface rounded-full border border-surface-soft focus:outline-none focus:ring-2 focus:ring-marquee focus:border-marquee text-paper placeholder:text-muted"
        />
      </div>

      {error && <p className="text-center text-red-400 mt-8">{error}</p>}

      {loading && !error && (
        <p className="text-center text-muted mt-8">Loading movies...</p>
      )}

      {!loading && !error && movies.length === 0 && (
        <p className="text-center text-muted mt-8">
          No movies found for "{debouncedQuery}".
        </p>
      )}

      {!loading && !error && movies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onSelect={setSelected} />
          ))}
        </div>
      )}

      {selected && (
        <MovieModal movie={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Movies;
