var http= require('http');
var {Transform}= require('stream');

var transformStream= new Transform();
transformStream._transform=function(chunk,enc,cb){
    var upperChunk= chunk.toString().toUpperCase();
    this.push(upperChunk);
    cb();
}
var server= http.createServer(function(req,res){
    req.pipe(transformStream)
    .pipe(res);
});

server.listen(process.argv[2]);