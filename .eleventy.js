module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("src/meta");
  eleventyConfig.addWatchTarget("postcss/**/*.css");

  return {
    templateFormats: ["html", "pug"],
    dir: {
      input: "src",
      output: "dist"
    }
  }
};