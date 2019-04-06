var fs= require('fs');
var str=fs.createReadStream(process.argv[2]);
str.pipe(process.stdout);