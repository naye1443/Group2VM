const express = require('express');
const router = express.Router();
var Busboy = require('busboy')
var fs = require('fs');
var os = require('os');
var path = require('path');

router.get('/', (req, res, next) =>{
    console.log("server is running on localhost 5000");
    res.render('index');

    // Move to next server
});

// Handels uploading images to
router.post('/', (req,res,next) =>{

    var bb = Busboy({headers: req.headers});

    bb.on('file', (name, file, encoding, mimetype) => { // Finds file event in stream
        var saveTo = path.join('.', name);
        console.log("Uploading:" +  saveTo)
        file.pipe(fs.createWriteStream(saveTo)); // Write to images file
    });
    bb.on('finish', () => {
        console.log('Upload complete');
        res.writeHead(200, {'Connection': 'close'});
        res.end("that's all folks!")
    });

    return req.pipe(bb);

    // Take data from req
    console.log(req.body);
    res.sendStatus(200);

    // Take data and store in local file system

    // send response back detailing status of upload

} )
module.exports = router;