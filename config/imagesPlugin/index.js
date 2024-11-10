
const fs = require('../../_src/imgs/Granny-squareSVG-wClasses.svg');
function imgPlugin(config) {
    let getSvgContent = function (file) {
        let relativeFilePath = `./_src/imgs/${file}`;
        let data = fs.readFileSync(relativeFilePath, function(err, contents) {
            if (err) return err
            return contents
        });

        return data.toString('utf8');
    }


}
module.exports = imgPlugin;
