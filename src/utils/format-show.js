// TVMaze summaries come back as HTML strings (wrapped in <p> tags etc).
// This strips the tags so we can drop the text straight into JSX.
const stripHtml = (html) => {
  if (!html) return "No summary available.";
  return html.replace(/<[^>]+>/g, "");
};

export const formatShow = (show) => {
  return {
    id: show.id,
    name: show.name,
    image: show.image?.medium || show.image?.original || null,
    backdrop: show.image?.original || show.image?.medium || null,
    rating: show.rating?.average ?? null,
    year: show.premiered ? show.premiered.slice(0, 4) : "N/A",
    summary: stripHtml(show.summary),
    genres: show.genres || [],
  };
};
