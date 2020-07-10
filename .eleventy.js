/* jshint esversion: 6 */

module.exports = function(eleventyConfig) {

  let markdownIt = require("markdown-it");

  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };

  let markdownLib = markdownIt(options)
    .use(require('markdown-it-anchor'), {
          permalink: true,
          permalinkBefore: true,
          permalinkSymbol: '' // §
        })
    .use( require("markdown-it-toc-done-right"), {
      level: 1
    });

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
};
