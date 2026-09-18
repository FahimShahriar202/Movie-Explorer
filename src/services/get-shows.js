import { formatShow } from "../utils/format-show.js";

export const getShows = async () => {
  const url = "https://api.tvmaze.com/shows";

  const result = await fetch(url);

  if (!result.ok) {
    throw new Error("Sorry, the shows list isn't loading right now");
  }

  const data = await result.json();

  return data.map(formatShow);
};
