import { createHighlighter } from "shiki";
import { mdsvex, escapeSvelte } from "mdsvex";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const theme = "github-dark";
const highlighter = await createHighlighter({
  themes: [theme],
  langs: ["javascript", "typescript", "go", "rust", "bash"],
});

const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      highlight: {
        highlighter: async (code, lang = "text") => {
          const html = escapeSvelte(
            highlighter.codeToHtml(code, { lang, theme }),
          );
          return `{@html \`${html}\` }`;
        },
      },
      smartypants: true,
      layout: {
        blog: "./src/lib/blog-layout.svelte",
        _: "./src/lib/web-layout.svelte",
      },
    }),
  ],
  kit: { adapter: adapter() },
  extensions: [".svelte", ".svx", ".md"],
};

export default config;
