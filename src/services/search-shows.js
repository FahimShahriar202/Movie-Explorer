import { formatShow } from "../utils/format-show.js";

export const searchShows = async (query) => {
  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

  const result = await fetch(url);

  if (!result.ok) {
    throw new Error("Sorry, search isn't working right now");
  }

  const data = await result.json();

  // TVMaze wraps each hit as { score, show }
  return data.map((hit) => formatShow(hit.show));
};
