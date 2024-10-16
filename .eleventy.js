// const {imgPlugin} = require('fs');

module.exports = function (eleventyConfig) {

    // let getSvgContent = function (file) {
    //     let relativeFilePath = `../src/imgs/${file}`;
    //     let data = imgPlugin.readFileSync(relativeFilePath, function(err, contents) {
    //             if (err) return err
    //             return contents
    //             }
    //         );
    //
    //     return data.toString('utf8');
    // }
    // eleventyConfig.addShortcode("svg", getSvgContent);
    //
    //place this in MD file
    // {% svg '../imgs/Granny-squareSVG-wClasses.svg' %}




    // Copy `_src/img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("_src/_includes/");
    eleventyConfig.addPassthroughCopy("./_src/css/");
    eleventyConfig.addPassthroughCopy("./_src/diagram-patterns/");
    eleventyConfig.addPassthroughCopy("./_src/written-patterns/");
    eleventyConfig.addPassthroughCopy("./_src/stitches/");
    eleventyConfig.addPassthroughCopy("./_src/imgs/");
    eleventyConfig.addPassthroughCopy("./_src/JS/");

    eleventyConfig.addWatchTarget("./_src/css/")




    return {
        dir: {
            input: "_src",
            output: '_site'
        },
    };
};