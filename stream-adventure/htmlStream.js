var trumpet= require('trumpet');
var {Transform} = require('stream');
var tr= trumpet();

var stream=tr.select('.loud').createStream();

var str= new Transform();
str._transform=function (data,env,cb){
    this.push(data.toString().toUpperCase());
    cb();
}

stream.pipe(str).pipe(stream)
tr.pipe(process.stdout);

process.stdin.pipe(tr);

