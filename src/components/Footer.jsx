import { Code2, X as XIcon, Clapperboard } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-surface-soft mt-auto">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Clapperboard className="text-marquee" size={18} />
          <span className="font-display text-lg tracking-wide">
            Movie<span className="text-marquee">Explorer</span>
          </span>
        </div>

        <p className="text-sm text-muted">© 2026 MovieExplorer. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-paper transition-colors"
          >
            <Code2 size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-paper transition-colors"
          >
            <XIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
