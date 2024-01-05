import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Nerdigy",
    description: "Random thoughts on software development and life",
    site: "https://nerdigy.com",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: await pagesGlobToRssItems(import.meta.glob("./posts/*.md")),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`
  });
}
