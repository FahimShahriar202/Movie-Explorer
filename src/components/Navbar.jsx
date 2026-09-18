import { Clapperboard } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur border-b border-surface-soft">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Clapperboard className="text-marquee" size={26} />
          <span className="font-display text-2xl text-paper tracking-wide">
            Movie<span className="text-marquee">Explorer</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="hidden sm:inline text-sm text-muted hover:text-paper transition-colors"
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="bg-marquee hover:bg-marquee-dim transition-colors text-ink font-semibold text-sm py-2 px-5 rounded-full"
          >
            Movies
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
