const express = require('express');
const fs = require('fs');
const path = require('path');
const Lib = require('../libs/index.js');

const lib = new Lib();
const router = express.Router();

//Setting the base url where all the data will be stored
var baseName = path.join(__dirname, '../storage');

router.post('/', (req, res) => {
    const baseDir = lib.verifyPath(req.body.path, baseName);

    const files = fs.readdirSync(baseDir);
    const pathDir = path.join(baseDir, '');

    return res.json({
        'files': files,
        'path': pathDir
    });
});

router.post('/back', (req, res) => {

    const dirname = path.dirname(req.body.path);

    const pathDir = path.join(dirname, '/.'); //Up a level
    const files = fs.readdirSync(pathDir);

    return res.json({
        'files': files,
        'path': pathDir
    })
});

router.post('/move', (req, res) => {
    const name = req.body.name;
    fs.remove
});

router.post('/mkdir', (req, res) => {

    const nameDir = req.body.nameDir;
    const relativePath = req.body.path;
    //Joining the base path with the extensions inside storage
    const fullPath = path.join(baseName, relativePath);
    //Joining the name of the directory
    const pathDirectory = path.join(fullPath, '/' + nameDir);

    fs.readdir(pathDirectory, function (err, files) {

        if (err) {
            console.log(err);
            return res.json({
                message: 'Error: The directory were not found.'
            });
        }

        if (files.length == 0) {
            return res.json({
                message: 'Error: The directory already exists.'
            });
        } else {

            fs.mkdir(pathDirectory, {
                recursive: true
            }, (error) => {
                if (error)
                    return res.json({
                        'error': error
                    });
            });
            return res.json({
                message: 'success'
            });

        }
    });

});

router.post('/findDirectory', (req, res) => {

    const nameDir = req.body.nameDir;
    const relativePath = req.body.path;
    //Joining the base path with the extensions inside storage
    const fullPath = path.join(baseName, relativePath);
    //Joining the name of the directory
    const pathDirectory = path.join(fullPath, '/' + nameDir);

    fs.readdir(pathDirectory, function (err, files) {
        if (err) {
            console.log(err);
            return res.json({
                message: 'File or directory not found.'
            });
        }
        console.log(files);
        return res.json({
            message: 'File or directory were found.'
        });
    });

});

router.post('/findFile', (req, res) => {

    const nameFile = req.body.nameFile;
    const relativePath = req.body.path;
    //Joining the base path with the extensions inside storage
    const fullPath = path.join(baseName, relativePath);
    //Joining the name of the directory
    const pathFile = path.join(fullPath, '/' + nameFile);

    fs.readFile(pathFile, "utf8", function (err, files) {
        if (err) {
            console.log(err);
            return res.json({
                message: 'File not found.'
            });
        }
        console.log(files);
        return res.json({
            message: 'File were found.',
            files: files
        });
    });

});

module.exports = router;