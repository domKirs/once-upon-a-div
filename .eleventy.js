module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("src/meta");
  eleventyConfig.addPassthroughCopy("src/favicon");
  eleventyConfig.addPassthroughCopy("src/*.ico");
  eleventyConfig.addWatchTarget("postcss/**/*.css");

  return {
    templateFormats: ["html", "pug"],
    dir: {
      input: "src",
      output: "dist"
    }
  }
};