const fs = require('fs')

class Lib {
    verifyPath = (path, baseName) => {
        let baseDir;
        if (!path) {
            baseDir = baseName;
        } else {
            baseDir = path;
        }
        return baseDir;
    }

    searchDir = (pathDirectory) => {
        var found;
        fs.readdir(pathDirectory, function (err, files) {
            if (err) {
                console.log(err);
                found = false;
                console.log(found)
            }
            if (files.length == 0 ? found = false : found = true);
        });
        return found;
    }
}

module.exports = Lib;