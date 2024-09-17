module.exports = function (eleventyConfig) {
    // Copy `_src/img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("./_src/css/");
    eleventyConfig.addWatchTarget("./_src/css/")

    return {
        dir: {
            input: "_src",
            output: '_site'
        },
    };
};