module.exports = function (eleventyConfig) {
    // Copy `_src/img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("_src/includes/");
    eleventyConfig.addPassthroughCopy("./_src/css/");
    eleventyConfig.addPassthroughCopy("./_src/patterns/");
    eleventyConfig.addPassthroughCopy("./_src/stitches/");
    eleventyConfig.addPassthroughCopy("./_src/imgs/");
    eleventyConfig.addPassthroughCopy("./_src/JS/");

    eleventyConfig.addWatchTarget("./_src/css/")

    eleventyConfig.addNunjucksAsyncShortcode('svgIcon', async (src, alt, sizes) => {
        let metadata = await Image(src, {
            formats: ['svg'],
            dryRun: true,
        })
        return metadata.svg[0].buffer.toString()
    })

    return {
        dir: {
            input: "_src",
            output: '_site'
        },
    };
};