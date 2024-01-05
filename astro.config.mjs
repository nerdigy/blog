import { defineConfig } from "astro/config";
import icon from "astro-icon";
import rehypePrettyCode from "rehype-pretty-code";
import json from "./public/rose-pine.json" assert { type: "json" };

import tailwind from "@astrojs/tailwind";

const options = {
  theme: json
};

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind()],
  markdown: {
    syntaxHighlight: false, // Disable syntax built-in syntax hightlighting from astro
    rehypePlugins: [[rehypePrettyCode, options]]
  }
});
