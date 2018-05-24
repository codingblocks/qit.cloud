const urlListFile = process.argv[2],
    fs = require('fs'),
    readline = require('readline'),
    urlParser = require('./urlParser'),
    rd = readline.createInterface({
        input: fs.createReadStream(urlListFile),
        output: process.stdout,
        console: false
    });

rd.on('line', function (line) {
    urlParser.parse(line);
});