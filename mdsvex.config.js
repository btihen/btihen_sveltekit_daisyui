import { defineMDSveXConfig as defineConfig } from "mdsvex";

// allow access to local files / images., i.e.: `![my image](./my-image.png)`
import relativeImages from 'mdsvex-relative-images'

// control opening of external links
// import rehypeExternalLinks from 'rehype-external-links'

// add reading time to posts
// import readingTime from 'remark-reading-time'

// stuff to build a table of contents
// // collects achors to sections (slugs) and makes links to sections
// import autolinkHeadings from 'rehype-autolink-headings'
// // creates local achors to sections
// import slugPlugin from 'rehype-slug'

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  layout: {
    post: "./src/lib/mdx/_post.svelte",
    _: "./src/lib/mdx/_post.svelte",
  },

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [
    // adds a `readingTime` frontmatter attribute
    // readingTime(),
    relativeImages,
    // external links open in a new tab
  ],
  // rehypePlugins: [
  //   // slugPlugin,
  //   // [
  //   //   autolinkHeadings,
  //   //   {
  //   //     behavior: 'wrap',
  //   //   },
  //   // ],
  //   [
  //     rehypeExternalLinks,
  //     {
  //       target: '_blank', rel: 'noopener'
  //     }
  //   ],
  // ],
});

export default config;
