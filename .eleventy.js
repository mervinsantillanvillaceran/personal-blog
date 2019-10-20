const { DateTime } = require("luxon");
const readingTime = require('eleventy-plugin-reading-time');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    });

    eleventyConfig.addFilter("tail", (array, n) => {
        return array.slice(Math.max(array.length - n, 0)).reverse();
    });

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(readingTime);
    eleventyConfig.addPassthroughCopy({ "resources/img": "assets/img" });
    eleventyConfig.addPassthroughCopy({ "resources/js": "assets/js" });
    eleventyConfig.addPassthroughCopy({ "resources/css/prism-dracula.css" : "assets/css/prism-dracula.css"});

    return {
        dir: {
            data: "_data",
            output: "dist"
        }
    }
}
