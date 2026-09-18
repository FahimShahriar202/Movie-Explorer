import { Link } from "react-router";

const Home = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="film-strip" />

      <div
        className="relative py-28 px-5 text-center bg-gradient-to-b from-surface to-ink"
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-6xl sm:text-7xl text-paper leading-none">
            Discover <span className="text-marquee">Movies</span>
          </h1>

          <p className="mt-6 text-muted text-lg">
            Explore and discover your favorite shows and movies from around
            the world, all in one place.
          </p>

          <Link
            to="/movies"
            className="inline-block mt-10 transition-all delay-200 bg-marquee hover:scale-105 hover:bg-marquee-dim text-ink text-lg font-bold py-3 px-8 rounded-full"
          >
            Explore Now
          </Link>
        </div>
      </div>

      <div className="film-strip" />
    </section>
  );
};

export default Home;
